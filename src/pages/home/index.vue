<template>
  <div class="wrap">
    <section>
      <MyMap />
      <cover-view class="userinfo">
        <cover-image src="/static/images/my.png" @click="gotouser" />
      </cover-view>
    </section>
    <footer class="footer" @click="addexamChange">添加面试</footer>
  </div>
</template>
<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      openid: state => state.user.openid
    })
  },
  methods: {
    ...mapActions({
      getfinger: "user/getfinger"
    }),
    addexamChange() {
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    },
    gotouser() {
      wx.navigateTo({
        url: "/pages/personalCenter/main"
      });
      
    }
  },
  created() {
    wx.startSoterAuthentication({
        requestAuthModes: ["fingerPrint"],
        challenge: "123456",
        authContent: "请用指纹解锁",
        success: res => {
          console.log(res, "fgfjhgghgjhhghghghghgg");
          this.getfinger({
            openid: this.openid,
            json_string: res.resultJSON,
            json_signature: res.resultJSONSignature
          });
        }
      });
      },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
.tit {
  height: 90rpx;
  line-height: 90rpx;
}
section {
  flex: 1;
  width: 100%;
  .userinfo {
    width: 80rpx;
    height: 80rpx;
    border-radius: 50%;
    color: #1a7dc0;
    text-align: center;
    line-height: 80rpx;
    font-size: 70rpx;
    background: #000;
    font-weight: bold;
    position: fixed;
    bottom: 115rpx;
    right: 20rpx;
    z-index: 9;
  }
}
.footer {
  height: 96rpx;
  line-height: 96rpx;
  background: #020816;
  color: aliceblue;
  text-align: center;
}
</style>