import wepy from 'wepy'

const baseURL = 'https://www.uinav.com/api/public/v1'

//弹窗提示toast
//@str 提示消息内容
wepy.baseToast = function (str = '获取数据失败!') {
  wepy.showToast({
    title: str,
    icon: 'none',
    duration: 1500
  })
}

//发起get请求的API
//@api 请求地址 以 / 开头
//@data 请求参数对象
wepy.get = function(url, data = {}) {
  return wepy.request({
    url: baseURL + url,
    method: 'GET',
    data
  })
}

//发起post请求的API
//@api 请求地址 以 / 开头
//@data 请求参数对象
wepy.post = function (url, data = {}) {
  return wepy.request({
    url: baseURL + url,
    method: 'POST',
    data
  })
}