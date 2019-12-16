<template>
    <div class="row">
        <!-- left side content area -->
        <div class="large-8 columns">
            <!--single inner video-->
            <section class="inner-video">
                <div class="row secBg">
                    <div class="large-12 columns inner-flex-video">
                      <div class="video-div" style="margin-bottom:16px">
                        <d-player :options="options"
                                  ref="player">
                        </d-player>
                      </div>
                    </div>
                </div>
            </section>
            <!-- single post stats -->
            <section class="SinglePostStats">
                <!-- newest video -->
                <div class="row secBg">
                    <div class="large-12 columns">
                        <div class="media-object stack-for-small" style="padding-bottom:0px">
                            <div class="media-object-section">
                                <div class="author-img-sec">
                                    <div class="thumbnail author-single-post">
                                        <a @click="goToDetails(uploadUserInfo.uid)"><img :src="uploadUserInfo.iconURL?'http://localhost:8443/img/userIcon/'+uploadUserInfo.iconURL:defaultIcon" alt="post"></a>
                                    </div>
                                    <p class="text-center" style="margin-top:2px"><a @click="goToDetails(uploadUserInfo.uid)">{{uploadUserInfo.nickName}}</a></p>
                                </div>
                            </div>
                            <div class="media-object-section object-second">
                                <div class="author-des clearfix">
                                    <div class="post-title">
                                        <h4>{{interVideoInfo.videoName}}</h4>
                                        <p style="margin-top:30px">
                                            <span><i class="fa fa-clock-o"></i>{{interVideoInfo.uploadTime | timestampToDate}}</span>
                                            <span><i class="fa fa-eye"></i>{{interVideoInfo.playVolume}}</span>
                                            <span><i class="fa fa-heart-o"></i>{{interVideoInfo.collectPoint}}</span>
                                            <span><i class="fa fa-thumbs-o-up"></i>{{interVideoInfo.praisePoint}}</span>
                                            <span><i class="fa fa-commenting"></i>{{comments.length}}</span>
                                        </p>
                                    </div>
                                    <div class="fa-div-position">
                                        <i v-if="isCol" @click="deleteFromCollection" class="fa fa-heart fa-2x fa-style"></i>
                                        <i v-else  @click="insertIntoCollection" class="fa fa-heart-o fa-2x fa-style"></i>
                                        <i v-if="isThumbUp" class="fa fa-thumbs-up fa-2x fa-style"></i>
                                        <i v-else class="fa fa-thumbs-o-up fa-2x fa-style"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!-- End single post stats -->

            <!-- single post description -->
            <section class="singlePostDescription">
                <div class="row secBg">
                    <div class="large-12 columns">
                        <div class="heading">
                            <h5>Description</h5>
                        </div>
                        <div class="description showmore_one">
                          <p>{{interVideoInfo.introduction}}</p>
                        </div>
                    </div>
                </div>
            </section><!-- End single post description -->

            <!-- related Posts -->
            <section class="content content-with-sidebar related">
                <div class="row secBg">
                    <div class="large-12 columns">
                        <div class="main-heading borderBottom">
                            <div class="row padding-14">
                                <div class="medium-12 small-12 columns">
                                    <div class="head-title">
                                        <i class="fa fa-film"></i>
                                        <h4>Related Videos</h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row list-group">
                            <div v-for="(video, index) in relatedVideos" :key="index" class="item large-4 columns end group-item-grid-default">
                                <div class="post thumb-border">
                                    <div class="post-thumb">
                                        <img :src="'http://localhost:8443/img/videoCover/'+video.interVideoID+'/'+video.icon" alt="landing">
                                        <a @click="goToVideoPage(video.interVideoID)" class="hover-posts">
                                            <span><i class="fa fa-play"></i>Watch Video</span>
                                        </a>
                                        <div class="video-stats clearfix">
                                            <div class="thumb-stats pull-left">
                                                <i class="fa fa-heart"></i>
                                                <span>{{ video.collectPoint }}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="post-des">
                                        <h6><a @click="goToVideoPage(video.interVideoID)">{{ video.videoName }}</a></h6>
                                        <div class="post-stats clearfix">
                                            <p class="pull-left">
                                                <i class="fa fa-user"></i>
                                                <span><a @click="goToDetails(video.uid)">{{video.nickName}}</a></span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-clock-o"></i>
                                                <span>{{ video.uploadTime | timestampToDate}}</span>
                                            </p>
                                            <p class="pull-left">
                                                <i class="fa fa-eye"></i>
                                                <span>{{ video.playVolume }}</span>
                                            </p>
                                        </div>
                                        <div class="post-summary">
                                            <p>{{ video.introduction }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section><!--end related posts-->
            <!-- Comments -->
            <section class="content comments">
                <div class="row secBg">
                    <div class="large-12 columns">
                        <div class="main-heading borderBottom">
                            <div class="row padding-14">
                                <div class="medium-12 small-12 columns">
                                    <div class="head-title">
                                        <i class="fa fa-comments"></i>
                                        <h4>Comments <span>({{comments.length}})</span></h4>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="comment-box thumb-border">
                            <div class="media-object stack-for-small">
                                <div class="media-object-section comment-img text-center">
                                    <div class="comment-box-img">
                                        <img :src="loginUserInfo.uID ? 'http://localhost:8443/img/userIcon/'+loginUserInfo.iconURL : defaultIcon" alt="comment">
                                    </div>
                                    <h6>{{loginUserInfo.nickName}}</h6>
                                </div>
                                <div class="media-object-section comment-textarea">
                                  <textarea v-model="commentContent" name="commentText" placeholder="Add a comment here.."></textarea>
                                  <input @click="sendComment" id="comment-input" type="submit" value="send">
                                </div>
                            </div>
                        </div>

                        <!-- main comment -->
                        <div class="main-comment showmore_one">
                            <div v-for="(comment, index) in comments" :key="index" class="media-object stack-for-small comment-buttom-line">
                                <div class="media-object-section comment-img text-center">
                                    <div class="comment-box-img">
                                        <img :src="'http://localhost:8443/img/userIcon/'+comment.icon" alt="comment">
                                    </div>
                                </div>
                                <div class="media-object-section comment-desc">
                                    <div class="comment-title">
                                        <span class="name"><a href="#">{{comment.nickName}}</a> Said:</span>
                                        <span class="time float-right"><i class="fa fa-clock-o"></i>{{comment.sendTime | timestampToDate}}</span>
                                    </div>
                                    <div class="comment-text">
                                        <p>{{comment.content}}</p>
                                    </div>
                                </div>
                            </div>
                            <div v-show="!comments.length" style="text-align:center">
                              <p>There is on more comments</p>
                            </div>
                        </div><!-- End main comment -->

                    </div>
                </div>
            </section><!-- End Comments -->
        </div><!-- end left side content area -->
        <!-- sidebar -->
        <div class="large-4 columns">
            <aside class="secBg sidebar">
                <div class="row">

                    <!-- most view Widget -->
                    <div class="large-12 medium-7 medium-centered columns">
                        <div class="widgetBox">
                            <div class="widgetTitle">
                                <h5>Most View Videos</h5>
                            </div>
                            <div class="widgetContent">
                                <div v-for="(video, index) in mostViewVideos" :key="index" class="video-box thumb-border">
                                    <div class="video-img-thumb">
                                        <img :src="'http://localhost:8443/img/videoCover/'+video.interVideoID+'/'+video.icon" alt="most viewed videos">
                                        <a @click="goToVideoPage(video.interVideoID)" class="hover-posts">
                                            <span><i class="fa fa-play"></i>Watch Video</span>
                                        </a>
                                    </div>
                                    <div class="video-box-content">
                                        <h6><a @click="goToVideoPage(video.interVideoID)">{{video.videoName}} </a></h6>
                                        <p>
                                            <span><i class="fa fa-user"></i><a @click="goToDetails(video.uid)">{{video.nickName}}</a></span>
                                            <span><i class="fa fa-clock-o"></i>{{ video.uploadTime | timestampToDate }}</span>
                                            <span><i class="fa fa-eye"></i>{{ video.playVolume }}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div><!-- end most view Widget -->
                </div>
            </aside>
        </div><!-- end sidebar -->
    </div>
</template>
<style>
.mask-show {
  opacity: .6; 
  background: black;
  display: initial;
}

.disabled {
  cursor: no-drop !important; 
}
.choice-container {
  position: absolute;
  left: 31%;
  z-index: 3;
  display: none;
}
.choice {
  padding-top: 15px;
  margin-bottom: 10px;
  width: 250px;
  height: 10px;
  z-index: 3;
  display: none;
}
.end-button {
  position: absolute;
  top: 40%;
  left: 39%;
  z-index: 3;
  display: none;
}

.fa-div-position {
  text-align: right;
  margin: 38px 10px 0px 0px;
}
.fa-style {
  cursor: pointer;
  margin-left: 30px;
  margin-right: 10px;
}
.comment-buttom-line {
  padding-bottom: 15px;
  border-bottom: 1px solid #ececec;
}

.reload {
  position: absolute;
  right: 15px;
  top: 15px;
  z-index: 3;
  display: none;  
  cursor: pointer;
  color: grey
}
</style>
<script>
import VueDPlayer from 'vue-dplayer'
import 'vue-dplayer/dist/vue-dplayer.css'

export default {
  components: {
    'd-player': VueDPlayer
  },
  name: 'videPage',
  data () {
    return {
      defaultIcon: 'http://localhost:8443/img/userIcon/user_default.jpg',
      isEnded: false,
      interVideoID: null,
      // 用户信息
      uploadUserInfo:{
        nikcName: '',
        iconURL: '',
        uid: null
      },
      // 此页面的全部信息（页面加载完之后才获取）
      interVideoInfo: '',
      nowVideoID: '',
      nextVideos: [],
      // 视频相关
      options: {
          video: {
            url: '',//改成一个默认视频
          },
          lang: 'en',
          autoplay: false,
          danmaku: true
      },
      player: null,

      container: null, // 容纳选项的容器dom
      reload: null, // 重新播按键
      endButton: null, //视频播放结束的按键
      comments: [], // 评论
      choice: [], // 选项
      relatedVideos: [], //相关视频
      mostViewVideos: [], //最热门视频
      commentContent: '',
      // 登陆的用户信息
      loginUserInfo:{
        iconURL: '',
        nickName: 'Please Login',
        uID: null
      },
      // 收藏点赞
      isCol: false,
      isThumbUp: false
    }
  },
  mounted() {
    this.player = this.$refs.player.dp
    this.init()
  },
  watch: {

  },
  methods: {
    // 获得登陆的用户信息
    requestForLoginUserInfo(){
      this.$axios
        .get('/getLoginUserInfo/' + this.interVideoID)
        .then(successResponse => {
          if (successResponse.data.code === 200){
            if (successResponse.data.msg > 0){
              this.isCol = true
            }
            this.loginUserInfo.iconURL = successResponse.data.data.iconURL
            this.loginUserInfo.nickName = successResponse.data.data.nickName
            this.loginUserInfo.uID = successResponse.data.data.uid
            this.loginUserInfo.isLogin = true
                // 插入用户的观看历史
            this.insertBrowseHistory()
          }
          if (successResponse.data.code === 400){
            // 不能评论
            $("#comment-input").attr("disabled", "disabled").addClass("disabled")
            // 若没登录，则不能发弹幕
            $(".dplayer-comment .dplayer-comment-icon")
              .addClass("disabled")
              .attr("disabled", "disabled")
              .attr("data-balloon", "Please Login")
          }
        })
    },
    // 初始化时，获得视频信息
    getVideo (interVideoID) {
      this.$axios
        .get('/video/' + interVideoID)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.interVideoInfo = successResponse.data.data
            this.uploadUserInfo = this.interVideoInfo.userInfo
            this.comments = this.interVideoInfo.comments
            this.getRelatedVideos(this.interVideoInfo.tag)
            this.switch(this.interVideoInfo.initVideoID, this.interVideoInfo.initVideo.videoURL, this.interVideoInfo.nextVideos);
          }
          if (successResponse.data.code === 400) {
            alert(successResponse.data.message)
          }
        })
        .catch(failResponse => {})
    },
    getRelatedVideos (tag){
      this.$axios
        .get("/category/" + tag + "/" + 6)
        .then(successResponse => {
            this.relatedVideos = successResponse.data
        })
        .catch(failResponse => {})  
    },
    getMostViewVideos (){
      this.$axios
        .get("/playVolume")
        .then(successResponse => {
            this.mostViewVideos = successResponse.data
        })
        .catch(failResponse => {})  
    },
    // 切换视频
    switch(nowVID, nowURL, nextVideos){
      this.nowVideoID = nowVID
      this.nextVideos = nextVideos
      // 切换到初始视频
      this.player.switchVideo(
          {
            url: 'http://localhost:8443/' + nowURL,
          },
          {
            id: this.nowVideoID,
            api: 'http://localhost:8443/api/danmaku/',
            user: this.loginUserInfo.uID
          }
      );
    },
    // 点击互动视频按键时候的操作
    requestForNextVideo(videoID){
      this.$axios
        .get('/video/next/' + videoID)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.switch(videoID, successResponse.data.msg, successResponse.data.data)
          }
          if (successResponse.data.code === 400) {
            alert(successResponse.data.msg)
          }
        })
        .catch(failResponse => {})
    },
    // 发送评论
    sendComment(){
      this.$axios
        .post('/send/comment', {
          uid: this.loginUserInfo.uID,
          interVideoID: this.interVideoID,
          content: this.commentContent
        })
        .then(successResponse => {
          if (successResponse.data.code === 200){
            this.commentContent = ''
            let comment = {
              icon: this.loginUserInfo.iconURL,
              nickName: this.loginUserInfo.nickName,
              uid: this.loginUserInfo.uID,
              content: successResponse.data.data.content,
              interVideoID: this.interVideoID,
              sendTime : successResponse.data.data.sendTime
            }
            this.comments.push(comment)
            this.$dlg.toast(successResponse.data.msg, {messageType: 'success', closeTime: 5})
          }
          if (successResponse.data.code === 400){
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
    },
    // 添加到历史记录
    insertBrowseHistory(){
      this.$axios
        .post('/history', {
          uid: this.loginUserInfo.uID,
          watchVideoID: this.interVideoID
        })
        .then(successResponse => {
          if (successResponse.data.code === 400) {
            alert(successResponse.data.msg)
          }
        })
        .catch(failResponse => {})
    },
    // 添加到收藏夹
    insertIntoCollection(){
      this.$axios
        .post('/insert/collection', {
          uid: this.loginUserInfo.uID,
          favVideoID: this.interVideoID
        })
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.isCol = true;
            ++this.interVideoInfo.collectPoint;
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {})
    },
    deleteFromCollection(){
      this.$axios
        .delete('/delete/collection/' + this.loginUserInfo.uID + '/' + this.interVideoID)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.isCol = false;
            --this.interVideoInfo.collectPoint;
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {})
    },
    init() {
      // 获取到视频id
      this.interVideoID = this.$route.query.vID
      // 获得用户信息
      this.requestForLoginUserInfo()
      // 加上遮罩层，互动视频用

      var that = this
      // 加上重播按键
      this.reload = $("<i></i>").addClass("fa fa-repeat fa-2x reload")
      this.reload.on("click", function() {
        // 隐藏按键和遮罩层
        $(".dplayer-mask").removeClass("mask-show")
        that.reload.css("display", "none")
        that.container.css("display", "none")  
        that.endButton.css("display", "none")  
        that.player.play()
      })
      // 加上按键
      this.container = $("<div></div>").addClass("choice-container")
      for(let i = 0; i < 4; i++ ){
        this.choice[i] = $("<button></button").addClass("button hollow choice")
        // 设置点击事件
        this.choice[i].on("click",function(){
            that.requestForNextVideo(that.choice[i].attr("name"))
            // 隐藏按键和遮罩层
            for (let i = 0; i < that.nextVideos.length ;i++){
              that.choice[i].text(that.nextVideos[i].choice).css("display", "none")
            }
            $(".dplayer-mask").removeClass("mask-show")
            that.reload.css("display", "none")
            that.container.css("display", "none")
        })
        this.container.append(this.choice[i])
      }

      // 视频播放结束的按键
      this.endButton = $("<button></button>").addClass("button hollow end-button").text("视频播放结束～点击重播")
          .on("click" ,function() {
            // 隐藏按键和遮罩层
            $(".dplayer-mask").removeClass("mask-show")
            that.reload.css("display", "none")
            that.endButton.css("display", "none")
            that.requestForNextVideo(that.interVideoInfo.initVideoID)
          })
      $(".dplayer").append(this.container)
      $(".dplayer").append(this.reload)
      $(".dplayer").append(this.endButton)


      // 监听视频是否播放完毕
      this.player.on('ended', function() {
        $(".dplayer-mask").addClass("mask-show")
        // 显示重播
        that.reload.css("display", "initial")
        if (that.nextVideos.length){
          that.options.autoplay = true
          // 调整位置并显示
          that.container.css("top", 200 - ((that.nextVideos.length * 20)))
          that.container.css("display", "initial")
          for (let i = 0; i < that.nextVideos.length ;i++){
            that.choice[i].text(that.nextVideos[i].choice).css("display", "initial")
                .attr("name", that.nextVideos[i].nextVideoID)
          }
          // 显示重播按键
        } else {
          that.endButton.css("display", "initial")
        }
      })
      // 获得互动视频信息并且切换到当前视频
      this.getVideo(this.interVideoID)
      this.getMostViewVideos()
    },
    goToDetails(uID){
        this.$router.push({name:'othersAccount',query: {oID: uID}})
    },
    goToVideoPage(videoID) {
        this.$router.push({query:{vID: videoID}});
        this.$router.go(0)
    }
  },
}
</script>
