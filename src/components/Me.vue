<template>
  <div class="me">
    <group>
          
      <cell title="Watch Wechat" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/applewatch.png">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell } from "vux";
export default {
  components: {
    Group,
    Cell
  }
};
</script>

<style>

</style>

<style>
.me {
  margin-top: 60px;
}
</style>
