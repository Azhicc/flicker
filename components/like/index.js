// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 开放出來的数据 
    like: {
      type: Boolean,
      value: false,
      observer: () => {

      },
    },
    count: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc: "./images/like.png",
    noSrc: "./images/like@dis.png"
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike: function (e) {
      const { like, count } = this.properties
      const counts = like ? count - 1 : count + 1
      this.setData({
        count: counts,
        like: !like
      })
    }
  }
})
