import wepy from 'wepy'

export default class extends wepy.mixin {
  data = {
    // 搜索框默认内容
    value: '',
    // 搜索建议列表
    suggestList: [],
    // 搜索历史礼列表
    kwList: []
  }

  onLoad() {
    const kwList = wepy.getStorageSync('kw') || []
    this.kwList = kwList
    console.log(this.kwList)
  }

  methods = {
    //当搜索词发生变化
    onChange(e){
      this.value = e.detail.trim()
      if(e.detail.trim().length <=0) {
        this.suggestList = []
        return 
      }
      this.getSuggestList(e.detail)
    },
    // 触发搜索
    // @e.detail 最新的搜索关键词
    onSearch(e) {
      const kw = e.detail.trim()
      if(kw.length <=0) {
        return 
      }
      
      // 把搜索关键词保存到Storage
      if(this.kwList.indexOf(kw) === -1) {
        // unshift语句 从头部位置增加数据
        this.kwList.unshift(kw)
      }
      // 包含0  不包含10
      // 数组的slice 方法 不会修改原数组 会返回一个新数组
      this.kwList = this.kwList.slice(0, 10)
      wepy.setStorageSync('kw',this.kwList)
      wepy.navigateTo({
        url: '/pages/goods_list?query=' + kw.trim()
      })
    },
    // 触发取消
    onCancel() {
      this.suggestList = []
    },
    // 点击具体的搜索建议跳转函数
    goGoodsDetail(goods_id) {
      wepy.navigateTo({
        url: '/pages/goods_detail/main?goods_id=' + goods_id
      })
    },
    // 点击每个tag标签,导航到相应的商品列表页面,并传递参数
    goGoodsList(query) {
      wepy.navigateTo({
        url: '/pages/goods_list?query=' + query
      })
    },
    //清楚历史搜索记录
    clearHistory() {
      this.kwList = []
      wepy.setStorageSync('kw', [])
    }
  }

  // 计算属性
  computed = {
    // true 展示搜索历史区域
    // false 展示搜索建议区域
    isShowHistory() {
      if(this.value.length <= 0) {
        return true
      }
      return false
    }
  }

  // 获取搜索建议列表
  async getSuggestList(searchStr) {
    const {data: res} = await wepy.get('/goods/qsearch', {query: searchStr})

    if(res.meta.status !== 200) {
      return wepy.baseToast()
    }

    this.suggestList = res.message
    this.$apply()
  }
}