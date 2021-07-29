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
