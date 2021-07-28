// index.js
// 获取应用实例
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'

const beforeClose = (action) => new Promise((resolve) => {
  setTimeout(() => {
    if (action === 'confirm') {
      resolve(true);
    } else {
      // 拦截取消操作
      resolve(false);
    }
  }, 1000);
});

Page({
  data: {
    buttonWidth: wx.getSystemInfoSync().windowWidth - 20,
    show: false,
    showDialog: false,
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
  },
  onCloseDialog(){
    this.setData({
      showDialog: false
    })
  },
  loginWeChat(){
    Dialog.alert({
      title: '一键授权',
      theme: 'round-button',
      beforeClose
    }).then(() => {
      this.onCloseDialog();
      
    });
  }
})
