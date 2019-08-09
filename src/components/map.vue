<template>
  <div>
    <map :longitude="longitude" :latitude="latitude" show-location />
    <cover-view @click="location">
      <cover-view class="iconfont icon-weizhi"></cover-view>
    </cover-view>
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
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    })
  },
  methods: {
    ...mapActions({
      location: "home/getLocation"
    })
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
div {
  width: 100%;
  height: 100%;
}
map {
  width: 100%;
  height: 100%;
}
cover-view {
  color: #1a7dc0;
  font-weight: bold;
  position: fixed;
  bottom: 110rpx;
  left: 20rpx;
  font-size: 65rpx;
  z-index: 9999;
}
</style>