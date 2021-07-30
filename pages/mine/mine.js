// pages/home/home.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  dataList:[{
    textRecently: "病人近况",
    textColumn: "专栏动态",
    textDiagnose: "诊断历史",
    textDaily: "日常记录",
    active: 2,
    dakara:'',
    dotShow: false,
    urlColumn: "../extra/column",
    pathList: [
      'home/home',
      'chat/chat',
      'mine/mine',
    ],
    tabbarList:[
      {
        icon: "home-o",
        dotShow: false,
        info: '',
        title: "首页",
      },{
        icon: "chat-o",
        dotShow: false,
        info: '',
        title: "聊天",
      },{
        icon: "user-circle-o",
        dotShow: false,
        info: '',
        title: "我的",
      }
    ]
  },{
    textRecently: "饮食近况",
    textColumn: "推荐动态",
    textDiagnose: "我的医嘱",
    textDaily: "日常任务",
    active: 3,
    dakara:'',
    dotShow: false,
    pathList: [
      'home/home',
      'chat/chat',
      'manage/manage',
      'mine/mine',
    ],
    tabbarList:[
      {
        icon: "home-o",
        dotShow: false,
        info: '',
        title: "首页",
      },{
        icon: "chat-o",
        dotShow: false,
        info: '',
        title: "聊天",
      },{
        icon: "orders-o",
        dotShow: false,
        info: '',
        title: "健康",
      },{
        icon: "user-circle-o",
        dotShow: false,
        info: '',
        title: "我的",
      }
    ]
  },{
    textRecently: "家属近况",
    textColumn: "动态推荐",
    textDiagnose: "家属医嘱",
    textDaily: "亲属记录",
    active: 2,
    dakara:'',
    dotShow: false,
    pathList: [
      'home/home',
      'manage/manage',
      'mine/mine',
    ],
    urlColumn: "",
    tabbarList:[
      {
        icon: "home-o",
        dotShow: false,
        info: '',
        title: "首页",
      },{
        icon: "orders-o",
        dotShow: false,
        info: '',
        title: "健康",
      },{
        icon: "user-circle-o",
        dotShow: false,
        info: '',
        title: "我的",
      }
    ]
  }],
  data: {
    username:'',
    valueSearch:'',
    scrollHeight: 0,
    titleTop: app.globalData.titleTop,
    titleHeight: app.globalData.titleHeight,
    navBarHeight: app.globalData.navBarHeight,
    active: 2,
    pathList: [
      'home/home',
      'chat/chat',
      'mine/mine',
    ],
    activeNames: ['1'],

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: app.getUserName(),
      scrollHeight: wx.getSystemInfoSync().windowHeight - 210,
    })
    this.setData(this.dataList[app.globalData.userInfo.userRole])
    var that = this; 
    var data = {
      "dataI": [
        {
          "id": 1,
          "imgurl": "/images/ED1.bmp"
        },
        {
          "id": 2,
          "imgurl": "/images/ED2.bmp",
        },
        {
          "id": 3,
          "imgurl": "/images/ED3.bmp"
        }
      ],
    }; 
    that.setData({
      imgData: data.dataI,
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  scan(){

  },
  add(){
    Toast.success('add successfully')
  },
  onChangeSearch(e) {
    this.setData({
      value: e.detail,
    });
  },
  onChange(event) {
    this.setData({
      activeNames: event.detail,
    });
  },
  onChangeTabbar(event) {
    const path = this.data.pathList[event.detail]
    const url = "../" + path
    wx.switchTab({
      url: url,
    })
  },
  onClick(event) {
    this.setData({ showShare: true });
  },
  onClose() {
    this.setData({ showShare: false });
  },
  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },
  loginOut(){
    wx.redirectTo({
      url: '../index/ad',
    })
  }
})