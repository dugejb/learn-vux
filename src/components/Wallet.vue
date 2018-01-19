<template>
  <div style="height:100%;" class="wallet">
    <view-box ref="viewBox">
      <x-header slot="header" :left-options="{backText: 'Me'}" title="Wallet" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
      <grid class="wallet-grid">
        <grid-item class="wallet-grid-item">
          <img slot="icon" src="../../assets/scan.png">
        </grid-item>
        <grid-item class="wallet-grid-item">
          <img slot="icon" src="../../assets/balance.png">
        </grid-item>
        <grid-item class="wallet-grid-item">
          <img slot="icon" src="../../assets/cards.png">
        </grid-item>
      </grid>
      <div class="divider">Powered by Tencent</div>
      <grid :cols="3" class="grid-backgound-white">
        <grid-item v-for="item in poweredByTencentList" :key="item.name">
          <img slot="icon" :src="item.src">
          <span slot="label">{{item.name}}</span>
        </grid-item>
      </grid>
    </view-box>
  </div>
</template>

<script>
import { ViewBox, XHeader, Grid, GridItem } from 'vux'
export default {
  // modules.exports = {
  name: 'wallet',
  components: {
    ViewBox,
    XHeader,
    Grid,
    GridItem
  },
  methods: {},
  data: function() {
    return {
      msg: 'hello',
      poweredByTencentList: [
        {
          name: 'Card Repay',
          src: '../../assets/cards_offers.png'
        },
        {
          name: 'Mobile Top Up',
          src: '../../assets/cards_offers.png'
        },
        {
          name: 'Wealth',
          src: '../../assets/cards_offers.png'
        },
        {
          name: 'Utilities',
          src: '../../assets/cards_offers.png'
        },
        {
          name: 'QQ Coins',
          src: '../../assets/cards_offers.png'
        },
        {
          name: 'Public Services',
          src: '../../assets/cards_offers.png'
        },
        {
          name: 'Tencent Charity',
          src: '../../assets/cards_offers.png'
        },
        {
          name: 'Insurance',
          src: '../../assets/cards_offers.png'
        }
      ]
    }
  },
  computed: {}
}
</script>

<style lang="less" scoped>
@import '~vux/src/styles/reset.less';

.wallet {
  background-color: #686f79;
}
.wallet-grid {
  margin-top: 40px;
  height: 150px;
  // border:solid 2px red;
}
.wallet-grid-item {
  color: white;
  padding: 40px 0px 80px 0px;
}
.divider {
  height: 40px;
  background: #e7e7e7;
  line-height: 40px;
}
.grid-backgound-white {
  background: #fff;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
