<template>
  <div class="wrap">
    <div class="head">
      <span>北京</span>
      <input type="text" v-model="inp" @input="handelChange" />
    </div>
    <ol v-if="addressData.length>0">
      <li v-for="(item,index) in addressData" :key="item.id" @click="gotoback(index)">
        <p class="iconfont icon-zhifeiji"></p>
        <div>
          <h2>{{item.title}}</h2>
          <span>{{item.address}}</span>
        </div>
      </li>
    </ol>
  </div>
</template>
<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { debounce } from "@/utils/index.js";
export default {
  props: {},
  components: {},
  data() {
    return {
      inp: ""
    };
  },
  computed: {
    ...mapState({
      addressData: state => state.address.addressData
    })
  },
  methods: {
    handelChange() {
      if (this.inp) {
        this.getSuggestion(this.inp);
      }
    },
    ...mapActions({
      getSuggestion: "address/getSuggestion"
    }),
    ...mapMutations({
      updateItem: "addList/updateItem"
    }),
    //点击把地址带到添加页
    gotoback(index) {
      this.updateItem({
        address: this.addressData[index]
      });
      wx.navigateTo({
        url: "/pages/addInterview/main"
      });
    }
  },
  watch: {
    // 监听input框变化，调用智能提示
    inp(val, oldVal) {
      this.search(val);
    }
  },
  created() {
    var that = this;
    // 使用函数防抖控制事件触发频率
    this.search = debounce(val => {
      this.$map.getSuggestion({
        keyword: val,
        region: "北京",
        success: function(res) {
          console.log(res);
          that.addressData = res.data;
        }
      });
    }, 300);
  },
  mounted() {}
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    height: 80rpx;
    border-bottom: 1px solid #eee;
    border-top: 1px solid #eee;
    display: flex;
    align-items: center;
    padding: 0 20rpx;
    span {
      width: 20%;
      text-align: center;
      border-right: 1px solid #eee;
    }
    input {
      padding: 0 20rpx;
    }
  }
  ol {
    li {
      display: flex;
      align-items: center;
      padding: 15rpx 60rpx;
      box-sizing: border-box;
      border-bottom: 1px solid #eee;
      p {
        color: #1a7dc0;
        font-weight: bold;
        padding: 0 20rpx;
        box-sizing: border-box;
      }
      div {
        line-height: 30rpx;
        span {
          font-size: 20rpx;
          color: #999;
        }
      }
    }
  }
}
</style>