import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    addressInfo: null,
    cart: [],
    isLogin: false
  }

  methods = {
    // 点击选择收获地址
    async chooseAddress() {
      const res = await wepy.chooseAddress().catch(err =>err)

      if(res.errMsg !=='chooseAddress:ok'){
        return
      }

      this.addressInfo = res
      wepy.setStorageSync('address',res)
      this.$apply()
    },

    // 获取用户信息
    async getUserInfo(userInfo) {
      // 判断获取用户信息失败
      if(userInfo.detail.errMsg !== 'getUserInfo:ok'){
        return wepy.baseToast('获取用户信息失败!')
      }

      const loginRes = await wepy.login()

      if(loginRes.errMsg !== 'login:ok') {
        return wepy.baseToast('微信登录失败!')
      }

      const loginParms = {
        code: loginRes.code,
        encryptedData: userInfo.detail.encryptedData,
        iv:userInfo.detail.iv,
        rawData: userInfo.detail.rawData,
        signature: userInfo.detail.signature
      }
      // 发起登录请求 换取登录成功之后的Token值
      const {data: res} = await wepy.post( '/users/wxlogin',loginParms)

      if(res.meta.status !== 200) {
        return wepy.baseToast('微信登录失败!')
      }

      wepy.setStorageSync('token', res.message.token)
      this.isLogin = true
      this.$apply()
    },

    // 提交订单
    async onSubmit() {
      if(this.amount <= 0) {
        return wepy.baseToast('订单金额不能为0!')
      }
      if(this.addressStr.length <= 0) {
        return wepy.baseToast('请选择收货地址!')
      }

      // 创建订单
      const {data: createRes} =await wepy.post('/my/orders/create',{
        // 订单金额 元
        order_price: '0.01',
        consignee_addr: this.addressStr,
        order_detail: JSON.stringify(this.cart),
        goods: this.cart.map(x => {
          return {
            goods_id: x.id,
            goods_number: x.count,
            goods_price: x.price
          }
        })
      })

      if(createRes.meta.status !== 200) {
        return wepy.baseToast('创建订单失败!')
      }

      const orderInfo = createRes.message

      // 生成预支付
      const {data: orderRes} = await wepy.post('/my/orders/req_unifiedorder',{
        order_number: orderInfo.order_number
      })

      if(orderRes.meta.status !== 200) {
        return wepy.baseToast('生成预支付订单失败!')
      }

      // 支付流程 调用微信支付api
      const payRes = await wepy.requestPayment(orderRes.message.pay).catch(err => err)

      if(payRes.errMsg === 'requestpayment:fail cancel') {
        return wepy.baseToast('您已取消了支付!')
      }

      // 微信支付成功
      // 检查支付结果
      const {data: payCheckRes} = await wepy.post('my/orders/chkOrder',{
        order_number: orderInfo.order_number
      })

      if(payCheckRes.meta.status !== 200) {
        return wepy.baseToast('订单支付失败!')
      }

      // 提示用户支付成功
      wepy.showToast({
        title: '支付成功!'
      })

      // 跳转到订单列表页面
      wepy.navigateTo('/pages/orderlist')
    }
  }

  onLoad() {
    // 读取本地收货地址
    this.addressInfo = wepy.getStorageSync('address') || null

    //从购物车列表中,过滤被勾选的商品
    const newArr = this.$parent.globalData.cart.filter(x => x.isCheck)
    this.cart = newArr
  }

  computed = {
    isHaveAddress() {
      if(this.addressInfo === null) {
        return false
      }
      return true
    },

    addressStr() {
      if(this.addressInfo === null) {
        return
      }

      return this.addressInfo.provinceName 
      + this.addressInfo.cityName 
      + this.addressInfo.countyName
      + this.addressInfo.detailInfo
    },

    amount() {
      let total = 0
      this.cart.forEach(x =>{
        total += x.price * x.count
      })

      return total * 100
    }
  }
}