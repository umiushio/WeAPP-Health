// app.js
const AV = require('./libs/av-core-min');
const adapters = require('./libs/leancloud-adapters-weapp.js');


AV.setAdapters(adapters);
AV.init({
  appId: '6bGa1f8Y2XxTFxYQEVvkft7H-gzGzoHsz',
  appKey: '3Uf6wClVnUvk23E72LD9I0jz',
  serverURLs: "https://6bga1f8y.lc-cn-n1-shared.com",
});
App({
  onLaunch() {
    const systemInfo = wx.getSystemInfoSync();
      // 胶囊按钮位置信息
      const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
      // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
      this.globalData.navBarHeight = (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
  },
  globalData: {
    userInfo: {
      username: null,
      phone: null,
      userRole: null,
    },
    dakara:false,
    dakaraReady:false,
    chatDotShow: true,
    navBarHeight: 0, // 导航栏高度
    titleTop: wx.getSystemInfoSync().statusBarHeight,
    titleHeight: (wx.getMenuButtonBoundingClientRect().top - wx.getSystemInfoSync().statusBarHeight)*2 + wx.getMenuButtonBoundingClientRect().height,
  },
  getUserName(){
    return this.globalData.userInfo.username
  },
  setUserName(name){
    this.globalData.userInfo.username = name
  },
  getUserRole(){
    return this.globalData.userInfo.userRole
  },
  setUserRole(role){
    this.globalData.userInfo.userRole = role
  },
  setPhone(role){
    this.globalData.userInfo.phone = role
  }
})
