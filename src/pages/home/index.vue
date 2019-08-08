<template>
  <div class="wrap">
    <section>
      <map :longitude="longitude" :latitude="latitude" show-location>
        <cover-view @click="location">
          <cover-view class="iconfont icon-weizhi"></cover-view>
        </cover-view>
      </map>
      <navigator
        url="/pages/personalCenter/main"
        class="userinfo iconfont icon-wode"
        @click="gotouser"
      />
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
    return {
      markers: []
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    })
  },
  methods: {
    addexamChange() {
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    },
    ...mapActions({
      location: "home/getLocation"
    })
  },
  mounted(){
  }
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
  map{
    width:100%;
    height: 100%;
  }
  cover-view {
    width: 100rpx;
    height: 100rpx;
    color: #1a7dc0;
    font-weight: bold;
    position: fixed;
    bottom: 90rpx;
    left: 20rpx;
    font-size: 60rpx;
    z-index: 9;
  }
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