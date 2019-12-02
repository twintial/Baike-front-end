<template>
  <div>
    <!-- layerslider -->
      <img src="../assets/d009b3de9c82d158b4834dca8f0a19d8bc3e4243.jpg" width="90" height="60" /> 

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
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs-panel" id="new-hd">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in result1"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html"
                          >There are many variations of passage.</a
                        >
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
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
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs-panel" id="new-hd">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in result2"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html"
                          >There are many variations of passage.</a
                        >
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
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
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs-panel" id="new-hd">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in result3"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html"
                          >There are many variations of passage.</a
                        >
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
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
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html">{{
                          result.videoName
                        }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs-panel" id="new-hd">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in videobytime"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html"
                          >There are many variations of passage.</a
                        >
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
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
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html">{{ video.videoName }}</a>
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ video.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
                          ><i class="fa fa-play-circle"></i>watch video</a
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="tabs-panel" id="new-hd">
              <div class="row list-group">
                <div
                  class="item large-3 medium-6 columns group-item-grid-default"
                  v-for="(result, index) in videobyplay"
                  :key="index + '-label'"
                >
                  <div class="post thumb-border">
                    <div class="post-thumb">
                      <img src="http://placehold.it/370x220" alt="new video" />
                      <a href="single-video-v2.html" class="hover-posts">
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
                        <a href="single-video-v2.html"
                          >There are many variations of passage.</a
                        >
                      </h6>
                      <div class="post-stats clearfix">
                        <p class="pull-left">
                          <i class="fa fa-clock-o"></i>
                          <span>{{ result.uploadTime }}</span>
                        </p>
                        <p class="pull-right">
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
                        <a href="single-video-v2.html" class="secondary-button"
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
          alert("?");
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
        .get("/category/" + x)
        .then(successResponse => {
          if (x == "Adventure") this.result1 = successResponse.data;
          if (x == "Romance") this.result2 = successResponse.data;
          if (x == "Comedy") this.result3 = successResponse.data;
        })
        .catch(failResponse => {});
    }
  }
};
</script>