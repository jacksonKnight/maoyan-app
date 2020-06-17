<template>
  <div id="app">
    <router-view :movies="movies"></router-view>
    <div class="nav">
      <router-link to="/movie" tag="div" class="item">
      <div class="tach">
        <span class="iconfont icon-dianying1"></span>
        </div>电影
      </router-link>
      <router-link to="/film" tag="div" class="item"><div class="tach">
        <span class="iconfont icon-yingyuan"></span>
        </div>影院</router-link>
      <router-link to="/mine" tag="div" class="item"><div class="tach">
       <span class="iconfont icon-tubiao-"></span>
        </div>我的</router-link>
    </div>
  </div>
</template>

<script>
export default {    
  data() {
    return {
      movies:[]
    }
  },
  methods: {
    getMovies() {
      this.axios('/movie/in_theaters?city=广州&start=0&count=100').then(res => {
        this.movies = res.data.subjects
      })
    }
  },
  mounted() {
      this.getMovies()     
  }
}
</script>

<style>

html,body{
  height: 100%
}

#app{
  /* padding: 50px 0 0; */
  height: 100%;
}
.nav{
  position: fixed;
  display: flex;
  left: 0;
  bottom: 0;
  right: 0;
  height: 50px;
  border-top: 1px solid #d8d8d8;
}

.nav .item{
    flex: 1;
    text-align: center;
    color: #707070;
    font-size: 13px;
}

.nav .item.active{
  color: #e54847;
}

.tach{
  width: 28px;
  height: 28px;
  margin: 4px auto 1px;
}

.iconfont{
    font-size: 26px;
  }

.auto-img{
  display: inline-block;
  width: 100%;
}

</style>

