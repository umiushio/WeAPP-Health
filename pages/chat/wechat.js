// pages/chat/wechat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeValue: "",
    formatTime(date) {
      return `${date.getMonth() + 1}月${date.getDate()}日 ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    },
    chatName: '',
    chatList: [{
      class: "chat-left",
      item: { text:"書き換えることが出来るだろうか。彼女の、その運命を。" }
    },{
      class: "chat-right",
      item: { text:"知性は自らの孤独を浮き彫りにする。絶望と、物理の無情から目をそらせなくする。人間とはなんと幸せなんだ。万物が見えないということで、どれほど救われていることか。" }
    }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      chatName:options.chatName,
      timeValue: this.data.formatTime(new Date())
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
  back(){
    wx.navigateBack({
      delta: 0,
    })
  }
})