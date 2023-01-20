const util = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isFixedTop: false, //是否固定顶部
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

  },
  /**
   * 监听页面滑动事件
   */
  onPageScroll: function (e) {
    let top = wx.getStorageSync('navbar');
    //滚动条距离顶部高度
    let scrollTop = parseInt(e.scrollTop);
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



    let isSatisfy = scrollTop >= top ? true : false;
    //为了防止不停的setData, 这儿做了一个等式判断。 只有处于吸顶的临界值才会不相等
    if (this.data.isFixedTop === isSatisfy) {
      return false;
    }
    console.log(isSatisfy)
    this.setData({
      isFixedTop: isSatisfy
    });

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