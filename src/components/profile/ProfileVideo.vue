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
                                            <img :src="'http://localhost:8443/img/videoCover/'+video.interVideoID+'/'+video.icon" alt="video thumbnail">
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
                                                <button v-show="picked === 'editable'" class="hollow button primary resize-button" @click="goToEdit(video.interVideoID)"><i class="fa fa-pencil-square-o"></i>edit</button>
                                                <button class="hollow button alert resize-button" @click="comfirmToDelete(video.interVideoID)"><i class="fa fa-trash"></i>delete</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div v-show="!videos.length" style="text-align:center">
                              空空如也
                            </div>
                            <div class="show-more-inner text-center">
                                <button class="show-more-btn" @click="showMore">show more</button>
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
.resize-button {
  padding-top: 8px;
  padding-bottom: 8px;
}
</style>
<script>
import profileHeader from '@/components/profile/common/ProfileHeader.vue'
import leftSideBar from '@/components/profile/common/LeftSideBar.vue'
// 数组合并
Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);  
}
export default {
    name: 'aboutMe',
    components: {profileHeader, leftSideBar},
    data() {
      return {
        picked: 'publish',
        currentPage: 1,
        temp: [],
        videos: []
      }
    },
    filters: {
      // 简介格式规范，暂时不用
      introductionFormat: function(val){
        if (val.length > 2){
          val = val.substr(0, 2) + "<br/>" + val.substr(2)
          return val;
        }
        return val;
      }
    },
    // 每次监听到temp的变化就把temp加入videos
    // 若改变picked，则需要初始化
    watch: {
      picked: function(val){
        this.videos = []
        this.currentPage = 1
        this.requestForVideos(val, 1)
      },
      temp: function(val){
        this.videos.extend(val)
        val = []
      }
    },
    methods: {
      requestForVideos(state, pageNum){
        this.$axios
        .get('/video/' + state + '/' + pageNum)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.temp = successResponse.data.data
            this.$dlg.toast("success", {messageType: 'success', closeTime: 5})
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.message, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {})
      },
      showMore(){
        this.requestForVideos(this.picked, ++this.currentPage)
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
        .delete('/video/' + interVideoID)
        .then(successResp => {
          if (successResp.data.code === 200) {
            // 及时删除
            this.reomveFromVideos(interVideoID)
            this.$dlg.toast('删除成功', {messageType: 'success', closeTime: 5})
          }
          if (successResp.data.code === 400) {
            this.$dlg.toast(successResp.data.message, {messageType: 'error', closeTime: 5})
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
      goToEdit(interVideoID){
        this.$router.push({name: 'editPage', query: {
          interVideoID: interVideoID
        }})
      }
    }
}
</script>