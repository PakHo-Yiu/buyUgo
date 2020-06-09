import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 查询关键词
    query: '',
    //商品分类id
    cid: '',
    // 页码值
    pagenum: 1,
    // 每页显示多少条数据
    pagesize: 10,
    // 商品列表数据
    goodsList: [],
    // 商品个数
    goodsNum: 0,
    // 总个数
    total: 0,
    // 数据加载完毕的凭据
    isover: false,
    // 当前数据是否正在请求中
    isloading: false
  }

  methods = {
    // 点击某一项跳转到相应的商品详情页
    goGoodsDetail(goods_id) {
      wepy.navigateTo({
        url: '/pages/goods_detail/main?goods_id=' + goods_id
      })
    }
  }

  onLoad(options) {
    console.log(options)
    this.query = options.query || ''
    this.cid = options.cid || ''
    this.getGoodsList()
  }

  async getGoodsList(cb) {
    this.isloading = true
    const {data: res} = await wepy.get('/goods/search',{
      query: this.query,
      cid: this.cid,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    })

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.goodsList = [...this.goodsList, ...res.message.goods]
    for(let i= 0; i< this.goodsList.length; i++) {
      if(this.goodsList[i].goods_small_logo !== ''){
        this.goodsList[i].goods_small_logo = this.goodsList[i].goods_small_logo
      }else{
        this.goodsList[i].goods_small_logo = 'http://image2.suning.cn/uimg/b2c/newcatentries/0070098296-000000000171085364_1_400x400.jpg'
      }
    }

    this.total = res.message.total
    console.log(this.total)
    console.log(this.goodsList)
    this.isloading = false
    this.$apply()
    cb && cb()
  }

  //上拉触底
  onReachBottom() {
    // 判断是否正在请求中
    if(this.loading) {
      return 
    }
    // 先判断是否有下一页数据
    if(this.pagenum * this.pagesize >= this.total) {
      this.isover = true
      return
    }
    console.log('触底了')
    this.pagenum++
    this.getGoodsList()
  }

  // 下拉刷新
  onPullDownRefresh() {
    // 初始化值
    this.pagenum = 1
    this.total = 0
    this.goodsList = []
    this.isover = this.isloading = false
    // 重新获取数据
    this.getGoodsList(()=>{
      // 停止下拉行为
      wepy.stopPullDownRefresh()
    })
  }
}