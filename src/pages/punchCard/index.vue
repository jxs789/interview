<template>
  <div class="wrap">
    <section>
      <myMap :markers="markers" :updateDistance="updateDistance" />
    </section>
    <footer @click="showCar">打卡</footer>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      distance: 0
    };
  },
  computed: {
    ...mapState({
      obj: state => state.interviewList.obj
    }),
    distance() {
      return getDistance(this.obj.latitude, this.obj.longitude);
    },
    markers() {
      if (this.obj && Object.keys(this.obj)) {
        return [
          {
            iconPath: "/static/images/job.png",
            latitude: this.obj.latitude,
            longitude: this.obj.longitude,
            title: this.obj.company,
            width: 20,
            height: 20
          }
        ];
      } else {
        return [];
      }
    }
  },
  methods: {
    ...mapActions({
      putDetail: "interviewList/putDetail"
    }),
    async showCar() {
      let distance = this.distance;
      console.log(distance)
      if (this.distance < 100) {
        //   let result = await this.putDetail({
        //     id: this.obj.id,
        //     params: {
        //       status: 0,
        //       sign_time: +new Date()
        //     }
        //   })
        // console.log('result...', result);
        wx.showToast({
          title: "打卡成功", //提示的内容,
          icon: "none" //图标,
        });
      } else {
        // if (this.distance > 1000){
        //   distance = (this.distance/1000).toFixed(2)+'公里'
        // }else{
        //   distance = this.distance+'米'
        // }
        console.log("distance...", distance, this.distance);
        wx.showToast({
          title: `你距目的地还有${distance},暂时还不能打卡`, //提示的内容
          icon: "none"
        });
      }
    }
  },
  created() {},
  mounted() {
    console.log('1111',this.obj)
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  section {
    flex: 1;
  }
  footer {
    height: 96rpx;
    line-height: 96rpx;
    background: #020816;
    color: aliceblue;
    text-align: center;
  }
}
</style>