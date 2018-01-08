<template>
  <div class="me">
    <group>      
      <cell-box is-link style="height:50px;">
        <img src="../../assets/header.jpg" class="user-header"> 
        <div>
          <span><b>Dugejb</b> </span>
          <br>
          <span>Wechat ID:zmy_is_pig</span>
        </div>
      </cell-box> 
      <cell title="Watch Wechat" is-link>
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/applewatch.png">
      </cell>
    </group>
  </div>
</template>

<script>
import { Group, Cell, CellBox } from "vux";
export default {
  components: {
    Group,
    Cell,
    CellBox
  }
};
</script>

<style>
.me {
  margin-top: 60px;
}
.user-header {
  height: 50px;
  border-radius: 5px;
  margin:5px;
}
</style>
