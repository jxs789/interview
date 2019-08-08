<template>
  <div class="wrap">
    <div class="head">
      <span>北京</span>
      <input type="text" v-model="inp" @input="handelChange" />
    </div>
    <ol>
      <li></li>
      <li></li>
    </ol>
  </div>
</template>
<script>
import { mapState, mapActions } from "vuex";
export default {
  props: {},
  components: {},
  data() {
    return {
      inp: ""
    };
  },
  computed: {},
  methods: {
    handelChange() {
      this.getSuggestion(this.inp);
    },
    ...mapActions({
      getSuggestion: "address/getSuggestion"
    })
  },
  created() {},
  mounted() {
    console.log(this.getSuggestion())
  }
};
</script>
<style scoped lang="scss">
.wrap {
  width: 100%;
  height: 100%;
  .head {
    width: 100%;
    height: 90rpx;
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
}
</style>