// pages/home/home.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    valueSearch:'',
    scrollHeight: 0,
    titleTop: app.globalData.titleTop,
    titleHeight: app.globalData.titleHeight,
    navBarHeight: app.globalData.navBarHeight,
    active: 2,
    dataset: '',
    autoplay: true,
    interval: 3000,
    duration: 1200,
    showShare: false,
    options: [
      {
        name: '上传',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-fire.png',
      },
      {
        name: '打卡',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png',
      },
      {
        name: '开发',
        icon: 'https://img.yzcdn.cn/vant/custom-icon-water.png',
      },
    ],
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