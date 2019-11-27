<template>
  <div id="danmu"></div>
</template>
<script>
import '@/assets/danmaku/src/js/main.js'
$("#danmu").danmuPlayer({

  src:"http://localhost:8443/video/100024/37750c3691e2448ba4d9012c66c7c950.mp4",       //视频源

  width:800,			//视频宽度

  height:445			//视频高度

});
export default {
  
}
</script>