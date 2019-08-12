<template>
  <div class="wrap">
    <div class="head">
      <dl>
        <dt>
          <p class="iconfont icon-wode"></p>
        </dt>
        <dd>{{setphone}}</dd>
      </dl>
    </div>
    <ul>
      <li>
        <navigator class="navigator" url="/pages/interviewList/main">
          <div>
            <span class="iconfont icon-solid-time"></span>
            <p>我的面试</p>
          </div>
          <i class="iconfont icon-qianjin"></i>
        </navigator>
      </li>
      <li>
        <div class="navigator" @click="showDialog">
          <div>
            <span class="twoLi iconfont icon-InfoFilled"></span>
            <p>客服中心</p>
          </div>
          <i class="iconfont icon-qianjin"></i>
        </div>
      </li>
    </ul>
    <button open-type="openSetting" v-if="showSetting">打开设置页</button>
    <div class="dialog" v-if="flag">
      <div class="mask">
        <p>为了更好地使用我们的服务,我们需要获取你的手机号码</p>
        <button v-if="!hasPhone" open-type="getPhoneNumber" @getphonenumber="getPhoneNumber">同意</button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      hasPhone: false,
      showSetting: false,
      flag: true
    };
  },
  computed: {
    ...mapState({
      phoneNumber: state => state.user.phone
    }),
    setphone(){
      if(this.phoneNumber){
        return this.phoneNumber.slice(0,3)+'****'+this.phoneNumber.slice(7,11)
      }else{
        return '***********'
      }
    }
  },
  methods: {
    ...mapActions({
      getDecrypt: "user/getDecrypt"
    }),
    //客服
    showDialog() {
      wx.showModal({
        title: "模拟进入客服会话",
        content: "开发者工具暂不支持打开客服会话,请使用真机调试",
        showCancel: false,
        confirmText: "返回",
        confirmColor: "#19bf27"
      });
    },
    getPhoneNumber(e) {
      if (e.target.encryptedData) {
        this.getDecrypt({
          iv: e.target.iv,
          encryptedData: e.target.encryptedData
        });
        this.flag = false;
        //手机号
      } else {
        this.showSetting = true;
        this.flag = false;
        wx.openSetting({
          success(res) {
            // console.log(res.authSetting);
          }
        });
      }
    }
  },
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
      .navigator {
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
  .dialog {
    width: 100%;
    height: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    .mask {
      width: 260px;
      height: 100px;
      border-radius: 8px;
      background: #fff;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      p {
        padding: 15px 8px;
        box-sizing: border-box;
        font-size: 16px;
      }
      button {
        background: #1a7dc0;
        color: #fff;
        border-top-left-radius: 0%;
        border-top-right-radius: 0%;
      }
    }
  }
}
</style>