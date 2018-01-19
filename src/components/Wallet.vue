<template>
 <div style="height:100%;" class="wallet">
   <view-box ref="viewBox">
    <x-header slot="header" :left-options="{backText: 'Me'}" title="Wallet" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
    <grid class="wallet-grid">
      <grid-item class="wallet-grid-item" >
        <img slot="icon" src="../../assets/balance.png">
        <span>hi</span>
      </grid-item>
      <grid-item label="222">
        <img slot="icon" src="../../assets/scan.png">
      </grid-item>
    </grid>
   </view-box>
 </div>
</template>

<script>
import { ViewBox, XHeader, Grid, GridItem } from "vux";
export default {
  // modules.exports = {
  name: "wallet",
  components: {
    ViewBox,
    XHeader,
    Grid,
    GridItem
  },
  methods: {},
  data: function() {
    return {
      msg: "hello"
    };
  },
  computed: {}
};
</script>

<style lang="less" scoped>
@import "~vux/src/styles/reset.less";

.wallet {
  background-color: #686f79;
}
.wallet-grid {
  margin-top: 40px;
}
.wallet-grid-item{
  color:white;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
