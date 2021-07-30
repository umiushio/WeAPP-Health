// pages/index/login.js
// 获取应用实例
const app = getApp()
const AV = require('../../libs/av-core-min.js')
const MD5 = require('../../libs/md5.js')
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({
  data: {
    titleHeight: app.globalData.titleHeight,
    phone: '',
    password: '',
    loginMethodStr:'密码',
    altLoginMethodStr:'短信',
    loginMethod:0,
    secondCount:0,
    msgCodeStr:'发送验证码',
    msgCodeDisabled:false,
    textValue: "有一天，我察觉到自己一无所有。本以为装满了幸福的口袋，其实空空如也。因为根本就没有努力去收集过，所以是理所当然的。可是，我连这都不明白，散漫地虚度着空无的人生。有一天，我察觉到自己浪费了很多时间。我跟谁都能聊的开，不管那是怎样的人，可是却没有知心朋友。连一个也没有。这意味着什么，其实根本没有必要去考虑。我的人生就是如此单薄。只有青梅竹马的神户小鸟，才曾经是能说心里话的朋友。没错。曾经是。（重新来一次）（下次一定要做得更好。）我衷心祈愿。只是，这应该很难实现吧。大家都在为之而忙碌奔波，幸福并不会从天而降。必须靠自己的努力才行。"
  },
  loginAlt(){
    if(this.data.loginMethod==0){
      this.data.loginMethod=1
      this.setData({loginMethodStr:'验证码',altLoginMethodStr:'密码'})
    }else{
      this.data.loginMethod=0
      this.setData({loginMethodStr:'密码',altLoginMethodStr:'短信'})
    }
  },
  inputPhone(e) {
    this.setData({
      phone: e.detail,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail,
    })
  },

  login() {
    var that=this
    if(!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.data.phone))){
      Toast.fail('手机号不合法')
      return
    }else if(!this.data.password){
      if(this.data.loginMethod==0) Toast.fail('请输入密码')
      else Toast.fail('请输入验证码')
      return
    }
    const query = new AV.Query('Users');
    query.select(['phone']);
    query.equalTo('phone', this.data.phone);
    query.find().then((users) => {
      if(users.length==0){
        Toast.fail('用户不存在')
        return
      }
      if(this.data.loginMethod==0){
        const query = new AV.Query('Users');
        query.select(['username','role']);
        query.equalTo('phone', this.data.phone);
        query.equalTo('password',MD5.md5(this.data.password))
        query.find().then((users) => {
          if(users.length==0){
            Toast.fail('密码错误')
            return
          }
          Toast.success('登录成功');
          app.setUserName(users[0].get('username'))
          app.setUserRole(users[0].get('role'))
          app.setPhone(that.data.phone)
          wx.setStorageSync('phone', that.data.phone)
          wx.setStorageSync('username', users[0].get('username'))
          wx.setStorageSync('role', users[0].get('role'))
          setTimeout(function(){wx.reLaunch({url: '../home/home'})}, 1000)
        })
      }else{
        AV.Cloud.verifySmsCode(this.data.password,this.data.phone).then(function(){
          const query = new AV.Query('Users');
          query.select(['username','role']);
          query.equalTo('phone', that.data.phone);
          query.find().then((users) => {
            Toast.success('登录成功');
            app.setUserName(users[0].get('username'))
            app.setUserRole(users[0].get('role'))
            app.setPhone(that.data.phone)
            wx.setStorageSync('phone', that.data.phone)
            wx.setStorageSync('username', users[0].get('username'))
            wx.setStorageSync('role', users[0].get('role'))
            setTimeout(function(){wx.reLaunch({url: '../home/home'})}, 1000)
          })
        }, function(err){
          Toast.fail('验证码有误')
          return
        })
      }
    })
  },

  forgetPswd(){
    wx.redirectTo({
      url: './forget',
    })
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
  },
  showMsgInfo(){
    var that=this
    if(!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.data.phone))){
      Toast.fail('手机号不合法')
      return
    }else if(this.data.secondCount==0){
      this.data.secondCount=60 //Timeout:1 minute
      this.setData({msgCodeDisabled:true})
      this.setData({msgCodeStr:"发送验证码"+"("+this.data.secondCount+")"})
      AV.Cloud.requestSmsCode(this.data.phone)
      Dialog.alert({
        title: '短信验证',
        message: '短信验证码已发送，请稍等',
      }).then(() => {})
      this.timer=setInterval(function(){
        that.data.secondCount--
        that.setData({msgCodeStr:"发送验证码"+"("+that.data.secondCount+")"})
        if(that.data.secondCount==0){
          that.setData({msgCodeDisabled:false})
          that.setData({msgCodeStr:"发送验证码"})
          clearInterval(that.timer)
        }
      },1000)
    }else{
      Dialog.alert({
        message: '请勿频繁请求验证码',
      }).then(() => {})
    }
  }
})
