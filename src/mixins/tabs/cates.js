import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 总分类数据列表
    cateList: [],
    // 默认选中的索引项
    activeKey: 0,
    // 当前屏幕可用高度
    wh: 0,
    //所有的二级分类数据
    secondCate: []
  }

  onLoad() {
    this.getWindowHeight()
    this.getCateList()
  }

  methods = {
    onChange(e) {
      // e.detail 是点击项的索引
      //console.log(e.detail)
      this.secondCate = this.cateList[e.detail].children
      console.log(this.secondCate)
    },
    //点击跳转到商品列表页面,同时把商品分类的cid传过去
    goGoodsList(cid) {
      wepy.navigateTo({
        url: '/pages/goods_list?cid=' + cid
      })
    }
  }

  async getCateList() {
    const {data: res} = await wepy.get('/categories')

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.cateList = res.message
    this.secondCate = res.message[0].children
    this.$apply()
    console.log(this.cateList)
  }

  //动态获取可用高度
  async getWindowHeight() {
    const res = await wepy.getSystemInfo()
    if(res.errMsg === 'getSystemInfo:ok') {
      this.wh = res.windowHeight
      this.$apply()
    }
  }
  
}