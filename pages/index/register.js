// pages/index/register.js
const app = getApp()
const AV = require('../../libs/av-core-min.js')
const MD5 = require('../../libs/md5.js')
import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast'
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'
Page({
  data: {
    show: false,
    navBarHeight: app.globalData.navBarHeight,
    phone: '',
    username: '',
    password: '',
    passwordCheck: '',
    msgCode: '',
    policyChecked: false,
    role: 0,
    roleStr: "医生",
    roles:['我是医生','我是病人','我是家属'],
    roleSelectorDisplayed: false,
    secondCount:0
  },
  
  inputUsername(e) {
    this.setData({
      username: e.detail,
    })
  },
  inputPhone(e) {
    this.setData({
      phone:e.detail,
    })
  },
  inputPassword(e) {
    this.setData({
      password: e.detail,
    })
  },
  inputMsgCode(e) {
    this.setData({
      msgCode: e.detail,
    })
  },
  inputPasswordCheck(e) {
    this.setData({
      passwordCheck: e.detail,
    })
  },

  onAllowChange(event){
    this.setData({
      policyChecked: event.detail
    });
  },
  
  showRoleSelector(){
    this.setData({roleSelectorDisplayed:true})
  },

  roleConfirm(event){
    const {value,index} = event.detail;
    this.setData({role:index})
    switch(index){
      case 0:
        this.setData({roleStr:"医生"})
        break;
      case 1:
        this.setData({roleStr:"病人"})
        break;
      case 2:
        this.setData({roleStr:"家属"})
        break;
    }
    this.setData({roleSelectorDisplayed:false})
  },

  roleCancel(){
    this.setData({roleSelectorDisplayed:false})
  },

  register(){
    if(this.data.password != this.data.passwordCheck) {
      Toast.fail('密码不一致')
      return
    }else if(!this.data.policyChecked){
      Toast.fail('请同意协议')
      return
    }else if(!this.data.phone){
      Toast.fail('请输入手机号')
      return
    }else if(!this.data.msgCode){
      Toast.fail('请输入验证码')
      return
    }else if (!this.data.username){
      Toast.fail('请输入用户名')
      return
    }else if (!this.data.password){
      Toast.fail('请输入密码')
      return
    }
    const query = new AV.Query('Users');
    query.select(['phone']);
    query.equalTo('phone', this.data.phone);
    query.find().then((users) => {
      if(users.length!=0){
        Toast.fail('手机已被注册')
        return
      }else{
      //   AV.Cloud.verifySmsCode(this.data.msgCode,this.data.phone).then(function(){
          const Users = AV.Object.extend('Users')
          const user = new Users()
          user.set('phone',this.data.phone)
          user.set('username',this.data.username)
          user.set('password',MD5.md5(this.data.password));
          user.set('role',this.data.role)
          user.save().then((user) => {
            Toast.success('注册成功')
            app.setUserName(user.username)
            app.setUserRole(user.userRole)
            setTimeout(function(){wx.reLaunch({url: './form'})},1000)
          }, (error) => {
            Toast.fail('网络错误')
          })
      //  }, function(err){
      //   Toast.fail('验证码有误')
      //   return
      //  })
      }
    })
  },

  gotoLogin(){
    wx.navigateTo({
      url: './login',
    })
  },
  showUserPolicy(){
    this.setData({
      show: true
    })
  },
  showPrivicyPolicy(){
    //TO-DO
  },
  onUserPolicyClose(){
    this.setData({
      show: false
    })
  },
  showMsgInfo(){
    var that=this
    if(this.data.secondCount==0){
      this.setData({secondCount:1})
      AV.Cloud.requestSmsCode(this.data.phone)
      Dialog.alert({
        title: '短信验证',
        message: '短信验证码已发送，请稍等',
      }).then(() => {})
      setTimeout(function(){that.setData({secondCount:0})},60*1000) //Timeout:1min
    }else{
      Dialog.alert({
        message: '请勿频繁请求验证码',
      }).then(() => {})
    }
  }
})
