<template>
  <div class="mine">
    <div class="mine-top" >
      <span class="iconfont icon-zuojiantou" @click="goDown" ></span>
      猫眼电影
    </div>
    <div class="fix">
      <div class="box">
        <router-link to="/mine/meituan" tag="div">美团账号登录</router-link>
        <router-link to="/mine/mobile" tag="div">手机验证登录</router-link>
      </div>
      <router-view />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    goDown(){
      this.$router.push('/film')
    }
    // goto(){
    //   this.$router.go(-1);
    // }
  }
};
</script>

<style lang="scss" scoped>
.mine-top {
  text-align: center;
  line-height: 50px;
  position: fixed;
  height: 50px;
  top: 0;
  left: 0;
  right: 0;
  background-color: #e54847;
  color: #fff;
  font-size: 18px;
  .icon-zuojiantou {
    position: absolute;
    left: 5px;
    font-size: 32px;
  }
}
/*
当你子级元素设置flex布局，然后flex:1等分分割，上上级设置定位不会影响到flex布局的效果（position）；
 */
.fix {
  top: 50px;
  left: 0;
  right: 0;
  width: 100%;
  position: fixed;
}
.box {
  text-align: center;
  height: 40px;
  line-height: 40px;
  margin-top: 0px;
  display: flex;
  background-color: #fff;
  font-size: 15px;
  & > div {
    flex: 1;
    border-bottom: 4px solid grey;
  }
  div.active {
    border-bottom: 4px solid rgb(255, 195, 0); 
  }
}
</style>