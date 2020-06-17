<template>
     <div class="movie-nav">
         <div class="movie-top">猫眼电影</div>
         <div class="white-nav">
            <div class="city"><span>广州</span><i class="line"></i></div>
           <router-link tag="div" to="/movie/hot" class="tag" exact>正在热映</router-link>
           <router-link tag="div" to="/movie/now" class="tag">即将上映</router-link>
           <div class="search" >
               <span class="iconfont icon--" ></span>
               </div>
        </div>
         <router-view :movies="movies" :moviesNow="moviesNow"></router-view>
     </div>
</template>
<script>
export default {
    //props传值 参数  query
    props: {
        movies: {
            type:Array,
            required:true//获取加载的图片
        }
    },
    //vue存储的数据
    data() {
        return {
            moviesNow: []
        }
    },
    //vue的方法
    methods: {
    getMoviesNow() {
      this.axios('/movie/coming_soon?start=0&count=100').then(res => {
        this.moviesNow = res.data.subjects
      })
    }
  },
  //vue的生命周期（正在载入中...）
  mounted() {
      this.getMoviesNow()     
  }
}
</script>

<style lang="scss" scoped>
.movie-nav{
   
    height: calc(100% - 50px);

    .movie-top{
    height: 50px;
    text-align: center;
    line-height: 50px;
    font-size: 18px;
    background-color: #e54847;
    color: #fff;
    }

    .white-nav{
        width: 100%;
        height: 44px;
        border-bottom: 1px solid #e6e6e6;
        line-height: 44px;
        padding: 0 15px;

        div{
        float: left;
        }

        .city{
            font-size: 15px;
            color: #666;
            margin-right: 25px;
        }
    
        .line{
            width: 0;
            height: 0;
            border: 4px solid #b0b0b0;
            border-left-color: transparent;
            border-right-color: transparent;
            border-bottom-color: transparent;
            display: inline-block;
            margin-left: 3px;
        }

        .search{
            height: 41px;
            padding-top: 3px;
            margin-left: 25px;
        }

        .iconfont{
            font-size: 20px;
            color: #e54847;
        }

        .tag{
            width: 97px;
            height: 43px;
            text-align: center;
            font-size: 16px;
            font-weight: 700;
            color: #666;
            margin: 0 10px;
        }
        .tag.active{
            color:#e54847;
            border-bottom: 2px solid #e54847;
        }
        
    }
    
}

</style>