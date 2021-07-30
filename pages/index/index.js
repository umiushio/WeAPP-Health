// index.js
const app = getApp()
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
  },
  onLoad:function(){
    try{
      app.setPhone(wx.getStorageSync('phone'))
      app.setUserName(wx.getStorageSync('username'))
      app.setUserRole(wx.getStorageSync('role'))
    }catch{
      app.setPhone(null)
      app.setUserName(null)
      app.setUserRole(null)
    }
    if(!app.globalData.userInfo.phone){
      app.setPhone(null)
      app.setUserName(null)
      app.setUserRole(null)
    }else if(!(app.globalData.userInfo.phone===null)){
      wx.reLaunch({url: '../home/home'})
    }
  }
})
