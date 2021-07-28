// pages/home/home.js
const app=getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    valueSearch:'',
    titleTop: app.globalData.titleTop,
    titleHeight: app.globalData.titleHeight,
    navBarHeight: app.globalData.navBarHeight,
    active: 1,
    activeTab: 0,
    currentId: 0,
    dataset: '',
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
    cntId: 3,
    topId: 0,
    info: '',
    emptyHidden: true,
    itemLists: [
      {
        item:{
          scHidden: true,
          rightWidth: 235,
          customClass: "back-color",
          username: "",
          tag: "",
          cntInfo: '',
          cntInfoString: "",
          placeTopFun: "placeTop",
          topText: "取消置顶",
          readFun: "readMark",
          readText: "标为已读",
          dataId: 0,
          removeFun: "remove",
        },
      },
      {
        item:{
          scHidden: false,
          rightWidth: 205,
          username: "uma",
          tag: "絶不調",
          cntInfo: 3,
          cntInfoString: "",
          placeTopFun: "placeTop",
          topText: "置顶",
          readFun: "readMark",
          readText: "标为已读",
          dataId: 1,
          removeFun: "remove",
        },
      }, {
        item:{
          scHidden: false,
          rightWidth: 205,
          username: "umi",
          tag: "絶不調",
          cntInfo: 2,
          placeTopFun: "placeTop",
          topText: "置顶",
          readFun: "readMark",
          readText: "标为已读",
          dataId: 2,
          removeFun: "remove",
        },
      }, {
        item:{
          scHidden: false,
          rightWidth: 205,
          username: "ushio",
          tag: "絶不調",
          cntInfo: 6,
          placeTopFun: "placeTop",
          topText: "置顶",
          readFun: "readMark",
          readText: "标为已读",
          dataId: 3,
          removeFun: "remove",
        },
      }
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      username: app.getUserName(),
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
    this.updateInfoTip()
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
  updateInfoTip(){
    var cntInfo = 0;
    for(var index in this.data.itemLists){
      if(!this.data.itemLists[index].item.scHidden && (this.data.itemLists[index].item.cntInfo!="")) cntInfo = cntInfo + this.data.itemLists[index].item.cntInfo;
    }
    if(cntInfo == 0) {
      this.setData({cntInfo: '', emptyHidden: false})
    } else {
      this.setData({
        cntInfo: cntInfo,
      })
    }
    var flag = false
    for(var index in this.data.itemLists){
      if(!this.data.itemLists[index].item.scHidden) {
        flag = true
        break
      }
    }
    this.setData({emptyHidden:flag})
  },
  placeTop(event){
    var id = event.currentTarget.dataset.id
    if(id == 0) {
      var scHidden = "itemLists[" + this.data.topId + "].item.scHidden";
      var scHiddenTop = "itemLists[0].item.scHidden";
      this.setData({
        [scHiddenTop]: true,
        [scHidden]: false,
        topId: 0,
      })
    }else if (this.data.topId == 0){
      var scHidden = "itemLists[" + id + "].item.scHidden";
      var cntInfo = "itemLists[0].item.cntInfo";
      var readText = "itemLists[0].item.readText";
      var username = "itemLists[0].item.username";
      var tag = "itemLists[0].item.tag";
      var scHiddenTop = "itemLists[0].item.scHidden";
      this.setData({
        [scHiddenTop]: false,
        [scHidden]: true,
        [username]: this.data.itemLists[id].item.username,
        [tag]: this.data.itemLists[id].item.tag,
        [cntInfo]: this.data.itemLists[id].item.cntInfo,
        [readText]: this.data.itemLists[id].item.readText,
        topId: id,
      })
    } else {
      var scHiddenPrev = "itemLists["+ this.data.topId +"].item.scHidden";
      var scHidden = "itemLists["+ id +"].item.scHidden";
      var username = "itemLists[0].item.username";
      var tag = "itemLists[0].item.tag";
      var cntInfo = "itemLists[0].item.cntInfo";
      var readText = "itemLists[0].item.readText";
      this.setData({
        [scHiddenPrev]: false,
        [scHidden]: true,
        [username]: this.data.itemLists[id].item.username,
        [tag]: this.data.itemLists[id].item.tag,
        [cntInfo]: this.data.itemLists[id].item.cntInfo,
        [readText]: this.data.itemLists[id].item.readText,
        topId: id,
      })
    }
    this.updateInfoTip()
  },
  readMark(event){
    var cntInfo = "itemLists[" + event.currentTarget.dataset.id + "].item.cntInfo";
    var readText = "itemLists[" + event.currentTarget.dataset.id + "].item.readText";
    if(this.data.itemLists[event.currentTarget.dataset.id].item.readText == "标为已读"){
      this.setData({ [readText]: "标为未读", [cntInfo]: '' })
    } else {
      this.setData({ [readText]: "标为已读", [cntInfo]: 1 })
    }
    if(event.currentTarget.dataset.id == 0) {
      cntInfo = "itemLists[" + this.data.topId + "].item.cntInfo";
      readText = "itemLists[" + this.data.topId + "].item.readText";
      this.setData({
        [readText]: this.data.itemLists[0].item.readText,
        [cntInfo]: this.data.itemLists[0].item.cntInfo,
      })
    }
    this.updateInfoTip()
  },
  remove(event){
    if(event.currentTarget.dataset.id == 0) {
      this.setData({
        topId: 0,
      })
    }
    var scHidden = "itemLists[" + event.currentTarget.dataset.id + "].item.scHidden";
    this.setData({
      [scHidden]: true,
    })
    this.updateInfoTip()
  },
  friends(){
    wx.navigateTo({
      url: './friends',
    })
  }

})
