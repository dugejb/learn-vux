<template>
  <div>
    <div class="vux-demo">
      <swiper :list="swiperlist" loop></swiper>
    </div>
    <group title="cell demo">
      <cell title="VUX" value="cool" is-link></cell>
      <x-button type="primary" @click.native="showPosition('')">hi</x-button>
    </group>
    <toast v-model="showPositionValue" type="text" :time="800" is-show-mask :text="msg" :position="position"></toast>
  </div>
</template>

<script>
import { Swiper, Group, Cell, XButton, Toast } from "vux";

export default {
  components: {
    Swiper,
    Group,
    Cell,
    XButton,
    Toast
  },
  methods: {
    showPosition(position) {
      this.position = position;
      this.showPositionValue = true;
    }
  },
  data() {
    return {
      swiperlist: [
        {
          url: "javascript:",
          img: "../../assets/1.jpg"
        },
        {
          url: "javascript:",
          img: "../../assets/2.jpg"
        },
        {
          url: "javascript:",
          img: "../../assets/3.jpg"
        }
      ],
      position: "default",
      showPositionValue: false,
      msg: "Hello zmy!"
    };
  }
};
</script>

<style>
.vux-demo {
  margin-top: 45px;
  text-align: center;
}
.logo {
  width: 100px;
  height: 100px;
}
</style>
