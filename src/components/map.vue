<template>
  <div>
    <map
      :longitude="location.longitude"
      :latitude="location.latitude"
      subkey="X7RBZ-MMOKR-UQEWJ-WSCXC-IVXVK-IFFLL"
      show-compass
      :markers="markers"
      show-location
      :circles="circle"
      :include-points="points"
      @regionchange="regionChange"
    />
    <cover-view @click="location">
      <cover-image src="/static/images/location.png" />
    </cover-view>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  props: {
    markers: {
      type: Array,
      default: []
    },
    markertap: {
      type: Function,
      default: () => {}
    },
    // reginonChange: {
    //   type: Function,
    //   default: ()=>{}
    // },
    reLocation: {
      type: Boolean,
      default: false
    }
    // updateDistance: {
    //   typef: Function,
    //   default: ()=>{}
    // }
  },
  watch: {
    reLocation() {
      // 检测重新定位当前位置
      this.goCurrent();
    }
  },
  components: {},
  data() {
    return {
      location: {
        latitude: 40.03298,
        longitude: 116.29891
      },
      distance: 0
    };
  },
  computed: {
    ...mapState({
      longitude: state => state.home.longitude,
      latitude: state => state.home.latitude
    }),
    points() {
      return [this.location, ...this.markers];
    },
    circle() {
      if (!this.markers.length) {
        return [];
      } else {
        return [
          {
            ...this.markers[0],
            color: this.distance > 100 ? "#C9394A" : "#197DBF",
            fillColor: "rgba(0,0,0, .3)",
            radius: 100,
            strokeWidth: 2
          }
        ];
      }
    }
  },
  methods: {
    ...mapActions({
      location: "home/getLocation"
    }),
    goCurrent() {
      getAuth("scope.userLocation", async () => {
        let location = await getLocation();
        this.location = location;

        console.log("scope.userLocation...", this.location, this.markers[0]);
        // 重新计算距离
        if (this.updateDistance) {
          this.distance = getDistance(
            this.location.latitude,
            this.location.longitude,
            this.markers[0].latitude,
            this.markers[0].longitude
          );
          this.updateDistance(this.distance);
        }
      });
    }
  },
  created() {},
  mounted() {
    this.goCurrent();
  }
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
  width: 80rpx;
  height: 80rpx;
  z-index: 9;
  cover-image {
    width: 80rpx;
    height: 80rpx;
    position: fixed;
    bottom: 110rpx;
    left: 20rpx;
  z-index: 9;
  }
}
</style>