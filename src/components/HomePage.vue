<template>
  <div>
    <!-- layerslider -->
    <img src="@/assets/back_default.jpg" width="100%" style="margin-bottom:40px"/> 

    <section class="content">
      <!-- newest video -->
      <div class="main-heading">
        <div class="row secBg padding-14">
          <div class="medium-8 small-8 columns">
            <div class="head-title">
              <i class="fa fa-film"></i>
              <h4>Adventure</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="row secBg">
        <div class="large-12 columns">
          <div class="row column head-text clearfix">
            <div class="grid-system pull-right show-for-large">
              <a class="secondary-button current grid-default"
                ><i class="fa fa-th"></i
              ></a>
              <a class="secondary-button list" href="#"
                ><i class="fa fa-th-list"></i
              ></a>
            </div>
          </div>

          <div class="tabs-content" data-tabs-content="newVideos">
            <div class="tabs-panel is-active" id="new-all">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in result1"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img :src="'http://localhost:5000/img/videoCover/'+result.interVideoID+'/'+result.icon" alt="new video" />
                      <a @click="goToVideoPage(result.interVideoID)" class="hover-posts">
                        <span><i class="fa fa-play"></i>Watch Video</span>
                      </a>
                      <div class="video-stats clearfix">
                        <div class="thumb-stats pull-left">
                          <i class="fa fa-heart"></i>
                          <span>{{ result.collectPoint }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="post-des">
                      <h6>
                        <a @click="goToVideoPage(result.interVideoID)">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                            <i class="fa fa-user"></i>
                            <span><a @click="moveToOpage(result.uid)">{{result.nickName}}</a></span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime | timestampToDate}}</span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-eye"></i>
                          <span>{{ result.playVolume }}</span>
                        </p>
                      </div>
                      <div class="post-summary">
                        <p>
                          {{ result.introduction }}
                        </p>
                      </div>
                      <div class="post-button">
                        <a @click="goToVideoPage(result.interVideoID)" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />

    <section class="content">
      <!-- newest video -->
      <div class="main-heading">
        <div class="row secBg padding-14">
          <div class="medium-8 small-8 columns">
            <div class="head-title">
              <i class="fa fa-film"></i>
              <h4>Romance</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="row secBg">
        <div class="large-12 columns">
          <div class="row column head-text clearfix">
            <div class="grid-system pull-right show-for-large">
              <a class="secondary-button current grid-default"
                ><i class="fa fa-th"></i
              ></a>
              <a class="secondary-button list" 
                ><i class="fa fa-th-list"></i
              ></a>
            </div>
          </div>

          <div class="tabs-content" data-tabs-content="newVideos">
            <div class="tabs-panel is-active" id="new-all">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in result2"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img :src="'http://localhost:5000/img/videoCover/'+result.interVideoID+'/'+result.icon" alt="new video" />
                      <a @click="goToVideoPage(result.interVideoID)" class="hover-posts">
                        <span><i class="fa fa-play"></i>Watch Video</span>
                      </a>
                      <div class="video-stats clearfix">
                        <div class="thumb-stats pull-left">
                          <i class="fa fa-heart"></i>
                          <span>{{ result.collectPoint }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="post-des">
                      <h6>
                        <a @click="goToVideoPage(result.interVideoID)">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                            <i class="fa fa-user"></i>
                            <span><a @click="moveToOpage(result.uid)">{{result.nickName}}</a></span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime | timestampToDate}}</span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-eye"></i>
                          <span>{{ result.playVolume }}</span>
                        </p>
                      </div>
                      <div class="post-summary">
                        <p>
                          {{ result.introduction }}
                        </p>
                      </div>
                      <div class="post-button">
                        <a @click="goToVideoPage(result.interVideoID)" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />

    <section class="content">
      <!-- newest video -->
      <div class="main-heading">
        <div class="row secBg padding-14">
          <div class="medium-8 small-8 columns">
            <div class="head-title">
              <i class="fa fa-film"></i>
              <h4>Comedy</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="row secBg">
        <div class="large-12 columns">
          <div class="row column head-text clearfix">
            <div class="grid-system pull-right show-for-large">
              <a class="secondary-button current grid-default"
                ><i class="fa fa-th"></i
              ></a>
              <a class="secondary-button list" 
                ><i class="fa fa-th-list"></i
              ></a>
            </div>
          </div>

          <div class="tabs-content" data-tabs-content="newVideos">
            <div class="tabs-panel is-active" id="new-all">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in result3"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img :src="'http://localhost:5000/img/videoCover/'+result.interVideoID+'/'+result.icon" alt="new video" />
                      <a @click="goToVideoPage(result.interVideoID)" class="hover-posts">
                        <span><i class="fa fa-play"></i>Watch Video</span>
                      </a>
                      <div class="video-stats clearfix">
                        <div class="thumb-stats pull-left">
                          <i class="fa fa-heart"></i>
                          <span>{{ result.collectPoint }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="post-des">
                      <h6>
                        <a @click="goToVideoPage(result.interVideoID)">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                            <i class="fa fa-user"></i>
                            <span><a @click="moveToOpage(result.uid)">{{result.nickName}}</a></span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime | timestampToDate}}</span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-eye"></i>
                          <span>{{ result.playVolume }}</span>
                        </p>
                      </div>
                      <div class="post-summary">
                        <p>
                          {{ result.introduction }}
                        </p>
                      </div>
                      <div class="post-button">
                        <a @click="goToVideoPage(result.interVideoID)" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <!-- main content -->
    <section class="content">
      <!-- newest video -->
      <div class="main-heading">
        <div class="row secBg padding-14">
          <div class="medium-8 small-8 columns">
            <div class="head-title">
              <i class="fa fa-film"></i>
              <h4>Newest Videos</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="row secBg">
        <div class="large-12 columns">
          <div class="row column head-text clearfix">
            <div class="grid-system pull-right show-for-large">
              <a class="secondary-button current grid-default" href="#"
                ><i class="fa fa-th"></i
              ></a>
              <a class="secondary-button grid-medium" href="#"
                ><i class="fa fa-th-large"></i
              ></a>
              <a class="secondary-button list" href="#"
                ><i class="fa fa-th-list"></i
              ></a>
            </div>
          </div>

          <div class="tabs-content" data-tabs-content="newVideos">
            <div class="tabs-panel is-active" id="new-all">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in videobytime"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img :src="'http://localhost:5000/img/videoCover/'+result.interVideoID+'/'+result.icon" alt="new video" />
                      <a @click="goToVideoPage(result.interVideoID)" class="hover-posts">
                        <span><i class="fa fa-play"></i>Watch Video</span>
                      </a>
                      <div class="video-stats clearfix">
                        <div class="thumb-stats pull-left">
                          <i class="fa fa-heart"></i>
                          <span>{{ result.collectPoint }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="post-des">
                      <h6>
                        <a @click="goToVideoPage(result.interVideoID)">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                            <i class="fa fa-user"></i>
                            <span><a @click="moveToOpage(result.uid)">{{result.nickName}}</a></span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime | timestampToDate}}</span>
                        </p>
                        <p class="pull-left">
                          <i class="fa fa-eye"></i>
                          <span>{{ result.playVolume }}</span>
                        </p>
                      </div>
                      <div class="post-summary">
                        <p>
                          {{ result.introduction }}
                        </p>
                      </div>
                      <div class="post-button">
                        <a @click="goToVideoPage(result.interVideoID)" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    <br />
    <br />
    <section class="content">
      <div class="main-heading">
        <div class="row secBg padding-14">
          <div class="medium-8 small-8 columns">
            <div class="head-title">
              <i class="fa fa-star"></i>
              <h4>Most Popular Videos</h4>
            </div>
          </div>
        </div>
      </div>

      <div class="row secBg">
        <div class="large-12 columns">
          <div class="row column head-text clearfix">
            <div class="grid-system pull-right show-for-large">
              <a class="secondary-button current grid-default"
                ><i class="fa fa-th"></i
              ></a>
              <a class="secondary-button grid-medium"
                ><i class="fa fa-th-large"></i
              ></a>
              <a class="secondary-button list"><i class="fa fa-th-list"></i></a>
            </div>
          </div>
          <div class="tabs-content" data-tabs-content="popularVideos">
            <div class="tabs-panel is-active" id="popular-all">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(video, index) in videobyplay"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img :src="'http://localhost:5000/img/videoCover/'+video.interVideoID+'/'+video.icon" alt="new video" />
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
                      <h6>
                        <a @click="goToVideoPage(video.interVideoID)">{{ video.videoName }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                            <i class="fa fa-user"></i>
                            <span><a @click="moveToOpage(video.uid)">{{video.nickName}}</a></span>
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
                        <p>
                          {{ video.introduction }}
                        </p>
                      </div>
                      <div class="post-button">
                        <a @click="goToVideoPage(video.interVideoID)" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ad Section -->
    </section>
    <!-- End main content -->
    <br /><br />

    <!-- End ad Section -->
  </div>
</template>
<style scoped>
.catagory-video {
  width: initial;
}
</style>
<script>
export default {
  name: "HomePage",
  data() {
    return {
      videobyplay: undefined,
      result1: undefined,
      result2: undefined,
      result3: undefined,
      videobytime: undefined
    };
  },
  mounted() {
    this.playv();
    this.timev();
    this.categary("Adventure");
    this.categary("Romance");
    this.categary("Comedy");
  },
  methods: {
    playv() {
      this.$axios
        .get("/playVolume")
        .then(successResponse => {
          this.videobyplay = successResponse.data;
        })
        .catch(failResponse => {
        });
    },

    timev() {
      this.$axios
        .get("/time")
        .then(successResponse => {
          this.videobytime = successResponse.data;
        })
        .catch(failResponse => {});
    },

    categary(x) {
      this.$axios
        .get("/category/" + x + "/" + 4)
        .then(successResponse => {
          if (x == "Adventure") this.result1 = successResponse.data;
          if (x == "Romance") this.result2 = successResponse.data;
          if (x == "Comedy") this.result3 = successResponse.data;
        })
        .catch(failResponse => {});
    },
    moveToOpage(oid){
      this.$router.push({name:'othersAccount',query:{oID:oid}});
    },
    goToVideoPage(videoID) {
      this.$router.push({path:'/video',query:{vID: videoID}});
    }
  }
};
</script>