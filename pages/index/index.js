// index.js
// 获取应用实例

Page({
  data: {
    buttonWidth: wx.getSystemInfoSync().windowWidth - 20,
    show: false
  },

  login(){
    wx.redirectTo({
      url: './login',
    })
  },
  register(){
    wx.redirectTo({
      url: './register',
    })
  },
  privacy(){
    this.setData({
      show: true
    })
  },
  onClose(){
    this.setData({
      show: false
    })
  }
})
