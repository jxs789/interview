<template>
  <div class="wrap">
    <form @submit="formSubmit" report-submit="true">
      <p>
        <span>面试地址:</span>
        <input type="text" :value="address" />
      </p>
      <p>
        <span>面试时间:</span>
        <input type="text" :value="time" />
      </p>
      <p>
        <span>联系方式:</span>
        <input type="text" :value="obj.phone" />
      </p>
      <p>
        <span>是否提醒:</span>
        <input type="text" :value="obj.remind === -1 ? '未提醒' : '已提醒'" />
      </p>
      <p>
        <span>面试状态:</span>
        <input type="text" :value="status" />
      </p>
      <p v-if="obj.status === -1">
        <span>取消提醒:</span>
        <switch name="switch" :checked="obj.remind===1" @change="cancelRemind" />
      </p>
      <div class="btnDiv" v-if="obj.status === -1">
        <button @tap="goToCard">去打卡</button>
        <button @tap="giveup" @click="give">放弃面试</button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
const moment = require("moment");

function formatTime(start_time) {
  return moment(start_time * 1).format("YYYY-MM-DD HH:mm");
}
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapState({
      obj: state => state.interviewList.obj,
      id: state => state.interviewList.id
    }),
    address() {
      return JSON.parse(this.obj.address).address;
    },
    time() {
      return formatTime(this.obj.start_time);
    },
    status() {
      let str = "";
      if (this.obj.status === -1) {
        str = "未开始";
      } else if (this.obj.status === 1) {
        str = "已放弃";
      } else {
        str = "已打卡";
      }
      return str;
    }
  },
  methods: {
    ...mapActions({
      putDetail: "interviewList/putDetail"
    }),
    //取消提醒
    async cancelRemind(e) {
      await this.putDetail({
        id: this.id,
        params: { remind: e.target.value ? 1 : -1 }
      });
    },
    give() {
      wx.showModal({
        title: "温馨提示", //提示的标题,
        content: "确定要放弃本次面试吗?", //提示的内容,
        success: async res => {
          if (res.confirm) {
            await this.putDetail({
              id: this.id,
              params: { status: 1 }
            });
          }
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
p:first-child {
  border-top: 1px solid #eee;
  margin-left: 0;
  padding-left: 15px;
}
p {
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #eee;
  margin-left: 15px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  font-size: 15px;
  span {
    color: #666;
    padding-right: 30px;
    box-sizing: border-box;
  }
  input {
    color: #333;
    flex: 1;
    padding-right: 20px;
    box-sizing: border-box;
  }
}
p:last-child {
  border-bottom: 1px solid #eee;
  margin-left: 0;
  padding-left: 15px;
}
.btnDiv {
  margin: 25px 8px;
  display: flex;
  button {
    background: #197dbf;
    flex: 1;
    color: #fff;
    margin: 8px;
    border: none;
    outline: none;
    border-radius: 0;
  }
  button:last-child {
    background: #dc4e42;
  }
}
</style>