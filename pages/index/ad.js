// pages/index/ad.js
const app=getApp()
Page({
  data: {
    countdown: 5,
    countdownValue: 100,
    navBarHeight: app.globalData.navBarHeight,
    autoplay: true,
    interval: 3000,
    duration: 1200,
    indicatorDots: false 
  },
  onLoad: function (options) {
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
      "dataT" : [
        {
          "id": 1,
          "title":"随时交流",
          "introduction":"和病友、家人、医生对话"
        },
        {
          "id": 2,
          "title":"健康管理",
          "introduction":"让病人、家人、医生关注对象健康"
        },
        {
          "id": 3,
          "title":"就医指导",
          "introduction":"让根据记录为病人提供医疗提醒"
        }
      ]
    }; 
    that.setData({
      imgData: data.dataI,
      textData:data.dataT
    })
    that.time = setInterval(function(){
      that.setData({
        countdown: that.data.countdown - 1,
      })
      if (that.data.countdown == 0) {
        console.log(that.data.countdown)
        clearInterval(that.time);
        wx.redirectTo({
          url: './index',
        })
      }
    }, 1000)
    that.timeC = setInterval(function(){
      that.setData({
        countdownValue: that.data.countdownValue - 1,
      })
    }, 35)
  },
  clearAD: function() {
    clearInterval(this.time)
    clearInterval(this.timeC)
    wx.redirectTo({
      url: './index',
    })
  }
})