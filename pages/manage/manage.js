// pages/manage/manage.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  dataList:[{
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
    active: 2,
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
    active: 1,
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
    username: app.globalData.userInfo.username,
    showOverlay: false,
    showPopup: false,
    activeStep: 1,
    steps: [
      {
        text: '今天',
        desc: '7/30',
      },
      {
        text: '6/8',
        desc: '漏签3天',
      },
      {
        text: '',
        desc: '',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: app.getUserName(),
    })
    this.setData(this.dataList[app.globalData.userInfo.userRole])
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
  onChangeTabbar(event) {
    const path = this.data.pathList[event.detail]
    const url = "../" + path
    wx.switchTab({
      url: url,
    })
  },
  plus(){
    this.setData({
      showOverlay: true,
    })
  },
  onClickHide(){
    this.setData({
      showOverlay: false,
    })
  },
  clockin(){
    this.setData({showPopup: true})
  },
  onClosePopup(){
    this.setData({showPopup: false})
  }
})