<template>
  <div class="container-video">
    <div id='container'></div>
    <video class="video" controls>
      <source src="./assets/video1.mp4">
    </video>
  </div>

  <button @click="stop">Stop</button>
  <button @click="start">Start</button>
</template>


<script setup>
import easyDanmaku from 'easy-danmaku-js';

import { onMounted , ref } from "vue";

let Danmaku = ref ( null )
onMounted ( () => {
  Danmaku.value = new easyDanmaku ( {
    el : '#container' ,                        //弹幕挂载节点
    colourful : true ,                         //彩色弹幕
    line : 10 ,                                //弹幕行数
    wrapperStyle : 'danmaku-wrapper' ,         //默认弹幕样式
    speed : 5 ,                                //弹幕播放速度
    runtime : 3 ,                              //播放一次的时常
    loop : true ,                              //开启循环播放
    hover : true ,                             //鼠标移入悬停
    /*  onComplete : () => {                       //播放结束
        console.log ( '我暂时播放结束了' );
      } , */                                     //hover时 参数为该悬停元素
    onHover : ( dom ) => {
      console.log ( dom );
    }
  } )
  const data = [ {
    avatar : 'https://p3-passport.byteacctimg.com/img/user-avatar/36565e288264bb516802623caaed8d53~200x200.awebp' ,
    content : '屈园园1'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园2'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园3'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园4'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园5'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园6'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园7'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园8'
  } , {
    avatar : 'https://p26-passport.byteacctimg.com/img/user-avatar/6028b9096ef42ddb57e83681b08cc431~80x80.awebp' ,
    content : '屈园园9'
  } , ]
  Danmaku.value.batchSend ( data , true , 'container-style' )
  // 弹幕内容, 弹幕样式, 回调函数
  /* Danmaku.send('弹幕内容','danmaku-wrapper',(e)=>{
     alert('end!');
     console.log(e);
   })*/


// ~~~
} )
const stop = () => {
  console.log ( "@@@" )
  Danmaku.value.pause ()
  console.log ( "弹幕暂停" )
}
const start = () => {
  Danmaku.value.play ()
  console.log ( "弹幕播放" )
}


</script>
<style>
.container-video {
  display: flex;
  margin: 0 auto;
  position: relative;
}

#container {
  position: absolute !important;
  top: 0;
  left: 0;
  width: 900px;
  height: 515px;
  border: 1px solid black;
}

.video {
  width: 900px;
  height: 515px;
}

#container .default-style {
  position: relative;
  display: flex;
  justify-content: flex-end;
}

#container .default-style p {
  height: 25px;
  vertical-align: center;
}

#container .default-style img {
  position: absolute;
  top: 65%;
  left: 40%;
  transform: translate(-50%, -50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  vertical-align: center;

}

.danmaku-wrapper {
  background: greenyellow;
  border-radius: 8px;
}
</style>
