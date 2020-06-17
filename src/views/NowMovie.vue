<template>
  <div class="movie-now">
    <div class="movie-now-top">
      <span class="movie-now-title">近期最受期待</span>
      <div class="movie-ul-div">
        <div class="movie-now-ul">
          <div class="movie-top-list" v-for="bb in moviesNow" :key="bb.id" @click="goFilm(bb)">
            <div class="movie-now-pho" @click="aaa">
              <img class="auto-img" :src="bb.images.medium" alt />
            </div>
            <div class="movie-now-text">
              <span>{{bb.original_title}}</span>
              <p class="pp">{{getDate(bb.pubdates[0])}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="movies-container">
      <ul class="movies-list">
        <li class="movie-list" v-for="v in movies" :key="v.id" @click="cKi(v)">
          <div class="movie-pho" @click="aaa">
            <img class="auto-img" :src="v.images.small" alt />
          </div>
          <div class="movie-right">
            <div class="movie-text">
              <div class="movie-title">{{v.title}}</div>
              <div class="movie-audience">
                <span class="count">{{v.collect_count}}</span>
                <span class="people">人想看</span>
              </div>
              <div class="movie-star">
                主演：
                <span>{{getNamesAll(v.casts)}}</span>
              </div>
              <div class="movie-star">
                <span>{{getTimes(v.pubdates[0])}}</span>
                <span>上映</span>
              </div>
            </div>
            <div
              class="movie-buy"
              :class="[v.rating.average == 0 ? 'movie-blue' : 'movie-yellow']"
            >{{v.rating.average == 0 ? '预售' : '想看'}}</div>
          </div>
        </li>
      </ul>
    </div>
    <DetailShows @d-duck="dDuck" v-if="isDisco" :videoes="this.vk" :movies="movies" />
    <DetailHeight  @d-height="dHeight" v-if="isDises" :detailes="this.vb" :movies="movies" :moviesNow="moviesNow" />
  </div>
</template>

<script>
import DetailHeight from "../components/DetailHeight"
import DetailShows from "../components/DetailShows"
export default {
  data() {
    return {
      isDisco:false,
      isDises:false,
      vk:[],
      vb:[]
    };
  },
  props: {
    movies: {
      type: Array,
      required: true
    },
    moviesNow: {
      type: Array,
      required: true
    }
  },
  // props: ["movies", "moviesNow"],
  mounted() {
    console.log("vvvv======>", this.vk);
    console.log("vvvvvvvb=====>",this.vb)
  },
  methods: {
    dHeight(){
      this.isDises=false
    },
    cKi(vii){
      this.vb =vii
      this.isDisco = !this.isDisco
    },
    goFilm(bd) {
      this.vk = bd
      this.isDisco = !this.isDisco
    },
    getDate(dates) {
      let dateStr = dates;
      let a = dateStr.slice(0, 12).split("(");
      //  let aa=a.join(",",a);
      //  let aa=[].concat().apply([],a);
      console.log(a[0]);
      return a[0];
    },
    getNamesAll(names) {
      let nameAll = "";
      for (let i = 0; i < names.length; i++) {
        if (i != names.length - 1) {
          nameAll += names[i].name + "/";
        } else {
          nameAll += names[i].name;
        }
      }
      return nameAll;
    },
    getTimes(date) {
      let dateStr1 = date;
      let b = dateStr1.slice(0, 12).split("(");
      //  let aa=a.join(",",a);
      //  let aa=[].concat().apply([],a);
      console.log(b[0]);
      return b[0];
    },
    aaa() {
      console.log("movieNow", this.moviesNow);
    },
    dDuck() {
      this.isDisco = false;
    }
  },
  components: {
    DetailShows,
    DetailHeight
  }
};
</script>

<style lang="scss" scoped>
.movie-now {
  height: calc(100% - 94px);
  overflow-y: auto;
  background-color: #fff;
  .movie-now-top {
    position: relative;
    font-size: 14px;
    margin: 15px 15px;
    margin-bottom: 10px;
    // overflow-x:hidden;
    // overflow:-moz-scrollbars-none;
    // overflow:-moz-scrollbars-none;
    .movie-ul-div {
      width: calc(100% - 30px);
      overflow-x: auto;
    }
    .movie-now-ul {
      margin-top: 5px;
      width: 3500%;
      height: 190px;
      position: relative;
      border-bottom: 1px solid whitesmoke;
    }
    //隐藏滚动条又可以滚动
    // .movie-now-top::-webkit-scrollbars{
    //     display: none;
    //  }
    .movie-top-list {
      float: left;
      padding: 12px 15px 0px 0px;
    }
    .movie-top-list:nth-child(1) {
      padding-left: 0;
    }
    .movie-now-text {
      width: 85px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      font-size: 13px;
      display: inline-block;
      padding: 5px 0;
      span {
        font-size: 13px;
        color: #222222;
      }
      .pp {
        padding: 8px 0;
        font-size: 12px;
        color: #999999;
      }
    }
    & .movie-now-pho img {
      width: 85px;
      height: 115px;
    }
  }
}
//    .grey{
//        width: calc(100%-52px);
//        height: calc(100%-50px);
//        background-color: whitesmoke;
//    }
// .movies-list{
//     background-color: whitesmoke;
// }
.movie-list {
  padding: 10px 15px;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid whitesmoke;

  .movie-buy {
    position: absolute;
    top: 0;
    right: 30px;
    bottom: 0;
    margin: auto 0;
    width: 47px;
    height: 28px;
    font-size: 13px;
    line-height: 28px;
    text-align: center;
    border-radius: 5px;
    color: #fff;
    background-color: #f03d37;
  }
  .movie-yellow {
    background-color: #faaf00;
  }
  .movie-blue {
    background-color: #3c9fe6;
  }
  //  .movie-right{
  //    border-bottom: 1px solid whitesmoke;
  //  }
  .movie-pho {
    width: 64px;
    height: 90px;
    float: left;
    margin-right: 10px;

    .auto-img {
      display: block;
      width: 100%;
    }
  }

  .movie-text {
    float: left;
    width: 200px;
    padding: 12px 14px 12px 0;

    .movie-title {
      font-size: 17px;
      margin-bottom: 7px;
      font-weight: 700;
      color: #333;
    }

    .movie-audience {
      font-size: 13px;
      color: #666;
      display: inline-block;
      .count {
        font-size: 15px;
        color: #faaf00;
      }
      .people {
        font-size: 13px;
      }
    }

    .movie-score {
      margin-left: 5px;
      font-size: 15px;
      font-weight: 700;
      color: #faaf00;
    }

    .movie-star {
      width: 100%;
      margin-top: 6px;
      font-size: 13px;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
}
</style>