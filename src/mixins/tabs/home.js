import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    swiperList: [],
    cateItems: [],
    floorData: []
  }

  onLoad() {
    this.getSwiperData()
    this.getCateItems()
    this.getFloorData()
  }

  methods = {
    //点击楼层中的图片跳转到详情页
    goGoodsList(url) {
      wepy.navigateTo({
        url
      })
    }
  }

  //获取轮播图数据
  async getSwiperData() {
    const { data: res} = await wepy.get('/home/swiperdata')

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.swiperList = res.message
    this.$apply()
  }

  async getCateItems() {
    const { data: res} = await wepy.get('/home/catitems')

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.cateItems = res.message
    this.$apply()
  }
  async getFloorData() {
    const {data: res} = await wepy.get('/home/floordata')

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.floorData = res.message
    this.$apply()
    console.log(this.floorData)
  }
}
