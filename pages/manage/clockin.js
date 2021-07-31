// pages/manage/clockin.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 2,
    steps: [
      {
        text: '6/5',
        desc: '',
      },
      {
        text: '6/8',
        desc: '漏签3天',
      },
      {
        text: '7/30',
        desc: '今天',
      },
    ],
    minDate: '',
    maxDate: '',
    formatter(day) {
      const month = day.date.getMonth() + 1;
      const date = day.date.getDate();
      day.bottomInfo = '(＾－＾)';
      day.topInfo = '已打卡';
      return day;
    },
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var date = new Date()
    this.setData({
      minDate: new Date(date.getFullYear(), date. getMonth(), 1).getTime(),
      maxDate: date.getTime(),
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

  }
})