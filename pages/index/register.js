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
    policyNotChecked: true,
    policyChecked: false,
    role: 0,
    roleStr: "医生",
    roles:['我是医生','我是病人','我是家属'],
    roleOption:[{
      text: '医生', value: 0
    },{
      text: '病人', value: 1
    },{
      text: '亲属', value: 2
    }],
    // roleSelectorDisplayed: false,
    secondCount:0,
    msgCodeStr:'发送验证码',
    msgCodeDisabled:false,
    textValue: "有一天，我察觉到自己一无所有。本以为装满了幸福的口袋，其实空空如也。因为根本就没有努力去收集过，所以是理所当然的。可是，我连这都不明白，散漫地虚度着空无的人生。有一天，我察觉到自己浪费了很多时间。我跟谁都能聊的开，不管那是怎样的人，可是却没有知心朋友。连一个也没有。这意味着什么，其实根本没有必要去考虑。我的人生就是如此单薄。只有青梅竹马的神户小鸟，才曾经是能说心里话的朋友。没错。曾经是。（重新来一次）（下次一定要做得更好。）我衷心祈愿。只是，这应该很难实现吧。大家都在为之而忙碌奔波，幸福并不会从天而降。必须靠自己的努力才行。"
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
      policyNotChecked: !(event.detail),
      policyChecked: event.detail
    });
  },
  onChangeDropdown(event){
    this.setData({role:event.detail})
  },
  // showRoleSelector(){
  //   this.setData({roleSelectorDisplayed:true})
  // },
  // roleConfirm(event){
  //   const {value,index} = event.detail;
  //   this.setData({role:index})
  //   switch(index){
  //     case 0:
  //       this.setData({roleStr:"医生"})
  //       break;
  //     case 1:
  //       this.setData({roleStr:"病人"})
  //       break;
  //     case 2:
  //       this.setData({roleStr:"家属"})
  //       break;
  //   }
  //   this.setData({roleSelectorDisplayed:false})
  // },
  // roleCancel(){
  //   this.setData({roleSelectorDisplayed:false})
  // },
  register(){
    var that=this
    if(this.data.password != this.data.passwordCheck) {
      Toast.fail('密码不一致')
      return
    }else if(this.data.policyNotChecked){
      Toast.fail('请同意协议')
      return
    }else if(!this.data.phone){
      Toast.fail('请输入手机号')
      return
    }else if(!(/^[1][3,4,5,7,8,9][0-9]{9}$/.test(this.data.phone))){
      Toast.fail('手机号不合法')
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
        AV.Cloud.verifySmsCode(that.data.msgCode,that.data.phone).then(function(){
          const Users = AV.Object.extend('Users')
          const user = new Users()
          user.set('phone',that.data.phone)
          user.set('username',that.data.username)
          user.set('password',MD5.md5(that.data.password));
          user.set('role',that.data.role)
          user.save().then((user) => {
            Toast.success('注册成功')
            app.setUserName(that.data.username)
            app.setUserRole(that.data.role)
            app.setPhone(that.data.phone)
            setTimeout(function(){wx.reLaunch({url: './login'})},1000)
          }, (error) => {
            Toast.fail('网络错误')
          })
        }, function(err){
          Toast.fail('验证码有误')
          return
        })
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
