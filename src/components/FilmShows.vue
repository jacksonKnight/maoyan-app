<template>
  <div class="shows">
    <div class="shows-top">
      <span class="iconfont icon-zuojiantou" @click="forword"></span>
      <span>4849848949</span>
    </div>
    <div class="shows-nav">
      <div class="nav-left">
        <div>
          <span>4849848949</span>
        </div>
        <div>
          <span>4849848949</span>
        </div>
      </div>
      <div class="nav-right">
        <div class="address">
          <span class="iconfont icon-dizhi1"></span>
        </div>
      </div>
    </div>
    <div class="table-cells">
      <ul>
        <li
          v-bind:class="{active : active == vj.id}"
          v-for="vj in movies"
          :key="vj.id"
          @click="bigger(vj.id)"
        >
          <img :src="vj.images.small" class="auto-img" alt />
        </li>
      </ul>
    </div>
    <div class="movies-name">
      <div class="top">
        <div class="top-left">海上钢琴师</div>
        <div class="top-right">
          <div>9.4分</div>
        </div>
      </div>
      <div class="bottom">
        <div>126分钟</div>
        <div>剧情</div>
        <div>蒂姆·罗斯,比尔·努恩</div>
      </div>
    </div>
    <div class="date">
      <div >今天11月20日</div>
      <div>明天11月21日</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: ""
    };
  },
  props: {
    movies: {
      type: Array,
      required: true
    },
    sdf: {
      type: Array
    }
  },
  mounted() {
    console.log("ssss======>", this.$route.query.cinema);
    // this.getCinemaData()
  },
  methods: {
    bigger(id) {
      this.active = id;
    },
    forword() {
      this.$router.go(-1);
    }
    //    getCinemaData() {
    //   this.$http("/ele/cinema").then(res => {
    //     console.log(res);
    //     let { data } = res.data;
    //     this.cinema = data;
    //     console.log(this.cinema);
    //   });
    // },
    //   goDowns(){
    //   this.$router.go(-1)
    // }
  }
};
</script>

<style lang="scss" scoped>
.shows {
  position: relative;
}
.shows-top {
  height: 50px;
  background-color: #e54847;
  color: #ffffff;
  text-align: center;
  line-height: 50px;
  display: block;
  .icon-zuojiantou {
    position: absolute;
    left: 5px;
    font-size: 32px;
  }
  span {
    text-align: center;
  }
}
.shows-nav {
  border: 1px solid blue;
  padding: 15px 150px 15px 15px;
  height: 70px;
  background-color: #fff;
  position: relative;
  .nav-left {
    div:nth-child(1) {
      color: black;
      font-size: 17px;
      width: 299px;
      height: 24px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
    div:nth-child(2) {
      color: #999999;
      font-size: 13px;
      width: 290px;
      height: 18px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
    }
  }
}
.nav-right {
  position: absolute;
  top: 20px;
  right: 15px;
  border-left: 1px solid #777777;
  display: inline-block;
  height: 31px;
  width: 71px;
  text-align: center;
  & > div {
    width: 19px;
    height: 22px;
    display: inline-block;
    margin-top: 2px;
    color: #20b2aa;
  }
}
.table-cells {
  width: 100%;
  height: 100%;
  position: absolute;
  height: 180px;
  top: 120px;
  left: 0;
  right: 0;
  background-color: #40454d;
  // opacity: 0.55;
  overflow-x: auto;
  ul {
    position: absolute;
    left: calc(50%-35px);
    top: 15px;
    bottom: 10px;
    width: 2000%;
    overflow-x: hidden;
  }
  li > img {
    width: 90px;
    height: 150px;
    margin: 0 10px;
    float: left;
    .auto-img {
      display: block;
      width: 100%;
    }
  }
}
li.active > img {
  width: 90px;
  height: 150px;
}
li.active > img {
  transform: scale(1.05);
  box-shadow: 0px 0px 10px 10px #fff;
  transition: box-shadow 0.5s, transform 0.5s, inset;
}
.movies-name {
  margin-top: 180px;
  padding: 5px 0px;
  .top {
    width: 200px;
    height: 24px;
    line-height: 24px;
    font-size: 17px;
    margin: 0 auto;
    .top-left {
      margin-left: 30px;
      float: left;
      color: #333;
    }
    .top-right {
      margin-left: 5px;
      float: left;
      color:#FFB400;
    }
  }
  .bottom {
    width: 250px;
    height: 18.5px;
    font-size: 13px;
    text-align: center;
    margin-left: 90px;
    &>div{
      margin: 5px 5px;
      float: left;
    }
  }
}
.date{
  padding:10px 20px;
  div{
      float: left;
      height:40px;
      line-height: 40px;
  }
  div:nth-child(1){
      margin-right: 20px;
      border-bottom:1px solid  red;
      color:red;
  }
}
</style> 