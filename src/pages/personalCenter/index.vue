<template>
  <div class="wrap">
    <div class="head">
      <dl>
        <dt>
          <p class="iconfont icon-wode"></p>
        </dt>
        <dd>176****4444</dd>
      </dl>
    </div>
    <ul>
      <li>
        <navigator url="/pages/interviewList/main">
          <div>
            <span class="iconfont icon-solid-time"></span>
            <p>我的面试</p>
          </div>
          <i class="iconfont icon-qianjin"></i>
        </navigator>
      </li>
      <li>
        <navigator>
          <div>
            <span class="twoLi iconfont icon-InfoFilled"></span>
            <p>客服中心</p>
          </div>
          <i class="iconfont icon-qianjin"></i>
        </navigator>
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
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    background: #f8f8f8;
    text-align: center;
    padding: 50rpx 0;
    dl {
      dt {
        width: 100%;
        p {
          width: 150rpx;
          height: 150rpx;
          border-radius: 50%;
          background: #fff;
          font-size: 90rpx;
          display: inline-block;
          color: #1a7dc0;
          line-height: 150rpx;
        }
      }
      dd {
        margin-top: 40rpx;
      }
    }
  }
  ul {
    li {
      navigator {
        width: 100%;
        height: 120rpx;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 30rpx;
        box-sizing: border-box;
        border-bottom: 1px solid #eee;
        div {
          display: flex;
          align-items: center;
          span {
            color: #0faeff;
            font-size: 40rpx;
          }
          p {
            margin-left: 20rpx;
            color: #666;
          }
        }
      }
    }
    li:nth-child(2) {
      height: 150rpx;
    }
  }
}
</style>