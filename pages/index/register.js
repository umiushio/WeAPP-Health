// pages/index/register.js
const app = getApp()
const AV = require('../../libs/av-core-min.js'); 
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
  data: {
    show: false,
    navBarHeight: app.globalData.navBarHeight,
    username: '',
    password: '',
    passwordCheck: '',
    checked: false,
    disabled: true,
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
  inputPasswordCheck(e) {
    this.setData({
      passwordCheck: e.detail,
    })
  },

  onChange(event){
    this.setData({
      checked: event.detail,
      disabled: !event.detail,
    });
  },
  registerDoctor(){
    if(this.data.password != this.data.passwordCheck) {
      Toast.fail('两次输入不一致')
      return
    }
    const {
      username,
      password,
    } = this.data;
    const user = new AV.User();
    if (username) user.set({username});
    if (password) user.set({password});
    user.save()
    Toast.success('注册成功')
    app.setUserName(username)
    app.setUserRole(0)
    this.time = setTimeout(function(){
      clearInterval(this.time);
      wx.reLaunch({
        url: './form',
      });
    }, 1000)
  },
  registerFamily(){
    if(this.data.password != this.data.passwordCheck) {
      Toast.fail('两次输入不一致')
      return
    }
    const {
      username,
      password,
    } = this.data;
    const user = new AV.User();
    if (username) user.set({username});
    if (password) user.set({password});
    user.save()
    Toast.success('注册成功')
    app.setUserName(username)
    app.setUserRole(2)
    this.time = setTimeout(function(){
      clearInterval(this.time);
      wx.reLaunch({
        url: './form',
      });
    }, 1000)
  },
  gotoLogin(){
    wx.navigateTo({
      url: './login',
    })
  },
  service(){
    this.setData({
      show: true
    })
  },
  policy(){
    app.globalData.userInfo.username = this.data.username
    app.globalData.userInfo.userRole = 0
    wx.navigateTo({
      url: './form',
    })
  },
  onClose(){
    this.setData({
      show: false
    })
  },
})
