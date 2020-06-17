<template>
    <div class="movie-hot">
     <Detail :videos="this.vv" v-if="isShow" :movies="movies" @d-down ="Ddown"/>
        <ul class="movies-list">
            <li class="movie-list" v-for="v in movies" :key="v.id"  @click="goTo(v)" >
                <div class="movie-pho" @click="aaa"><img class="auto-img" :src="v.images.small" alt=""></div>
                <div class="movie-text">
                    <div class="movie-title">{{v.title}}</div>
                    <div class="movie-audience">{{v.rating.average == 0 ? '暂无评分' : '观众评'}}
                        <span class="movie-score">{{v.rating.average == 0 ? '' : v.rating.average}}</span></div>
                    <div class="movie-star">主演：<span>{{getNameAll(v.casts)}}</span></div>
                    <div class="movie-star">类型：{{getType(v.genres)}}</div>
                </div>
                <div class="movie-buy" :class="[v.rating.average == 0 ? 'movie-blue' : '']">{{v.rating.average == 0 ? '预售' : '购票'}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
import Detail from '../components/Detail' 
export default {
    data(){
        return{
             vv:[],
            isShow:false
        }
    },
    props:{
         movies: {
            type:Array,
            required:true
        }
    },
    methods: {
        aaa(){
            console.log('movie', this.movies)
            console.log('movie', this.movies[1].images.small)
        },
        goTo(vv){
            this.vv=vv
            console.log("aaaa",this.vv)
            // this.$router.push('/detail');
            // this.$router.push({path:'/detail',query:{movies:this.movies}});
            this.isShow = !this.isShow
        },
        Ddown(){
            this.isShow = false
        },
        getNameAll(names) {
            let nameAll = ''
            for(let i = 0; i < names.length; i++){
                if(i != names.length - 1){
                    nameAll += names[i].name + '/'
                } else {
                     nameAll += names[i].name
                }
            }
            return nameAll
        },
        getType(types) {
            let typeAll = ''
            for(let i = 0; i < types.length; i++){
                if(i != types.length - 1){
                    
                    typeAll += types[i] + '/'
                } else {
                    
                     typeAll += types[i]
                }
            }
            return typeAll
        }
    },
    components:{Detail}
}
</script>

<style lang="scss" scoped>
.movie-hot{
    height: calc(100% - 94px);
    overflow-y: auto;
}
.movie-list{
    padding: 10px 15px;
    overflow: hidden;
    position: relative;
    border-bottom: 1px solid whitesmoke;
    .movie-buy{
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
        background-color: #e54847;
    }
    .movie-blue{
        background-color: #3c9fe6;
    }
    .movie-pho{
        width:64px;
        height: 90px;
        float: left;
        margin-right: 10px;
        .auto-img{
            display: block;
            width: 100%;
        }
    }
    .movie-text{
        float: left;
        width: 200px;
        padding: 12px 14px 12px 0;

        .movie-title{
            font-size: 17px;
            margin-bottom: 7px;
            font-weight: 700;
            color: #333;
        }

        .movie-audience{
            font-size: 13px;
            color: #666;
        }

        .movie-score{
            margin-left: 5px;
            font-size: 15px;
            font-weight: 700;
            color: #faaf00;
        }

        .movie-star{
            width: 100%;
            margin-top: 3px;
            font-size: 13px;
            color: #666;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
}

</style>