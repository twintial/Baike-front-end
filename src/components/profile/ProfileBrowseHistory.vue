<template>
    <div>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- single post description -->
                <section class="profile-videos">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="heading">
                                <i class="fa fa-history"></i>
                                <h4>Browse History</h4>
                            </div>
                             <div class="description">
                            <div v-for="(video, index) in videos" :key="index" class="profile-video">
                                <div class="profile-video">
                                    <div class="media-object stack-for-small">
                                        <div class="media-object-section media-img-content">
                                            <div class="video-img">
                                                <img src="http://placehold.it/170x150" alt="video thumbnail">
                                            </div>
                                        </div>
                                        <div class="media-object-section media-video-content resize">
                                            <div class="video-content">
                                                <h5><a href="#">{{video.videoName}}</a></h5>
                                                <p>{{video.introduction}}</p>
                                            </div>
                                            <div class="video-detail clearfix">
                                                <div class="video-stats">
                                                    <span><i class="fa fa-clock-o"></i>{{video.watchDate}}</span>
                                                    <span><i class="fa fa-eye"></i>{{video.playVolume}}</span>
                                                </div>
                                                <div class="video-btns">
                                                    <button class="hollow button alert resize-button" @click="comfirmToDelete(video.interVideoID)"><i class="fa fa-trash-o"></i>Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="!videos.length" class="text-style">
                               You haven't watched any videos
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
.resize {
  width: 100%;
}
.resize-button {
  padding-top: 8px;
  padding-bottom: 8px;
  margin-left: 87px;
  width: 145px;
}


</style>
<script>
Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);  
}
export default {
    name: 'BrowseHistory',
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
        .get('/aboutMe/browseHistory/' + pageNum)
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
       // 从页面上移除
      reomveFromVideos(intervideoID){
        var index = -1;
        for (var i in this.videos){
          if (this.videos[i].interVideoID === intervideoID){
            index = i;
            break;
          }
        }
        this.videos.splice(index, 1)
      },
      // 从后端删除
      deleteVideo(interVideoID){
        this.$axios
        .delete('/aboutMe/browseHistory/' + interVideoID)
        .then(successResp => {
          if (successResp.data.code === 200) {
            // 及时删除
            this.reomveFromVideos(interVideoID)
            this.$emit('func')
            this.$dlg.toast('删除成功', {messageType: 'success', closeTime: 5})
          }
          if (successResp.data.code === 400) {
            this.$dlg.toast(successResp.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
      },
      // 弹出确认框
      comfirmToDelete(interVideoID){
        var that = this
        this.$dlg.alert('确定要删除吗？', function(){
          that.deleteVideo(interVideoID)
        }, {
          messageType: 'confirm'
        })
      },
    }
}
</script>