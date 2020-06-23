<template>
  <section class="category-content">
    <div class="row">
      <!-- left side content area -->
      <div class="large-8 columns">
        <section class="content content-with-sidebar">
          <!-- newest video -->
          <div class="main-heading removeMargin">
            <div class="row secBg padding-14 removeBorderBottom">
              <div class="medium-11 small-12 columns">
                <div class="head-title">
                  <i class="fa fa-search"></i>
                  <h4>Search results for ' {{ ResultName }} '</h4>
                  <span style="float:right">
                    <input
                      type="radio"
                      id="video"
                      value="video"
                      v-model="searchstyle"
                    /><label for="video">video</label>
                    <input
                      type="radio"
                      id="user"
                      value="user"
                      v-model="searchstyle"
                    /><label for="user">user</label>
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div class="row secBg">
            <div class="large-12 columns">
              <div class="row column head-text clearfix">
                <p class="pull-left">
                  Number of results:<span>{{ total }} </span>
                </p>
              </div>

              <div
                class="tabs-content"
                data-tabs-content="newVideos"
                :style="{
                  margin: searchstyle == 'user' ? '0px 0px 0px 80px' : ''
                }"
              >
                <div class="tabs-panel is-active" id="new-all">
                  <div v-if="total > 0" class="row list-group">
                    <div v-if="searchstyle == 'video'">
                      <div
                        v-for="(result, index) in dataShow"
                        :key="index"
                        class="item large-4 medium-6 columns grid-default"
                        style="float:left"
                      >
                        <div class="post thumb-border">
                          <div class="post-thumb">
                            <img
                              :src="
                                'http://localhost:5000/img/videoCover/' +
                                  result.interVideoID +
                                  '/' +
                                  result.icon
                              "
                              alt="new video"
                            />
                            <a
                              @click="goToVideoPage(result.interVideoID)"
                              class="hover-posts"
                            >
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
                            <center>
                              <h4>
                                {{ result.videoName }}
                              </h4>
                            </center>

                            <div class="post-stats clearfix">
                              <p class="pull-left">
                                <i class="fa fa-user"></i>
                                <span><a @click="goToDetails(result.uid)">{{result.nickName}}</a></span>
                              </p>
                              <p class="pull-left">
                                <i class="fa fa-clock-o"></i>
                                <span>{{
                                  result.uploadTime | timestampToDate
                                }}</span>
                              </p>
                              <p class="pull-left">
                                <i class="fa fa-eye"></i>
                                <span>{{ result.playVolume }}</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div v-if="searchstyle == 'user'">
                      <div
                        class="item large-3 medium-6 columns group-item-secondary-button list"
                        v-for="(result, index) in dataShow"
                        :key="index"
                      >
                        <div class="post thumb-border">
                          <div style="width:18%"></div>
                          &nbsp;&nbsp;&nbsp;
                          <div class="post-thumb2 post-thumb">
                            <img
                              class="circle"
                              :src="
                                'http://localhost:5000/img/userIcon/' +
                                  result.iconURL
                              "
                              alt="user"
                            />
                            <a
                              @click="goToDetails(result.uid)"
                              class="hover-posts circle"
                              ><span
                                ><i class="fa fa-search"></i>Browse more</span
                              ></a
                            >
                          </div>
                          <div class="post-des">
                            <h4>
                              <a @click="goToDetails(result.uid)">{{
                                result.nickName
                              }}</a>
                            </h4>
                            <div class="post-stats clearfix">
                              <p
                                class="pull-lest"
                                style="margin-bottom:15px !important"
                              >
                                <i
                                  class="fa fa-video-camera"
                                  style="font-size: 14px;"
                                ></i>
                                <span style="font-size: 14px;"
                                  >videos：{{ videonum[index] }}</span
                                >
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <i
                                  class="fa fa-users"
                                  style="font-size: 14px;"
                                ></i>
                                <span style="font-size: 14px;">{{
                                  follownum[index]
                                }}</span>
                              </p>
                            </div>
                            <div
                              class="post-summary"
                              style="overflow:hidden;height:40x"
                            >
                              <p>
                                {{ result.introduction }}
                              </p>
                            </div>
                          </div>
                          <div style="margin-left:1cm">
                            <br />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <nav aria-label="Pagination">
                <ul class="pagination text-center">
                  <li class="pagination-next" style="display:inline">
                    <a aria-label="Next page" @click="prePage"> < </a>
                  </li>
                  <li
                    style="display:inline"
                    v-for="page in pageNum"
                    :key="page"
                  >
                    <a
                      aria-label="Page 2"
                      @click="thisPage(page)"
                      :style="{
                        background: page == currentPage + 1 ? '#e96969' : ''
                      }"
                      >{{ page }}</a
                    >
                  </li>

                  <li class="pagination-next" style="display:inline">
                    <a aria-label="Next page" @click="nextPage"> > </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </section>
        <!-- ad Section -->
        <!-- End ad Section -->
      </div>
      <!-- end left side content area -->

      <!-- sidebar -->
      <div class="large-4 columns">
        <aside class="secBg sidebar">
          <div class="row">
            <!-- search Widget -->
            <div class="large-12 medium-7 medium-centered columns">
              <div class="widgetBox">
                <div class="widgetTitle" v-if="searchstyle == 'video'">
                  <h5>Search Videos</h5>
                </div>
                <div class="widgetTitle" v-if="searchstyle == 'user'">
                  <h5>Search Users</h5>
                </div>

                <div class="input-group">
                  <input
                    class="input-group-field"
                    type="search"
                    name="search"
                    v-model="SearchName"
                    required
                  />

                  <div class="input-group-button">
                    <button
                      class="button"
                      @click="searchnow1"
                      style="font-size: 11px;width:80px;height: 41px;"
                    >
                      Search!
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End search Widget -->

            <!-- categories -->
            <div
              class="large-12 medium-7 medium-centered columns"
              v-if="searchstyle == 'video'"
            >
              <div class="widgetBox">
                <center>
                  <div class="widgetTitle">
                    <h5>Type</h5>
                  </div>
                </center>
                <div class="widgetContent">
                  <ul class="accordion" data-accordion>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a
                          class="accordion-title"
                          @click="searchnow"
                          :style="{ background: tag == 'all' ? '#e96969' : '' }"
                          >all</a
                        >
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a
                          class="accordion-title"
                          @click="choose($event)"
                          :style="{
                            background: tag == 'Comedy' ? '#e96969' : ''
                          }"
                          >Comedy</a
                        >
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a
                          class="accordion-title"
                          @click="choose($event)"
                          :style="{
                            background: tag == 'Adventure' ? '#e96969' : ''
                          }"
                          >Adventure</a
                        >
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a
                          class="accordion-title"
                          @click="choose($event)"
                          :style="{
                            background: tag == 'Mystery' ? '#e96969' : ''
                          }"
                          >Mystery</a
                        >
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a
                          class="accordion-title"
                          @click="choose($event)"
                          :style="{
                            background: tag == 'Thriller' ? '#e96969' : ''
                          }"
                          >Thriller</a
                        >
                      </center>
                    </li>

                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a
                          class="accordion-title"
                          @click="choose($event)"
                          :style="{
                            background: tag == 'Time-travel' ? '#e96969' : ''
                          }"
                          >Time-travel</a
                        >
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a
                          class="accordion-title"
                          @click="choose($event)"
                          :style="{
                            background: tag == 'Romance' ? '#e96969' : ''
                          }"
                          >Romance</a
                        >
                      </center>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <!-- end sidebar -->
    </div>
  </section>
  <!-- End Category Content-->
