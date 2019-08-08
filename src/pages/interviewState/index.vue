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
    </ul>
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
</style>