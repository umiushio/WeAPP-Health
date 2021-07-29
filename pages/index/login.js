// pages/index/login.js
// 获取应用实例
const app = getApp()
const AV = require('../../libs/av-core-min.js'); 
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
Page({
  data: {
    titleHeight: app.globalData.titleHeight,
    username: '',
    password: '',
    textValue: "有时候，我察觉到自己一无所有。本以为装满了幸福的口袋，其实空空如也。因为根本就没有努力去收集过，所以是理所当然的。可是，我连这都不明白，漫不经心地虚度着空无的人生。有一天，我突然察觉到自己已经浪费了很多时间。我跟谁都能聊的开，不管那是怎样的人，可是却没有知心朋友。连一个也没有。这意味着什么，其实根本没有考虑的必要。我的人生就是这么单薄。只有曾经是青梅竹马的神户小鸟，是不会对我说客套话的朋友。没错。曾经是。（重新来一次）（下次一定可以成功。）我衷心祈祷着。只是，这大概很难实现吧。大家都在为之忙碌奔波。幸福并不会从天而降。必须靠自己的努力才行。"
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
  },
  onClickLeft(){
    wx.redirectTo({
      url: './index',
    })
  }
})
