<template>
  <div class="listBox">
    <ul class="status">
      <li
        v-for="(item,index) in navList"
        :key="item.status"
        :class="{active:index===ind}"
        @click="tabClick({index,status:item.status})"
      >{{item.title}}</li>
    </ul>
    <ul class="main" v-if="list.length">
      <li v-for="(item,index) in list" :key="index" @click="gotoDetail(item.id)">
        <div class="address">
          <h1>{{item.company}}</h1>
          <span class="no_begin">{{getstatus}}</span>
        </div>
        <p class="detailed_address">{{item.address.address}}</p>
        <div class="time">
          <h3>面试时间:{{item.start_time}}</h3>
          <span
            class="no_remind"
            :class="{gray:item.status === 1}"
          >{{item.remind === -1 ? "未提醒" : "已提醒"}}</span>
        </div>
      </li>
    </ul>
    <div v-else class="none">没有更多数据了</div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      ind: 0,
      page: 1,
      pageSize: 6,
      status: -1
    };
  },
  computed: {
    ...mapState({
      navList: state => state.interviewList.navList,
      list: state => state.interviewList.list
    }),
    getstatus() {
      let str = "";
      this.list.forEach(item => {
        if (item.status === -1) {
          str = "未开始";
        } else if (item.status === 1) {
          str = "已放弃";
        } else if (item.status === 0) {
          str = "已打卡";
        }
      });
      return str;
    }
  },
  methods: {
    ...mapActions({
      getList: "interviewList/getList",
      getDetail: "interviewList/getDetail"
    }),
    //tab切换
    tabClick(payload) {
      // console.log('44444',this.list.length)
      this.ind = payload.index;
      let page = this.page;
      let pageSize = this.pageSize;
      this.getList({
        status: payload.status,
        page,
        pageSize
      });
    },
    //详情
    gotoDetail(id) {
      this.getDetail(id);
      wx.navigateTo({
        url: "/pages/addressDetail/main"
      });
    }
  },
  created() {
  },

  mounted() {}
};
</script>
<style scoped lang="">
.listBox {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #ffffff;
}
.status {
  border-top: 1px solid #dddd;
  width: 100%;
  display: flex;
}
.status li {
  width: 25%;
  height: 96rpx;
  line-height: 96rpx;
  text-align: center;
}
.main {
  flex: 1;
  width: 100%;
  overflow: scroll;
}
.main li {
  display: flex;
  flex-direction: column;
  padding: 24rpx 40rpx;
  border-top: 20rpx solid #f8f8f8;
}
.main li .address {
  display: flex;
  justify-content: space-between;
}
.address h1 {
  font-size: 37rpx;
}
.no_begin {
  background: #f4f4f4;
  color: #909399;
  padding: 6rpx 10rpx;
}
.no_remind {
  background: #fef0f0;
  color: #f56c6c;
  padding: 6rpx 10rpx;
}
.detailed_address {
  color: #999;
  margin: 20rpx 0;
  font-size: 28rpx;
}
.time {
  color: #666;
  display: flex;
  justify-content: space-between;
}
.active {
  color: #0faeff;
  border-bottom: 1px solid #0faeff;
}
.none {
  /* display: block; */
}
</style>
