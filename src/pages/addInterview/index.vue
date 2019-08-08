<template>
  <div>
    <h4>面试信息</h4>
    <ul class="interview">
      <li>
        <span>公司名称</span>
        <input type="text" placeholder="请输入名称" />
      </li>
      <li>
        <span>公司电话</span>
        <input type="text" placeholder="请输入面试联系人电话" />
      </li>
      <li>
        <span>面试时间</span>
        <input type="text" placeholder="2019-08-06 17:00" />
      </li>
      <li>
        <span>面试地址</span>
        <input type="text" placeholder="请选择面试地址" @click="gotoAddress" />
      </li>
    </ul>
    <h4>备注信息</h4>
    <div class="contBox">
      <textarea class="txt" />
    </div>
    <button class="btn">确认</button>
  </div>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    gotoAddress() {
      wx.navigateTo({
        url: "/pages/viewAddress/main"
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.interview {
  background: #ffff;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
}
.interview li {
  display: flex;
  height: 100rpx;
  line-height: 100rpx;
  border-bottom: 1px solid #ccc;
  margin-left: 20rpx;
  color: #666;
}
.interview li input {
  margin-left: 24px;
  height: 100rpx;
  line-height: 100rpx;
}
.interview li:last-child {
  border-bottom: none;
}
h4 {
  height: 90rpx;
  line-height: 90rpx;
  background: #f6f6f6;
  padding-left: 20rpx;
}
.btn {
  height: 120rpx;
  background: #999999;
  line-height: 120rpx;
  color: aliceblue;
}
.contBox {
  width: 100%;
  height: auto;
  padding: 36rpx;
}
.txt {
  width: 90%;
  border: 1px solid #9999;
  margin-left: 2rpx;
}
</style>