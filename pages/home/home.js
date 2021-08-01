// pages/home/home.js
const app = getApp()
const AV = require('../../libs/av-core-min.js')
import Dialog from '../../miniprogram_npm/@vant/weapp/dialog/dialog'

const beforeClose = (action) => new Promise((resolve) => {
  setTimeout(() => {
    if (action === 'confirm') {
      resolve(true);
    } else {
      // 拦截取消操作
      resolve(false);
    }
  }, 1000);
});
Page({

  /**
   * 页面的初始数据
   */
  dataList: [{
    textRecently: "病人近况",
    textColumn: "专栏动态",
    textDiagnose: "诊断历史",
    textDaily: "日常记录",
    active: 0,
    dakara: '',
    dotShow: false,
    urlColumn: "../extra/column",
    pathList: [
      'home/home',
      'chat/chat',
      'mine/mine',
    ],
    tabbarList: [{
      icon: "home-o",
      dotShow: false,
      info: '',
      title: "首页",
    }, {
      icon: "chat-o",
      dotShow: false,
      info: '',
      title: "聊天",
    }, {
      icon: "user-circle-o",
      dotShow: false,
      info: '',
      title: "我的",
    }]
  }, {
    textRecently: "饮食近况",
    textColumn: "推荐动态",
    textDiagnose: "我的医嘱",
    textDaily: "日常任务",
    active: 0,
    dakara: '',
    dotShow: false,
    urlColumn: "../extra/column",
    pathList: [
      'home/home',
      'chat/chat',
      'manage/manage',
      'mine/mine',
    ],
    tabbarList: [{
      icon: "home-o",
      dotShow: false,
      info: '',
      title: "首页",
    }, {
      icon: "chat-o",
      dotShow: false,
      info: '',
      title: "聊天",
    }, {
      icon: "orders-o",
      dotShow: false,
      info: '',
      title: "健康",
    }, {
      icon: "user-circle-o",
      dotShow: false,
      info: '',
      title: "我的",
    }]
  }, {
    textRecently: "家属近况",
    textColumn: "动态推荐",
    textDiagnose: "家属医嘱",
    textDaily: "亲属记录",
    active: 0,
    dakara: '',
    dotShow: false,
    urlColumn: "../extra/column",
    pathList: [
      'home/home',
      'manage/manage',
      'mine/mine',
    ],
    urlColumn: "",
    tabbarList: [{
      icon: "home-o",
      dotShow: false,
      info: '',
      title: "首页",
    }, {
      icon: "orders-o",
      dotShow: false,
      info: '',
      title: "健康",
    }, {
      icon: "user-circle-o",
      dotShow: false,
      info: '',
      title: "我的",
    }]
  }],
  data: {
    username: '',
    valueSearch: '',
    titleTop: app.globalData.titleTop,
    titleHeight: app.globalData.titleHeight,
    navBarHeight: app.globalData.navBarHeight,
    active: 0,
    dataset: '',
    autoplay: true,
    interval: 3000,
    duration: 1200,
    showDaily: false,
    optionsDaily: [
      [{
          name: '微信',
          icon: 'wechat'
        },
        {
          name: '微博',
          icon: 'weibo'
        },
        {
          name: 'QQ',
          icon: 'qq'
        },
      ],
      [{
          name: "打卡",
          icon: 'https://img.yzcdn.cn/vant/custom-icon-light.png'
        },
        {
          name: '复制链接',
          icon: 'link'
        },
        {
          name: '分享海报',
          icon: 'poster'
        },
        {
          name: '二维码',
          icon: 'qrcode'
        },
      ],
    ],
    showShare: false,
    options: [{
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
    dakara: '未打卡',
    dotShow: true,
    showOverlay: false,
    tabbarList: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: app.getUserName(),
    })
    this.setData(this.dataList[app.globalData.userInfo.userRole])
    var that = this;
    var data = {
      "dataI": [{
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
    this.queryDakara()
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
    if (app.globalData.userRole != 2) {
      var chatDotShow = "tabbarList[1].dotShow"
      this.setData({
        [chatDotShow]: app.globalData.chatDotShow
      })
    }
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
  scan() {

  },
  add() {
    Toast.success('add successfully')
  },
  onChangeSearch(e) {
    this.setData({
      valueSearch: e.detail,
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
    this.setData({
      showShare: true
    });
  },
  onClose() {
    this.setData({
      showShare: false
    });
  },
  onSelect(event) {
    Toast(event.detail.name);
    this.onClose();
  },
  onClickDaily(event) {
    this.setData({
      showDaily: true
    });
  },
  onCloseDaily() {
    this.setData({
      showDaily: false
    });
  },
  formatDate(date) {
    return `${date.getYear() + 1900}/${date.getMonth() + 1}/${date.getDate()}`;
  },
  onSelectDaily(event) {
    if (event.detail.name == '打卡') {
      if (!app.globalData.dakaraReady) {
        Toast.fail('网络错误')
        return
      } else if (!app.globalData.dakara) {
        var dateStr = this.formatDate(new Date())
        const dakaInfo = AV.Object.extend('dakaInfo')
        const daka = new dakaInfo()
        daka.set('phone', app.globalData.userInfo.phone)
        daka.set('date', dateStr)
        daka.save().then((user) => {
          app.globalData.dakara = true
          Dialog.alert({
            title: '每日打卡',
            message: '打卡成功！',
            beforeClose,
            theme: 'round-button',
          }).then(() => {
            var dotShow = "tabbarList[0].dotShow";
            this.setData({
              dakara: '',
              [dotShow]: false
            })
            this.onCloseDaily();
          });
        }, (error) => {
          Toast.fail('网络错误')
          return
        })
      } else {
        Dialog.alert({
          title: '每日打卡',
          message: '今天已经打过卡了，明天请继续保持哦！',
          theme: 'round-button',
        }).then(() => {
          this.onCloseDaily();
        });
      }
    } else {
      Dialog.alert({
        message: event.detail.name,
        beforeClose,
        theme: 'round-button',
      }).then(() => {
        this.onCloseDaily()
      })
    }
  },
  plus() {
    this.setData({
      showOverlay: true,
    })
  },
  onClickHide() {
    this.setData({
      showOverlay: false,
    })
  },
  queryDakara() {
    var dateStr = this.formatDate(new Date())
    const query = new AV.Query('dakaInfo');
    query.select(['phone']);
    query.equalTo('phone', app.globalData.userInfo.phone)
    query.equalTo('date', dateStr);
    var dotShow = "tabbarList[0].dotShow";
    query.find().then((infos) => {
      if (infos.length == 0) {
        this.setData({
          dakara: '未打卡',
          [dotShow]: true
        })
        app.globalData.dakara = false
        app.globalData.dakaraReady = true
      } else {
        this.setData({
          dakara: '',
          [dotShow]: false
        })
        app.globalData.dakara = true
        app.globalData.dakaraReady = true
      }
    }, (err) => {
      this.setData({
        dakara: '未打卡',
        [dotShow]: true
      })
      Toast.fail('网络错误')
      app.globalData.dakaraReady = false
      return
    })
  }
})