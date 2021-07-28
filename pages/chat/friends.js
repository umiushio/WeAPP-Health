// pages/chat/friends.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    statusHeight: wx.getSystemInfoSync().statusBarHeight,
    indexAnchorList:[
      {
        index: 'A',
        cellList: [{name:"Air", value: "3.3&5.6mmol/L"},
        {name:"Angel Beats", value: "3.3&5.6mmol/L"}]
      },{
        index: 'C',
        cellList: [{name:"Charlotte", value: "3.3&5.6mmol/L"}, {name:"Clannad", value: "3.3&5.6mmol/L"}]
      },{
        index: 'H',
        cellList: [{name: "Harmonia", value: "3.3&5.6mmol/L"}]
      },{
        index: 'L',
        cellList: [{name:"Little Busters", value: "3.3&5.6mmol/L"}, 
        {name:"Loopers", value: "3.3&5.6mmol/L"}]
      },{
        index: 'P',
        cellList: [{name:"Planetarian", value: "3.3&5.6mmol/L"}]
      },{
        index: 'R',
        cellList: [{name:"Rewrite", value: "3.3&5.6mmol/L"}]
      },{
        index: 'S',
        cellList: [{name:"Summer Pockets", value: "3.3&5.6mmol/L"}]
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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