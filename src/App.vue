<template>
  <view-box ref="viewBox">
     <x-header slot="header" :title="tabbarInfo[tabbarIndex]" style="width:100%;position:absolute;left:0;top:0;z-index:100;"></x-header>
     <router-view></router-view>
     <tabbar slot="bottom" v-model="tabbarIndex" @on-index-change="indexChange()">
       <tabbar-item link="/">
       <img slot="icon" :src="tabbarIcon.wechatSrc">
          <span slot="label">Wechat</span>
       </tabbar-item>
       <tabbar-item link="/me">
       <img slot="icon" :src="tabbarIcon.meSrc">
         <span slot="label">Me</span>
      </tabbar-item>
     </tabbar>
   </view-box>
</template>

<script>
import { XHeader, Tabbar, ViewBox, TabbarItem } from "vux";
export default {
  // modules.exports = {
  name: "app",
  components: {
    XHeader,
    Tabbar,
    ViewBox,
    TabbarItem
  },
  methods: {
    indexChange: function() {
      this.tabbarIcon = this.tabbarIconList[this.tabbarIndex]
    }
  },
  data: function() {
    return {
      appTitle: "Hi,GK5",
      msg: "hello",
      tabbarIndex: 0,
      tabbarInfo:['wechat','me'],
      tabbarIconList: [
        {
          wechatSrc: "./assets/wechat2.png",
          meSrc: "./assets/me.png"
        },
        {
          wechatSrc: "./assets/wechat.png",
          meSrc: "./assets/me2.png"
        }
      ],
      tabbarIcon:{}
    };
  },
  computed: {

  }
};
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";

body {
  background-color: #fbf9fe;
}
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
</style>
