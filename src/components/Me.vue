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
    <group>
      <cell title="Wallet" is-link link="/wallet" class="wallet">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/wechat_wallet.png">
      </cell>
    </group>
     <group>
      <cell title="Favorites" is-link class="favorites">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/favorites.png">
      </cell>
      <cell title="MyPosts" is-link class="my-posts">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/my_posts.png">
      </cell>
    </group>
     <group>
      <cell title="Settings" is-link class="settings">
        <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../assets/setting.png">
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
  font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}
.user-header {
  height: 50px;
  border-radius: 5px;
  margin:5px;
}
/* .wallet{
  margin-top: 10px 0;
} */
</style>
