const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFixedTop: false, //是否固定顶部,
    tips: 1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var query = wx.createSelectorQuery();
    query.select('#navbar').boundingClientRect((res) => {
      wx.setStorageSync('navbar', res?.top)
    }).exec()

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // clearTimeout(timer)
   

    for (let i = 1; i < 5; i++) {
      setTimeout(() => {
        this.setData({
          tips:i
        })
        console.log(111, this.data.tips)
      }, i*1500);
     
    }
  },
  /**
   * 监听页面滑动事件
   */
  onPageScroll: function (e) {
    // let top = wx.getStorageSync('navbar');
    // //滚动条距离顶部高度
    // let scrollTop = parseInt(e.scrollTop);
    // console.log(scrollTop,top)
    // if (scrollTop > top) {
    //   this.setData({
    //     isFixedTop: true
    //   });
    // } else {
    //   this.setData({
    //     isFixedTop: false
    //   });
    // }



    // let isSatisfy = scrollTop >= top ? true : false;
    // //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    // if (this.data.isFixedTop === isSatisfy) {
    //   return false;
    // }
    // console.log(isSatisfy)
    // this.setData({
    //   isFixedTop: isSatisfy
    // });

    util.throttle(this.dynamicCalcTop(e), 500)
  },

  handleNavbar() {
    wx.pageScrollTo({
      selector: '#navbar',
    })
  },
  handleTop() {
    wx.pageScrollTo({
      scrollTop: 0
    })
  },
  dynamicCalcTop(e) {

    var query = wx.createSelectorQuery();
    query.select('#navbar-wrap').boundingClientRect((res) => {
      let top = parseInt(res?.top)
      // 距离顶部的高度
      let isSatisfy = (top < 0) ? true : false;
      if (this.data.isFixedTop !== isSatisfy) {
        console.log(isSatisfy)
        this.setData({
          isFixedTop: isSatisfy
        })
      }
    }).exec()
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})