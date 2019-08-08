<template>
  <div>
    <ul class="interview">
      <li>
        <span>面试地址:</span>
        <p></p>
      </li>
      <li>
        <span>面试时间:</span>
        <p></p>
      </li>
      <li>
        <span>联系方式:</span>
        <p></p>
      </li>
      <li>
        <span>是否提醒:</span>
        <p></p>
      </li>
      <li>
        <span>面试状态:</span>
        <p></p>
      </li>
      <li>
        <span>取消提醒:</span>
        <p></p>
      </li>
    </ul>
    <div class="btnBox">
      <button class="punch_card">去打卡</button>
      <button class="abandon_interview">放弃面试</button>
    </div>
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
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="">
.interview {
  background: #ffff;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  margin-bottom: 50rpx;
}
.interview li {
  display: flex;
  height: 130rpx;
  line-height: 130rpx;
  border-bottom: 1px solid #ccc;
  margin-left: 40rpx;
  color: #666;
}
.btnBox {
  width: 100%;
  display: flex;
}
.punch_card,
.abandon_interview {
  width: 40%;
  color: #ffff;
}
.btnBox button:nth-of-type(1) {
  background: #197dbf;
}
.btnBox button:nth-of-type(2) {
  background: #dc4e42;
}
</style>