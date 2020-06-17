<template>
  <div class="film">
    <div class="film-cinema">
      <div class="film-nav">影院</div>
      <div class="film-tab">
        <div class="city-entry">
          <span>广州</span>
          <i class="city-tubiao"></i>
        </div>
        <div class="cinema">
          <img src="../assets/imges/search.png" alt />
          <span>搜影院</span>
        </div>
      </div>
      <div class="film-three">
        <div class="film-item">
          全城
          <span class="film-name"></span>
        </div>
        <div class="film-item">
          品牌
          <span class="film-name"></span>
        </div>
        <div class="film-item">
          特色
          <span class="film-name"></span>
        </div>
      </div>
    </div>

    <div class="film-content">
      <ul class="film-content-ul">
        <li class="film-content-list" v-for="i in cinema" :key="i.id"  @click="showsList(i)">
          <div class="first">
            <span>{{i.store}}</span>
            <div class="price">
            <span>{{i.consumption}}</span>
            <span>元起</span>
            </div>
          </div>
          <div class="two">
            <span>{{i.address}}</span>
            <span>{{i.distance}}</span>
          </div>
          <div class="three">
            <div>改签</div>
            <div>小吃</div>
            <div>折扣卡</div>
            <div>杜比全景声厅</div>
            <div>杜比全</div>
          </div>
          <div class="four">
            <img src="../assets/imges/ka.png" alt />
            <div>{{i.card}}</div>
          </div>
        </li>
      </ul>
    </div>
    <FilmShows   :sdf="this.ssj" v-if="isShows" :cinema="cinema" />
  </div>
</template>

<script>
import FilmShows from '../components/FilmShows'
    export default {
        data: () => ({
            publicPath: process.env.BASE_URL,
            cinema:{},
            isShows:false,
            ssj:[]
        }),
        props:["cinema"]
        ,
        // props:{
        //    cinema:{
        //       type:Array,
        //       required:true
        //    }
        // },
        methods: {
        //   fForword(){
        //       this.isShows=false
        //   },
          showsList(ss){
            this.ssj=ss
            this.isShows = !this.isShows;
            this.$router.push({path:'/filmShows',query:{cinema:ss}});
          },
            getCinemaData() {
                this.$http('/ele/cinema').then(res => {
                  console.log(res);
                    let {data} = res.data   
                    this.cinema = data
                    console.log(this.cinema)
                })
            }
        },
        mounted() {
          console.log("ssj==>",this.ssj)
            this.getCinemaData()
        },
        components:{
          FilmShows
        }
    };
</script>

