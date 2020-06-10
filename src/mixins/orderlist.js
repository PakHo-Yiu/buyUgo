import wepy from 'wepy'

export default class extends wepy.mixin {
  data ={
    active: 0,
    pic1: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
    allOrderList: [{
      id: 1,
      order_number: 'DHB81220011223',
      total_count: 2,
      order_price: 3010.1,
      order_detail: [{
        count: 1,
        price: 1000,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 1,
        price: 2010.1,
        name: '空调',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 2,
      order_number: 'DHB812209999987',
      total_count: 4,
      order_price: 6300,
      order_detail: [{
        count: 1,
        price: 800,
        name: '洗碗机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 1,
        price: 2500,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 2,
        price: 3000,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 3,
      order_number: 'DHB8122022341112',
      total_count: 1,
      order_price: 6000,
      order_detail: [{
        count: 1,
        price: 6000,
        name: '手机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 4,
      order_number: 'DHB8122001122456',
      total_count: 1,
      order_price: 8000,
      order_detail: [{
        count: 1,
        price: 9000,
        name: '空调',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    }],
    waitOrderList: [{
      id: 1,
      order_number: 'DHB81220011223',
      total_count: 3,
      order_price: 5020.2,
      order_detail: [{
        count: 1,
        price: 1000,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 2,
        price: 4020.2,
        name: '空调',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 2,
      order_number: 'DHB812209999987',
      total_count: 4,
      order_price: 6300,
      order_detail: [{
        count: 1,
        price: 800,
        name: '洗碗机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 1,
        price: 2500,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 2,
        price: 3000,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 3,
      order_number: 'DHB8122022341112',
      total_count: 1,
      order_price: 6000,
      order_detail: [{
        count: 1,
        price: 6000,
        name: '手机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 4,
      order_number: 'DHB8122001122456',
      total_count: 1,
      order_price: 8000,
      order_detail: [{
        count: 1,
        price: 9000,
        name: '空调',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    }],
    finishOrderList: [{
      id: 1,
      order_number: 'DHB81220011223',
      total_count: 7,
      order_price: 8010.1,
      order_detail: [{
        count: 6,
        price: 6000,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 1,
        price: 2010.1,
        name: '空调',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 2,
      order_number: 'DHB812209999987',
      total_count: 4,
      order_price: 6300,
      order_detail: [{
        count: 1,
        price: 800,
        name: '洗碗机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 1,
        price: 2500,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      },{
        count: 2,
        price: 3000,
        name: '洗衣机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 3,
      order_number: 'DHB8122022341112',
      total_count: 1,
      order_price: 6000,
      order_detail: [{
        count: 1,
        price: 6000,
        name: '手机',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    },{
      id: 4,
      order_number: 'DHB8122001122456',
      total_count: 1,
      order_price: 8000,
      order_detail: [{
        count: 1,
        price: 9000,
        name: '空调',
        pic: "http://image1.suning.cn/uimg/b2c/newcatentries/0070145106-000000000159476356_1_400x400.jpg",
      }]
    }]
  }

  methods = {
    // 切换标签页触发
    tabChanged(e) {
      this.active = e.detail.index
      //this.getOrderList(this.active)
    }
  }

  onLoad() {
    //this.getOrderList(this.active)
  }

  // 获取订单列表
  async getOrderList(index) {
    const {data: res} = await wepy.get("/my/orders/all",{type: index + 1})

    if(res.meta.status !== 200) {
      wepy.baseToast('获取订单列表失败!')
    }

    res.message.orders.forEach(x => x.order_detail = JSON.parse(x.order_detail))

    if(index === 0) {
      this.allOrderList = res.message.orders
    }else if(index ===1) {
      this.waitOrderList = res.message.orders
    }else if(index ===2) {
      this.finishOrderList = res.message.orders
    }else {
      wepy.baseToast('订单类型错误!')
    }
  }
}