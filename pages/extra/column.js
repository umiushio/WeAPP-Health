// pages/extra/column.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loading: true,
    item: {
      updaterName: "",
      updateTime: '',
      storeIcon: '',
      storeColor: '',
      storeCount: '',
      storeFun: '',
      likeIcon: '',
      likeColor: '',
      likeCount: '',
      likeFun: '',
      textTitle: '',
      textContent: '',
    },
    formatTime(date){
      return `${date.getMonth() + 1}/${date.getDate()}/${date.getYear()+1900} ${date.getHours()}:${date.getMinutes()}`;
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      item:{
        updaterName: "神戸 小鳥",
        updateTime: this.data.formatTime(new Date()),
        storeIcon: 'star-o',
        storeColor: 'blue',
        storeCount: 6,
        storeFun: 'storeClick',
        likeIcon: 'like-o',
        likeColor: 'blue',
        likeCount: 3,
        likeFun: 'likeClick',
        textTitle: 'ねえ、瑚太朗君、いろんなもの……見てね',
        textContent: '暗闇に隠れても\n花の香りも虫の羽音もそこにあるの\n判り合えたのなら\n感じ取れたら\n手を繋ごう',
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.setData({
      loading: false,
    });
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
  storeClick(){
    if(this.data.item.storeIcon == "star-o"){
      this.setData({
        ["item.storeIcon"]: "star",
        ["item.storeColor"]: "red",
        ["item.storeCount"]: this.data.item.storeCount + 1,
      })
    } else {
      this.setData({
        ["item.storeIcon"]: "star-o",
        ["item.storeColor"]: "blue",
        ["item.storeCount"]: this.data.item.storeCount - 1,
      })
    }
  },
  likeClick(){
    if(this.data.item.likeIcon == "like-o"){
      this.setData({
          ["item.likeIcon"]: "like",
          ["item.likeColor"]: "red",
          ["item.likeCount"]: this.data.item.likeCount + 1,
      })
    } else {
      this.setData({
        ["item.likeIcon"]: "like-o",
        ["item.likeColor"]: "blue",
        ["item.likeCount"]: this.data.item.likeCount - 1,
      })
    }
  }
})