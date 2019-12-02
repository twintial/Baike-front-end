<template>
    <div>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- single post description -->
                <section class="profile-videos">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="heading">
                                <i class="fa fa-heart"></i>
                                <h4>His Videos</h4>
                            </div>
                             <div class="description">
                            <div v-for="(video, index) in videos" :key="index" class="profile-video">
                                <div class="profile-video">
                                    <div class="media-object stack-for-small">
                                        <div class="media-object-section media-img-content">
                                            <div class="video-img">
                                                <img :src="'http://localhost:8443/img/videoCover/'+video.interVideoID+'/'+video.icon" alt="video thumbnail">
                                            </div>
                                        </div>
                                        <div class="media-object-section media-video-content" resize>
                                            <div class="video-content">
                                                <h5><a @click="goToVideoPage(video.interVideoID)">{{video.videoName}}</a></h5>
                                                <p>{{video.introduction}}</p>
                                            </div>
                                            <div class="video-detail clearfix">
                                          
                                                <div class="video-stats">
                                                    <span ><i class="fa fa-clock-o"></i>{{video.uploadTime}}</span>
                                                    <span><i class="fa fa-eye"></i>{{video.playVolume}}</span>
                                                </div>
                                                <div class="video-btns">
                                                <button class="hollow button primary resize-button" @click="favOvedio(video.interVideoID)"><i class="fa fa-heart-o"></i>favorite</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="!videos.length" class="text-style">
                               He hasn't import a video
                            </div>
                            <div v-if="currentPage < totlePage" class="show-more-inner text-center">
                              <button class="show-more-btn" @click="showMore">show more</button>
                            </div>
                            <div v-else v-show="videos.length" class="text-style">
                              -end-
                            </div>
                            </div>
                        </div>
                    </div>
                </section><!-- End single post description -->
            </div><!-- end left side content area -->
    </div>
</template>
<style scoped>

.text-style {
  text-align: center;
  margin-bottom: 20px;
}
/* .myspan{
  display:inline-block;
  width:120px;

}
.mysub{
   padding-bottom: 50px;
} */
.resize {
  width: 100%;
}
.resize-button {
  padding-top: 8px;
  padding-bottom: 8px;
  margin-left: 143px;
  width: 115px;
}

</style>
<script>
Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);  
}
export default {
    name: 'Hisvideo',
    data() {
      return {
        currentPage: 1,
        totlePage: 0,
        temp: [],
        videos: []
      }
    },
    mounted() {
      this.requestForVideos(this.currentPage)
    },
    // 每次监听到temp的变化就把temp加入videos
    watch: {
      temp: function(val){
        this.videos.extend(val)
        val = []
      }
    },
    methods: {
      requestForVideos(pageNum){
        this.$axios
        .get('/aboutHis/hisVideo/'+  this.$route.query.oID +'/' + pageNum)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.temp = successResponse.data.data
            this.totlePage = successResponse.data.msg           
            this.$dlg.toast("success", {messageType: 'success', closeTime: 5})
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {})
      },
      showMore(){
        this.requestForVideos( ++this.currentPage)
      },
      favOvedio(interVideoID){
        this.$axios
        .get('/aboutHis/FavHisVideo/'+ interVideoID)
        .then(successResponse => {
          if (successResponse.data.code === 200) {        
            this.$dlg.toast("success", {messageType: 'success', closeTime: 5})
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {})
      },
      goToVideoPage(videoID) {
        this.$router.push({path:'/video',query:{vID: videoID}});
      }
    }
}
</script>