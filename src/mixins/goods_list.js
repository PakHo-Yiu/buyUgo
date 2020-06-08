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
    goodsNum: 0
  }

  methods = {

  }

  onLoad(options) {
    console.log(options)
    this.query = options.query || ''
    this.cid = options.cid || ''
    this.getGoodsList()
  }

  async getGoodsList() {
    const {data: res} = await wepy.get('/goods/search',{
      query: this.query,
      cid: this.cid,
      pagenum: this.pagenum,
      pagesize: this.pagesize
    })
    
    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.goodsList = res.message.goods
    this.total = res.message.total
    console.log(res.message.goods)
    this.$apply()
  }
}