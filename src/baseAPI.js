import wepy from 'wepy'

//弹窗提示toast
//@str 提示消息内容
wepy.baseToast = function (str = '获取数据失败!') {
  wepy.showToast({
    title: str,
    icon: 'none',
    duration: 1500
  })
}