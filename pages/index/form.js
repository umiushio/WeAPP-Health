// pages/index/form.js
const app=getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    radioGender: 1,
    navBarHeight: app.globalData.navBarHeight,
    formTop: app.globalData.navBarHeight + 40,
    show: false,
    birthday: '',
    currentDate: new Date().getTime(),
    maxDate: new Date().getTime(),
    minDate: new Date(1900, 0, 1).getTime(),
    formatBirthday(date) {
      return `${date.getYear() + 1900}/${date.getMonth() + 1}/${date.getDate()}`;
    },
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } 
      if (type === 'month') {
        return `${value}月`;
      }
      if (type === 'day') {
        return `${value}日`;
      }
      return value;
    },
    labelTitle: '',
    labelTitleList: [
      '您的主治疾病是？',
      '您的疾病类型是？',
    ],
    optionDis: [
      { text: '糖尿病', value: 0 },
      { text: '冠心病', value: 1 },
      { text: '肝癌', value: 2 },
    ],
    valueDis: 0,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      labelTitle: this.data.labelTitleList[app.globalData.userInfo.userRole]
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
  skip(){
    wx.reLaunch({
      url: '../home/home',
    })
  },
  onChangeGender(event){
    this.setData({
      radioGender: event.detail,
    })
  },
  onInput(event) {
    this.setData({
      currentDate: event.detail,
    });
  },
  onDisplay(){
    this.setData({
      show: true
    });
  },
  onClose(){
    this.setData({
      show: false
    });
  },
  onCancel(){
    this.setData({
      show: false,
    });
  },
  onConfirm(event){
    this.data.currentDate=new Date(event.detail),
    this.setData({
      show: false,
      birthday: this.data.formatBirthday(this.data.currentDate)
    });
  },
  experience(){
    wx.reLaunch({
      url: '../home/home',
    })
  }
})