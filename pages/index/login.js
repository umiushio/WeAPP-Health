// pages/index/login.js
// 获取应用实例
const app = getApp()
const AV = require('../../libs/av-core-min.js'); 
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
  data: {
    navBarHeight: app.globalData.navBarHeight,
    username: '',
    password: '',
  },
  
  inputUsername(e) {
    this.setData({
      username: e.detail,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail,
    })
  },

  loginDoctor() {
    const {
      username,
      password,
    } = this.data;
    AV.User.logIn(username, password).then(function () {
      app.setUserName(username)
      app.setUserRole(0)
      Toast.success('登录成功');
      this.time = setTimeout(function(){
        clearInterval(this.time);
        wx.reLaunch({
          url: '../home/home',
        });
      }, 1000)
      // 登录成功，跳转到message页面
    }, function (error) {
      Toast.fail('登录失败');
    });
  },
  forgetPswd(){
    Toast.fail('登录成功');
  },
  gotoRegister(){
    wx.navigateTo({
      url: './register',
    })
  }
})
