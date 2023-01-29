# sticky-cmp
小程序中吸顶，动态吸顶，以及优化

### 场景一


```js
onPageScroll: function (e) {
    let top = wx.getStorageSync('navbar');
    //滚动条距离顶部高度
    let scrollTop = parseInt(e.scrollTop);
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

```


### 场景二

```js
util.throttle(this.dynamicCalcTop(e), 500)

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

```

![ezgif com-gif-maker-3](https://user-images.githubusercontent.com/18347659/215310993-823dacdc-feb1-4547-b689-2bca7eeb0782.gif)
