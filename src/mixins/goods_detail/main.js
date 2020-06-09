import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 商品ID
    goods_id: '',
    // 商品详情
    goodsInfo: {},
    // 收货地址
    addressInfo: null
  }

  onLoad(options) {
    console.log(options)
    this.goods_id = options.goods_id
    this.getGoodsInfo()
  }

  // 获取商品详情数据
  async getGoodsInfo() {
    const {data: res} = await wepy.get('/goods/detail', {goods_id: this.goods_id })
    console.log(res)

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.goodsInfo = res.message
    this.$apply()
  }

  methods = {
    // 点击预览图片
    preview(current) {
      wepy.previewImage({
        // 所有图片路径
        urls: this.goodsInfo.pics.map(x =>x.pics_big),
        // 当前图片路径
        current,
      })
    },
    // 获取用户的收货地址
    async chooseAddress() {
      const res = await wepy.chooseAddress().catch(err => err)

      if(res.errMsg !== 'chooseAddress:ok') {
        return wepy.baseToast('获取收货地址失败')
      }

      this.addressInfo = res
      wepy.setStorageSync('address', res)
      this.$apply()
    }
  }

  computed = {
    addressStr() {
      if(this.addressInfo === null) {
        return '请选择送货地址'
      }
      const addr = this.addressInfo
      const str = addr.provinceName + addr.cityName + addr.countyName + addr.detailInfo
      return str
    }
  }

}