<style lang="scss" scoped>
.film-cinema {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  .film-nav {
    text-align: center;
    height: 50px;
    line-height: 50px;
    background-color: #e54847;
    color: #fff;
    font-size: 18px;
  }
  .film-tab {
    display: flex;
    height: 44px;
    background-color: #f5f5f5;
    color: #777777;
    .cinema {
      position: relative;
      margin-top: 8px;
      margin-left: 18px;
      width: 320px;
      height: 29px;
      color: #b2b2b2;
      border-radius: 4px;
      background-color: #ffffff;
    }
    .cinema img {
      position: absolute;
      top: 10px;
      left: 120px;
      display: block;
      width: 14px;
      height: 14px;
    }
    .cinema span {
      position: absolute;
      top: 8px;
      left: 140px;
      display: block;
      width: 50px;
      height: 17px;
    }
    .city-entry {
      position: relative;
      padding-left: 15px;
      width: 62px;
      height: 44px;
      line-height: 44px;
      color: #666666;
      .city-tubiao {
        position: absolute;
        top: 15px;
        width: 0;
        height: 0;
        border: 4px solid #b0b0b0;
        border-left-color: transparent;
        border-right-color: transparent;
        border-bottom-color: transparent;
        margin-left: 4px;
        margin-top: 5px;
      }
    }
  }
}
.film-three {
  width: 100%;
  display: flex;
  background-color: #fff;
  .film-item {
    text-align: center;
    font-size: 13px;
    position: relative;
    height: 40px;
    line-height: 40px;
    background-color: #fff;
    flex: 1;
    border-right: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
    .film-name {
      display: inline-block;
      line-height: 40px;
      border: 4px solid transparent;
      border-top-color: #b0b0b0;
      
    }
  }
}
.film-content {
   position: relative;
   top: 134px;
   height: 548px;
   overflow-y: auto;
 
  .film-content-ul {
    overflow-y: hidden;
    .film-content-list {
      padding: 20px 15px;
      height: 124px;
      border-bottom: 1px solid #ddd;
    }
  }
}
.first {
position: relative;
height: 27px;
&>div{
  position: absolute;
  right: 100px;
  top: 0;
}
span:nth-child(1){
  font-size: 16px;
  color: #000000;
}
.price{
span:nth-child(1){
  font-size: 18px;
  color: #f03d37;
}
span:nth-child(2){
  font-size: 1px;
  color: #f03d37;
}
}
}
.two {
height: 19px;
font-size: 14px;
position: relative;
color: #666666;
&>span:nth-child(1){
  float: left;
  display: block;
  width:301px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
&>span:nth-child(2){
position: absolute;
}
}
.three {
height: 17px;
font-size: 12px;
 &>div{
   margin:2px 2px;
   float: left;
 }
 &>div:nth-child(1){
   margin-left: 0px;
   width: 32px;
   border: 1px solid #589daf;
 }
  &>div:nth-child(2){
    width: 32px;
   border: 1px solid #589daf;
 }
  &>div:nth-child(3){
    width: 44px;
   border: 1px solid #ff9900;
 }
  &>div:nth-child(4){
    width:80px;
   border: 1px solid #ff9900;
 }
  &>div:nth-child(5){
    width: 44px;
   border: 1px solid #589daf;
 }
}
.four {
margin: 5px 0px;
position: relative;
height: 21px;
font-size:12px; 
 &>img{
   position: absolute;
   top: 2px;
   left: 0;
   width: 15px;
   height: 14px;
 }
 &>div{
   color: #999999;
    top:2px;
    position: absolute;
    left: 20px;
    vertical-align: top;
 }
}
// .flim-content {
//   height: calc(100% - 184px);
//   overflow-y: auto;
//   .film-content-ul {
//     overflow: hidden;
//   }
// }
// .film-nav {
//   position: fixed;
//   left: 0;
//   top: 0;
//   right: 0;
//   height: 50px;
//   text-align: center;
//   line-height: 50px;
//   font-size: 18px;
//   background-color: #e54847;
//   color: #fff;
// }
// .film-tab {
//   width: 100%;
//   position: fixed;
//   height: 44px;
//   margin-top: 50px;
//   background-color: #f5f5f5;
//   display: flex;
//   .city-entry {
//     line-height: 44px;
//     padding-left: 15px;
//     font-size: 15px;
//     color: #666;
//     .city-tubiao {
//       width: 0;
//       height: 0;
//       border: 4px solid #b0b0b0;
//       border-left-color: transparent;
//       border-right-color: transparent;
//       border-bottom-color: transparent;
//       display: inline-block;
//       margin-left: 4px;
//       margin-top: 5px;
//     }
//   }
// }
// // .dd {
// //   position: fixed;
// //   width: 100%;
// // }
// .film-three {
//   margin-top: 94px;
//   color: #777777;
//   display: flex;
//   justify-content: space-between;
//   .film-item {
//     flex: 1;
//     text-align: center;
//     line-height: 40px;
//     font-size: 13px;
//     white-space: nowrap;
//     border-right: 1px solid #e6e6e6;
//     border-bottom: 1px solid #e6e6e6;
//     &:nth-of-type(3) {
//       border-right: 1px solid white;
//     }
//     .film-name {
//       display: inline-block;
//       line-height: 40px;
//       border: 4px solid transparent;
//       border-top-color: #b0b0b0;
//     }
//   }
// }
// .cinema {
//   position: relative;
//   text-align: center;
//   width: 280px;
//   height: 29px;
//   background-color: #fff;
//   align-items: center;
//   font-size: 13px;
//   color: #b2b2b2;
//   margin-left: 18px;
//   margin-top: 9px;
//   border: 1px solid #e6e6e6 {
//     radius: 5px;
//     margin-right: 15px;
//   }

//   img {
//     position: absolute;
//     top: 6px;
//     left: 120px;
//     border: 0;
//     width: 14px;
//     height: 14px;
//     margin-left: 3px;
//     margin-right: 4px;
//     display: inline-block;
//     vertical-align: top;
//   }
//   span {
//     position: absolute;
//     left: 140px;
//     top: 6px;
//     font-size: 13px;
//     color: #b2b2b2;
//   }
// }
</style>