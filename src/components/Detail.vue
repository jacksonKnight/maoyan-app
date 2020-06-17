<template>
  <div class="detail">
    <div class="detail-top">
      <span class="iconfont icon-zuojiantou" @click="down"></span>
      <span>猫眼电影</span>
    </div>
    <div class="detail-nav">
      <div class="detail-nav-left">
        <div class="detail-nav-img">
          <img :src="videos.images.small" class="auto-img" alt />
          <!-- {{movies}} -->
        </div>
        <div class="detail-rig">
          <div @click="aaa">{{videos.title}}</div>
          <div>{{videos.original_title}}</div>
          <div>
            <span>{{videos.rating.average}}&nbsp;&nbsp;</span>
            <span>({{videos.rating.stars}}万人评)</span>
          </div>
          <div>{{getGenres(videos.genres)}}</div>
          <div>{{videos.durations[1]}}</div>
          <div>{{get(date)}}大陆上映</div>
        </div>
      </div>
      <div class="detail-nav-right">
        <span class="iconfont icon-changyongtubiao-xianxingdaochu-zhuanqu-"></span>
      </div>
    </div>
    <div class="detail-fix">
      <div class="detail-ul-container">
        <div class="detail-ul">
          <li
            @click="cur = index"
            :class="{active : cur === index}"
            v-for="(item,index) in todo"
            :key="index"
          >{{item}}{{getItem(dates)}}</li>
        </div>
      </div>
      <div class="detail-content">
        <div>
          全城
          <span class="drop"></span>
        </div>
        <div>
          品牌
          <span class="drop"></span>
        </div>
        <div>
          特色
          <span class="drop"></span>
        </div>
      </div>
    </div>
    <div class="detail-end">
      <div class="detail-end-ul">
        <div class="detail-end-list" v-for="(m,index) in cinema" :key="index">
          <div class="film-name">
            <div class="filmer">{{m.store}}</div>
            <div class="films">
              <span>{{m.consumption}}&nbsp;</span>
              <span>元起</span>
            </div>
          </div>
          <div class="address">
            <div class="first">
              <span>{{m.address}}</span>
            </div>
            <div class="second">
              <span>{{m.distance}}</span>
            </div>
          </div>
          <div class="decount">
            <div class="endorse">改签</div>
            <div class="snack">小吃</div>
            <div class="vipTag">折扣卡</div>
          </div>
          <div class="free">
            <div class="free-img">
              <img src="../assets/imges/ka.png" alt />
              <span>开卡特惠，首单1张最高立减10元</span>
            </div>
          </div>
          <div class="timer">
            <span>近期场次:</span>
            <span>12:40</span>
            <span>14:00</span>
            <span>15:10</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cinema: {},
      date: new Date(),
      todo: ["今天", "明天", "后天", "星期五", "星期六", "星期天", "星期一"],
      dates: new Date(),
      cur: 0
    };
  },
  // props:["videos","movies"],
  props: {
    videos: {
      type: Object,
      required: true
    },
    movies: {
      type: Array,
      required: true
    }
  },
  mounted() {
    this.getCinemaData(), this.aaa();
    console.log("vv=====>:", this.videos);
    // window.addEventListener("scroll", this.handleScroll)
  },
  methods: {
    getItem(dates) {
      let b = new Date(dates);
      let month = b.getMonth() + 1 + "月";
      let day = b.getDate() + "日";
      return month + day;
    },
    //vue.js当滚动条滚动到某个高度时候，则会固定在顶部不动。
    // handleScroll(){
    //   var scrollTop=window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
    // let offsetTop = document.querySelector('#searchBar').offsetTop
    // scrollTop > offsetTop ? this.searchBarFixed = true : this.searchBarFixed = false},
    // },
    getCinemaData() {
      this.$http("/ele/cinema").then(res => {
        console.log(res);
        let { data } = res.data;
        this.cinema = data;
        console.log(this.cinema);
      });
    },
    aaa() {
      console.log("1111111111111", this.movies);
    },
    down() {
      this.$emit("d-down");
    },
    get(date) {
      let a = new Date(date);
      let year = a.getFullYear() + "-";
      let month = a.getMonth() + 1 + "-";
      let day = a.getDate();
      let minutes = a.getMinutes() + ":";
      let seconds = a.getSeconds();
      return year + month + day + "  " + minutes + seconds;
    },
    getGenres(detail) {
      let vv = detail.join(",");
      return vv;
    }
  }
};
</script>

