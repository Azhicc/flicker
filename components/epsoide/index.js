// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer: function (newVal, oldVal, changedPath) {
        const val = (newVal < 10) ? '0' + newVal : newVal
        this.setData({
          _index: val.toString()
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    months: [
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    year: 0,
    month: '',
    _index: ''
  },

  attached: function () {
    const date = new Date()
    const year = date.getFullYear()
    const month = date.getMonth()
    const { months } = this.data
    this.setData({
      year,
      month: months[month]
    })
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
