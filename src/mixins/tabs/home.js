import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    swiperList: [],
    cateItems: []
  }

  onLoad() {
    this.getSwiperData()
    this.getCateItems()
  }

  //获取轮播图数据
  async getSwiperData() {
    const { data: res} = await wepy.request({
      url:'https://www.uinav.com/api/public/v1/home/swiperdata',
      method: 'GET',
      data: {}
    })

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.swiperList = res.message
    this.$apply()
  }

  async getCateItems() {
    const { data: res} = await wepy.request({
      url: 'https://www.uinav.com/api/public/v1/home/catitems',
      method: 'GET',
      data: {}
    })

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.cateItems = res.message
    this.$apply()
  }
}