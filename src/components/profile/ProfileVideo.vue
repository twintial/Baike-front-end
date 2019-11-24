<template>
    <div>
        <profile-header></profile-header>
        <div class="row">
            <left-side-bar></left-side-bar>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- single post description -->
                <section class="profile-videos">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="heading">
                                <i class="fa fa-video-camera"></i>
                                <h4>我的视频</h4>
                                <span>
                                    <input type="radio" id="publish" value="publish" v-model="picked"><label for="publish">已发布</label>
                                    <input type="radio" id="editable" value="editable" v-model="picked"><label for="editable">待编辑</label>
                                </span>
                            </div>
                            <div v-for="(video, index) in videos" :key="index" class="profile-video">
                                <div class="media-object stack-for-small">
                                    <div class="media-object-section media-img-content">
                                        <div class="video-img">
                                            <img :src="'http://localhost:8443/'+video.icon" alt="video thumbnail">
                                        </div>
                                    </div>
                                    <div class="media-object-section media-video-content resize">
                                        <div class="video-content">
                                            <h5><a href="#">{{video.videoName}}</a></h5>
                                            <p>{{video.introduction}}</p>
                                        </div>
                                        <div class="video-detail clearfix">
                                            <div class="video-stats">
                                                <span>
                                                  <i class="fa fa-check-square-o" v-if="picked==='publish'" aria-hidden="true">已发布</i>
                                                  <i class="fa fa-pencil-square-o" v-else aria-hidden="true">待编辑</i>
                                                </span>
                                                <span><i class="fa fa-clock-o"></i>{{video.uploadTime}}</span>
                                                <span><i class="fa fa-eye"></i>{{video.playVolume}}</span>
                                            </div>
                                            <div class="video-btns">
                                                <a class="video-btn" href="#"><i class="fa fa-pencil-square-o"></i>edit</a>
                                                <a class="video-btn" href="#"><i class="fa fa-trash"></i>delete</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="!videos.length" style="text-align:center">
                              空空如也
                            </div>
                            <div class="show-more-inner text-center">
                                <a href="#" class="show-more-btn">show more</a>
                            </div>
                        </div>
                    </div>
                </section><!-- End single post description -->
            </div><!-- end left side content area -->
        </div>
    </div>
</template>
<style scoped>
input[type=radio] {
    display: initial;
}
.video-stats {
  color: black;
}
.video-stats .fa-pencil-square-o {
  color: red !important;
}
.resize {
  width: 100%;
}
</style>
<script>
import profileHeader from '@/components/profile/common/ProfileHeader.vue'
import leftSideBar from '@/components/profile/common/LeftSideBar.vue'
export default {
    name: 'aboutMe',
    components: {profileHeader, leftSideBar},
    data() {
      return {
        picked: 'publish',
        videos: []
      }
    },
    filters: {
      introductionFormat: function(val){
        if (val.length > 2){
          val = val.substr(0, 2) + "<br/>" + val.substr(2)
          return val;
        }
        return val;
      }
    },
    watch: {
      picked: function(val){
        this.videos = []
        this.requestForVideos(val, 1)
      }
    },
    methods: {
      requestForVideos(state, pageNum){
        this.$axios
        .get('/video/' + state + '/' + pageNum)
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.videos = successResponse.data.data
            this.$dlg.toast(successResponse.data.data, {messageType: 'success', closeTime: 5})
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.message, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {})
        }
    }
}
</script>