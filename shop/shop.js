// pages/shop/shop.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    goods1:59,
    goods2:99,
    goods3:69,
    goods4:88,
    goods5:74,
    goods6:68,
    count:1,
    count2:1,
    count3:1,
    count4:1,
    count5:1,
    count6:1,
    text1:"兰士顿 L17B蓝牙耳机 挂脖式运动跑步 磁吸入耳式高清通话......\n",
    text2:"爱沃驰（IW) 瑞士品牌名表男士手表全自动机械表日历商务腕表...\n",
    text3:"【2022新款】蓝牙耳机适用于华为手机真无线入耳式运动超长续航...\n",
    text4:"【300 减200】百草味 卤味大礼包510g 荤素集结鸭脖鸭翅鸭熟食...\n",
    text5:"德国DMK进口牛奶 欧德堡 全脂纯牛奶200ml*24盒 早餐奶 高钙奶...\n",
    text6:"67W大功率丨索盈充电宝超级快充大容量20000mAh毫安便携式...\n",
    getAll:457,
    bool:true,
    bool1:true,
    num:0,
    num2:0,
    num3:0,
    num4:0,
    num5:0,
    num6:0,
    num7:0,
    num8:0,
    change1:true,
    del1:true,
    del2:true,
    del3:true,
    del4:true,
    del5:true,
    del6:true
  },
  del(){
    if (this.data.count > 1) {
      this.setData({
         getAll:this.data.getAll -59,
         count:this.data.count -1
      })
    }else{
      count:1
    }
  },
  add(){
    this.setData({ 
      getAll:this.data.getAll + 59,
      count:this.data.count +1
    })
  },
  del2(){
    if (this.data.count2 > 1) {
      this.setData({
        count2:this.data.count2 -1,
        getAll:this.data.getAll - 99
      })
    }else{
      count2:1
    }
  },
  add2(){
    this.setData({
      count2:this.data.count2 +1,
      getAll:this.data.getAll + 99
    })
  },
  del3(){
    if (this.data.count3 > 1) {
      this.setData({
        count3:this.data.count3 -1,
        getAll:this.data.getAll - 69
      })
    }else{
      count3:1
    }
  },
  add3(){
    this.setData({
      count3:this.data.count3 +1,
      getAll:this.data.getAll + 69
    })
  },
  del4(){
    if (this.data.count4 > 1) {
      this.setData({
        count4:this.data.count4 -1,
        getAll:this.data.getAll - 88
      })
    }else{
      count4:1
    }
  },
  add4(){
    this.setData({
      count4:this.data.count4 +1,
      getAll:this.data.getAll + 88
    })
  },
  del5(){
    if (this.data.count5 > 1) {
      this.setData({
        count5:this.data.count5 -1,
        getAll:this.data.getAll - 74
      })
    }else{
      count5:1
    }
  },
  add5(){
    this.setData({
      count5:this.data.count5 +1,
      getAll:this.data.getAll + 74
    })
  },
  del6(){
    if (this.data.count6 > 1) {
      this.setData({
        count6:this.data.count6 -1,
        getAll:this.data.getAll - 68
      })
    }else{
      count6:1
    }
  },
  add6(){
    this.setData({
      count6:this.data.count6 +1,
      getAll:this.data.getAll + 68
    })
  },

  // 清空购物车
  clearAll(){
    this.setData({
      bool:false,
      getAll:0
    })
    wx.showToast({
      title: '清空购物车成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  //结算按钮
  jiesuan(){
    wx.showModal({
      title: '🧡温馨提示🧡',
      content: "确认收获地址为四川省成都市东部新区 \n 总金额为" + this.data.getAll,
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '结算成功',
            icon: 'success',
            duration: 2000
          })
        } else {
          wx.showToast({
            title: '结算失败',
            icon: 'error',
            duration: 2000
          })
        }
      }
    })
  },

  //编辑按钮切换
  changebtn(){
    this.setData({
      change1:!this.data.change1
    })
  },

  //删除单个商品
  delgoods(){
    this.setData({
      del1:false,
      getAll:this.data.getAll - 59
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  delgoods2(){
    this.setData({
      del2:false,
      getAll:this.data.getAll - 99
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  delgoods3(){
    this.setData({
      del3:false,
      getAll:this.data.getAll - 69
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  delgoods4(){
    this.setData({
      del4:false,
      getAll:this.data.getAll - 88
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  delgoods5(){
    this.setData({
      del5:false,
      getAll:this.data.getAll -74
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },
  delgoods6(){
    this.setData({
      del6:false,
      getAll:this.data.getAll - 68
    })
    wx.showToast({
      title: '删除成功',
      icon: 'success',
      duration: 2000//持续的时间
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */

   //添加商品
  onLoad(options) {
    if (options.num == 1) {
      this.setData({
        num:1,
        getAll:this.data.getAll + 29.70
      })
    }
    if (options.num2 == 1) {
      this.setData({
        num:1,
        num2:1,
        getAll:this.data.getAll + 29 + 119
      })
    }
    if (options.num3 == 1) {
      this.setData({
        num:1,
        num2:1,
        num3:1,
        getAll:this.data.getAll + 29 + 119 + 39
      })
    }
    if (options.num4 == 1) {
      this.setData({
        num:1,
        num2:1,
        num3:1,
        num4:1,
        getAll:this.data.getAll + 29 + 119 + 39 + 33
      })
    }
    if (options.num5 == 1) {
      this.setData({
        num:1,
        num2:1,
        num3:1,
        num4:1,
        num5:1,
        getAll:this.data.getAll + 29 + 119 + 39 + 33 + 13999
      })
    }
    if (options.num6 == 1) {
      this.setData({
        num:1,
        num2:1,
        num3:1,
        num4:1,
        num5:1,
        num6:1,
        getAll:this.data.getAll + 29 + 119 + 39 + 33 + 13999 +100
      })
    }
    if (options.num7 == 1) {
      this.setData({
        num:1,
        num2:1,
        num3:1,
        num4:1,
        num5:1,
        num6:1,
        num7:1,
        getAll:this.data.getAll + 29 + 119 + 39 + 33 + 13999 + 100 + 4430
      })
    }
    if (options.num8 == 1) {
      this.setData({
        num:1,
        num2:1,
        num3:1,
        num4:1,
        num5:1,
        num6:1,
        num7:1,
        num8:1,
        getAll:this.data.getAll + 29 + 119 + 39 + 33 + 13999 + 100 + 4430 + 59
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

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