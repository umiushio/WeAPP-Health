// pages/index/login.js
// 获取应用实例
const app = getApp()
const AV = require('../../libs/av-core-min.js')
const MD5 = require('../../libs/md5.js')
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

  login() {
    const query = new AV.Query('Users');
    query.select(['username']);
    query.equalTo('username', this.data.username);
    query.equalTo('password',MD5.md5(this.data.password))
    query.find().then((users) => {
      if(users.length==0){
        Toast.fail('登录失败')
        return
      }else{
        Toast.success('登录成功');
        setTimeout(function(){
          wx.reLaunch({
            url: '../home/home',
          });
        }, 1000)
      }
    })
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