</template>

<script>
export default {
  name: "SearchResult",
  data() {
    return {
      SearchName: "",
      ResultName: "",
      searchstyle: "video",
      dataShow: undefined,
      follownum: undefined,
      videonum: undefined,
      total: undefined,
      tag: "all",
      // 共几页
      pageNum: 1,
      // 默认当前显示第一页
      currentPage: 0,
      come: this.$route.query.SR
    };
  },
  mounted() {
    if (this.$route.query.SR != null) {
      this.SearchName = this.$route.query.SR;
      this.search();
    }
  },
  watch: {
    searchstyle: function(val) {
      this.dataShow = [];
      this.currentPage = 0;
      this.tag = "all";
      this.search();
    }
  },
  methods: {
    search() {
      if (this.searchstyle == "video") {
        if (this.SearchName == "" || this.SearchName == null) {
          this.$axios
            .get(
              "/SearchVideo/" +
                this.tag +
                "/" +
                (this.currentPage + 1)
            )
            .then(successResponse => {
              this.ResultName = this.SearchName;
              this.dataShow = successResponse.data.list;
              this.total = successResponse.data.pageNum;
              this.pageNum = Math.ceil(this.total / 9) || 1;
              this.$router.push({
                query: { SR: this.SearchName }
              });
            })
            .catch(failResponse => {});
        } else {
          this.$axios
            .get(
              "/SearchVideo/" +
                this.SearchName +
                "/" +
                this.tag +
                "/" +
                (this.currentPage + 1)
            )
            .then(successResponse => {
              this.ResultName = this.SearchName;
              this.dataShow = successResponse.data.list;
              this.total = successResponse.data.pageNum;
              this.pageNum = Math.ceil(this.total / 9) || 1;
              this.$router.push({
                query: { SR: this.SearchName }
              });
            })
            .catch(failResponse => {});
        }
      } else {
        if (this.SearchName == "" || this.SearchName == null) {
          this.$axios
          .get("/SearchUser/" + (this.currentPage + 1))
          .then(successResponse => {
            this.ResultName = this.SearchName;
            this.dataShow = successResponse.data.list;
            this.follownum = successResponse.data.follow;
            this.videonum = successResponse.data.video;
            this.total = successResponse.data.pageNum;
            this.pageNum = Math.ceil(this.total / 4) || 1;
            this.$router.push({
              query: { SU: this.SearchName }
            });
          })
          .catch(failResponse => {});
        }
        else{
        this.$axios
          .get("/SearchUser/" + this.SearchName + "/" + (this.currentPage + 1))
          .then(successResponse => {
            this.ResultName = this.SearchName;
            this.dataShow = successResponse.data.list;
            this.follownum = successResponse.data.follow;
            this.videonum = successResponse.data.video;
            this.total = successResponse.data.pageNum;
            this.pageNum = Math.ceil(this.total / 4) || 1;
            this.$router.push({
              query: { SU: this.SearchName }
            });
          })
          .catch(failResponse => {});
        }
      }
    },
    nextPage() {
      if (this.currentPage == this.pageNum - 1) {
        return;
      }
      ++this.currentPage;
      this.search();
    },
    // 上一页
    prePage() {
      if (this.currentPage == 0) {
        return;
      }
      --this.currentPage;
      this.search();
    },
    thisPage(e) {
      this.currentPage = e - 1;
      this.search();
    },
    choose(t) {
      this.tag = t.target.innerHTML;
      this.currentPage = 0;
      this.search();
    },
    searchnow() {
      this.tag = "all";
      this.currentPage = 0;
      this.search();
    },
    searchnow1() {
      this.currentPage = 0;
      this.search();
    },
    goToVideoPage(videoID) {
      this.$router.push({ path: "/video", query: { vID: videoID } });
    },
    goToDetails(uID) {
      this.$router.push({
        name: "othersAccount",
        query: {
          oID: uID
        }
      });
    }
  }
};
</script>
<style scoped>
.content.content-with-sidebar .list-group .list .post .post-thumb2 {
  height: 100px !important;
  width: 100px !important;
}

.circle {
  border-radius: 100px;
}
input[type="radio"] {
  display: initial;
}
</style>