<style lang="scss" scoped>
.detail {
  margin: 0;
  padding: 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 10;
  list-style: none;
}
.detail-top {
  height: 50px;
  background-color: #e54847;
  color: #fff;
  line-height: 50px;
  text-align: center;
  .icon-zuojiantou {
    position: absolute;
    left: 5px;
    font-size: 32px;
  }
}
.detail-nav {
  position: relative;
  margin-top: -1px;
  background-color: #777;
  height: 200px;
  .detail-nav-img {
    width: 110px;
    height: 150px;
    float: left;
    margin-right: 10px;
    .auto-img {
      display: block;
      width: 100%;
    }
  }
}
.detail-nav-left {
  padding: 19px 30px 19px 15px;
  .detail-rig {
    position: absolute;
    top: 20px;
    right: 5px;
    width: 250px;
    height: 150px;
    & > div:nth-child(1) {
      font-size: 20px;
      color: #ffffff;
      width: 250px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    & > div:nth-child(2) {
      color: #ffffff;
      font-size: 12px;
    }
    & > div > span:nth-child(1) {
      color: #ffcc00;
      font-size: 18px;
    }
    & > div > span:nth-child(2) {
      color: #ffffff;
      font-size: 12px;
    }
    & > div:nth-child(4) {
      color: #ffffff;
      font-size: 12px;
    }
    & > div:nth-child(5) {
      color: #ffffff;
      font-size: 12px;
    }
    & > div:nth-child(6) {
      color: #ffffff;
      font-size: 12px;
    }
    & > div {
      margin-top: 10px;
    }
  }
}
.detail-nav-right {
  position: absolute;
  right: 10px;
  top: 80px;
  color: #fff;
  font-size: 14px;
}
.detail-fix {
  .detail-content {
    font-size: 13px;
    display: flex;
    margin-top: 0px;
    & > div {
      border-right: 1px solid whitesmoke;
      border-bottom: 1px solid whitesmoke;
      flex: 1;
      float: left;
      height: 30px;
      line-height: 30px;
      text-align: center;
    }
    .drop {
      display: inline-block;
      line-height: 40px;
      border: 4px solid transparent;
      border-top-color: #b0b0b0;
    }
  }
}
.detail-ul > li.active {
  color: #e54847;
}
.detail-ul-container {
  overflow-x: auto;
}
.detail-ul {
  width: 805px;
  height: 40px;
  overflow: hidden;
  & > li {
    float: left;
    text-align: center;
    line-height: 45px;
    width: 115px;
    height: 45px;
    font-size: 14px;
    color: #666666;
  }
}
.detail-end {
  overflow: auto;
}
.detail-end-ul {
  height: 6000%;
  overflow-y: hidden;
}
.detail-end-list {
  border-bottom: 1px solid #999999;
  width: 399px;
  height: 142px;
  padding: 15px 15px 10px 0px;
  margin-left: 7.5px;
  .address {
    margin-top: 5px;
    display: block;
    color: #666666;
    & > .first {
      width: 330px;
      height: 19px;
      font-size: 13px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .second {
      text-align: right;
      margin-top: -19px;
    }
  }
  .decount > div {
    margin: 5px 5px;
    font-size: 12px;
    float: left;
    text-align: center;
    line-height: 14px;
    height: 17px;
  }
  .decount > div:nth-child(1) {
    margin-left: 0px;
    width: 32px;
    border: 1px solid #589daf;
    color: #589daf;
  }
  .decount > div:nth-child(2) {
    width: 32px;
    border: 1px solid #ff9900;
    color: #ff9900;
  }
  .decount > div:nth-child(3) {
    width: 42px;
    border: 1px solid #ff9900;
    color: #ff9900;
  }
}
.free-img {
  margin: 30px 0px;
  font-size: 12px;
  color: #999999;
  display: block;
  text-align: left;
  img {
    vertical-align: top;
    width: 15px;
    height: 14px;
  }
  span {
    margin-left: 10px;
  }
}
.film-name {
  margin-left: 0px;
  .flimer {
    font-size: 16px;
    color: #000000;
  }
  .films {
    margin-left: 230px;
    margin-top: -16px;
    right: 20px;
    & > span:nth-child(1) {
      font-size: 18px;
      color: #f03d37;
    }
    & > span:nth-child(2) {
      font-size: 12px;
      color: #f03d37;
    }
  }
}
.timer {
  margin-top: -25px;
  font-size: 12px;
  display: block;
  color: #999999;
  & > span {
    padding: 0px 6px;
  }
  span:nth-child(1) {
    padding-left: 0px;
  }
}
</style>