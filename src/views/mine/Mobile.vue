<template>
    <div class="mobile">
        <div class="mobile-top">
            <div class="text-pass">
            <div class="text">
                <input type="text" name="" id="" placeholder="请输入手机号"><button>获取验证码</button>
            </div>
            <div class="password">
                <input type="text" name="" id="" placeholder="请输入短信验证码">
            </div>
            </div>
            <div class="btn">
                <button>登录</button>
            </div>
        </div>
        <div class="bottom">
           <div class="float">
               <li><a href="#">立即注册</a></li>
               <li><a href="#">找回密码</a></li>
           </div>
           <div class="tel">
               <span>
                   © 猫眼电影 客服电话：
                   <a href="#">400-670-5335</a>
               </span>
           </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 .mobile{
    margin: 0;
    padding: 0;
    list-style: none;
    .text-pass{
       padding: 0 10px 0 10px;
       height:70px;
       background-color: #fff;
       input{
           font-size: 16px;
           border: none;
           display: block;
           outline: none;
           width:100%;
           height: 45px;
       }
       &>div{
          border-bottom: 1px solid #ddd;
       }
    } 
     .mobile-top{
         position: relative;
         button{
           font-size: 15px;
           border: none;
           outline: none;
           top:100px;
           left:9px;
           right: 0;
           width:95%;
           height: 30px;
           position:absolute;
           display: block;
           background-color:#f03d37;
           border-radius: 4px;
           color: #fff;
       }
     }
    }  
    .bottom{
        position: relative;
        margin-top:70px;
        padding: 0 10px 0 10px;
        .float a{
            text-decoration: none;
            color: #FE8C00;
            font-size: 13px;
        }
        .tel a{
             text-decoration: none;
            color: #f03d37;
            font-size: 13px;
        }
        div>li:nth-child(1){
            float: left;
            
        }
        div>li:nth-child(2){
            float: right;
        }
        .tel{
            position: absolute;
            font-size: 13px;
            top:20px;
            left: 65px;
            line-height: 31px;
            height: 31px;
            text-align: center;
        }

    }
</style>