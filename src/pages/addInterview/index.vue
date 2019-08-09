<template>
  <div class="wrap">
    <form @submit="submit" report-submit>
      <h4>面试信息</h4>
      <ul>
        <li>
          <span>公司名称</span>
          <input type="text" placeholder="请输入名称" v-model="current.company" />
        </li>
        <li>
          <span>公司电话</span>
          <input type="text" placeholder="请输入面试联系人电话" v-model="current.phone" />
        </li>
        <li>
          <span>面试时间</span>
          <div>
            <picker
              mode="multiSelector"
              :range="dateRange"
              :value="info.date"
              @change="dateChange"
              @columnchange="columnChange"
            >
              <view class="date">{{dateShow}}</view>
            </picker>
            <i class="iconfont icon-tanhao-tianchong" @click="showcar"></i>
          </div>
        </li>
        <li>
          <span>面试地址</span>
          <input
            type="text"
            placeholder="请选择面试地址"
            @click="gotoAddress"
            v-model="current.address.address"
          />
        </li>
      </ul>
      <h4>备注信息</h4>
      <div class="contBox">
        <textarea placeholder="备注信息（可选，100个字以内）" v-model="current.description" />
      </div>
      <button class="btn" form-type="submit">确认</button>
    </form>
  </div>
</template>
<script>
const moment = require("moment");
import { mapState, mapActions } from "vuex";
const range = [
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23
  ],
  ["00分", "10分", "20分", "30分", "40分", "50分"]
];
export default {
  props: {},
  components: {},
  data() {
    return {
      info: {
        date: [0, 0, 0]
      }
    };
  },
  computed: {
    ...mapState({
      current: state => state.addList.current
    }),
    // 处理面试日期
    dateRange() {
      let dateRange = [...range];
      // 如果时间是今天，过滤掉现在之前的小时
      if (!this.info.date[0]) {
        dateRange[1] = dateRange[1].filter(item => {
          return item > moment().hour();
        });
      } else {
        dateRange[1] = range[1];
      }
      // 格式化小时
      dateRange[1] = dateRange[1].map(item => {
        return item + "点";
      });
      // 计算当前日期之后的十天
      dateRange[0] = dateRange[0].map(item => {
        return (
          moment()
            .add(item, "days")
            .date() + "号"
        );
      });
      return dateRange;
    },
    // 显示的日期
    dateShow() {
      return moment()
        .add(
          moment().hour() == 23 ? this.info.date[0] - 1 : this.info.date[0],
          "d"
        )
        .add(this.info.date[1] + 1, "h")
        .minute(this.info.date[2] * 10)
        .format("YYYY-MM-DD HH:mm");
    }
  },
  methods: {
    ...mapActions({
      submitInterview:'addList/submitInterview'
    }),
    gotoAddress() {
      wx.navigateTo({
        url: "/pages/viewAddress/main"
      });
    },
    // 监听多列选择器每列变化
    columnChange(e) {
      let { column, value } = e.target;
      let date = [...this.info.date];
      date[column] = value;
      this.info.date = date;
    },

    //显示提醒
    showcar() {
      wx.showToast({
        title: "在面试前一个小时我们会通知你",
        icon: "none"
      });
    },
    //提交
    async submit(e) {
      // 判断是否在提交状态
      if (this.submiting) {
        return false;
      }
      // 判断公司名称是否为空
      if (!this.current.company) {
        wx.showToast({
          title: "请输入公司名称", //提示的内容,
          icon: "none" //图标,
        });
        return false;
      }
      // 判断手机号是否符合规范
      if (
        !/^1(3|4|5|7|8)\d{9}$/.test(this.current.phone) ||
        !/^(\(\d{3,4}\)|\d{3,4}-|\s)?\d{7,14}$/.test(this.current.phone)
      ) {
        wx.showToast({
          title: "请输入面试联系人的手机或座机", //提示的内容,
          icon: "none" //图标,
        });
        return false;
      }
      // 判断公司地址
      if (!this.current.address.address) {
        wx.showToast({
          title: "请选择公司地址", //提示的内容,
          icon: "none" //图标,
        });
        return false;
      }
      // 添加时间戳到表单
      this.current.start_time = moment(this.dateShow).unix() * 1000;
      // 添加form_id
      this.current.form_id = e.target.formId;
      this.submiting = true;
      let data = await this.submitInterview(this.current);
      console.log("data...", data);
      this.submiting = false;
      // 处理添加结果
      if (data.code == 0) {
        wx.showModal({
          title: "温馨提示", //提示的标题,
          content: data.msg, //提示的内容,
          showCancel: false,
          confirmText: "确定", //确定按钮的文字，默认为取消，最多 4 个字符,
          confirmColor: "#197DBF", //确定按钮的文字颜色,
          success: res => {
            if (res.confirm) {
              this.updateState({
                form_id: "",
                company: "",
                address: "",
                phone: ""
              });
              // wx.navigateTo({ url: "/pages/sign/list/main" });
            }
          }
        });
      } else {
        wx.showToast({
          title: data.msg, //提示的内容,
          icon: "fail" //图标,
        });
      }
    }
  },
  created() {
    // 如果当前时间是十一点之后，过滤掉今天
    if (moment().hour() == 23) {
      this.info.date = [1, 0, 0];
    }
  },
  mounted() {
    console.log('44',this.current);
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  h4 {
    height: 80rpx;
    line-height: 80rpx;
    background: #f8f8f8;
    padding-left: 20rpx;
  }
  ul {
    background: #ffff;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    li {
      display: flex;
      height: 100rpx;
      align-items: center;
      border-bottom: 1px solid #eee;
      margin-left: 20rpx;
      color: #666;
      span {
        margin-right: 60rpx;
      }
      div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        i {
          color: #1a7dc0;
          font-size: 40rpx;
          margin-left: 130rpx;
        }
      }
    }
  }
  .contBox {
    width: 100%;
    padding: 36rpx;
    textarea {
      width: 90%;
      height: 200rpx;
      border: 1px solid #9999;
      margin-left: 2rpx;
    }
  }
  button {
    width: 100%;
    height: 80rpx;
    background: #666;
    line-height: 80rpx;
    color: aliceblue;
    border-radius: 0%;
  }
}
</style>