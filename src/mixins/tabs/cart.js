import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 购物车列表
    cart: []
  }

  onLoad(){
    this.cart = this.$parent.globalData.cart
  }

  methods = {
    // 点击步进器触发
    // @e.target.dataset.id 为原始传参传来的id值
    // @e.detail 为步进器传来的值
    countChanged(e) {
      const count = e.detail
      const id = e.target.dataset.id
      this.$parent.updateGoodsCount(id, count)
    },

    //点击复选框触发
    statusChanged(e) {
      const id = e.target.dataset.id
      const status = e.detail
      this.$parent.updateGoodsStatus(id, status)
    },

    // 根据id删除对应商品
    close(id) {
      this.$parent.removeGoodsById(id)
    },

    // 监听全选复选框改变事件
    onFullCheckChanged(e) {
      const status = e.detail
      this.$parent.updateAllGoodsStatus(status)
    },

    submitOrder() {
      if(this.amount <= 0) {
        return wepy.baseToast('订单金额不能为空!')
      }

      wepy.navigateTo({
        url: '/pages/order'
      })
    }
  }

  computed = {
    // 判断购物车是否为空
    isEmpty() {
      if(this.cart.length <= 0) {
        return true
      }
      return false
    },

    // 总价格,单位是分
    amount() {
      let total = 0   //单位是元
      this.cart.forEach(x=> {
        if(x.isCheck) {
          total += x.price * x.count
        }
      })

      return total*100
    },

    // 判断是否为全选状态
    isFullCheck() {
      // 获取所有商品个数
      const allCount = this.cart.length
      let c = 0
      this.cart.forEach(x => {
        if(x.isCheck) {
          c++
        }
      })

      return allCount === c 
    }
  }
}