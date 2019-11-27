<template>
<div>
  <d-player :options="options"
            ref="player">>
  </d-player>
  <button @click="test">按一下</button>
</div>
</template>
<style>
.dplayer-bezel {
  display: none;
}
</style>
<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'


var t = function(){

}
export default {
  components: {
    'd-player': VueDPlayer
  },
  data (){
    return {
      options: {
        video: {
          url: 'http://localhost:8443/video/100024/37750c3691e2448ba4d9012c66c7c950.mp4',
          pic: 'http://static.smartisanos.cn/pr/img/video/video_03_cc87ce5bdb.jpg'
        },
        autoplay: false,
        danmaku: {
            id: '37750c3691e2448ba4d9012c66c7c950',
            api: 'http://localhost:8443/api/danmaku/',
        }
      },
      player: null,
    }
  },
  mounted() {
    this.player = this.$refs.player.dp
  },
  methods:{
    test(){
      console.log(this.player.video.currentTime);
                      const danmaku = {
                      text: 'Get a danamku via WebSocket',
                      color: '#fff',
                      type: 'right',
                  };
      this.player.danmaku.draw(danmaku);
    }
  }
}
</script>