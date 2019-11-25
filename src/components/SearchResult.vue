<template>
  <section class="category-content">
    <div class="row">
      <!-- left side content area -->
      <div class="large-9 columns">
        <section class="content content-with-sidebar">
          <!-- newest video -->
          <div class="main-heading removeMargin">
            <div class="row secBg padding-14 removeBorderBottom">
              <div class="medium-8 small-12 columns">
                <div class="head-title">
                  <i class="fa fa-search"></i>
                  <h4>{{ ResultName }}的查询结果</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="row secBg">
            <div class="large-12 columns">
              <div class="row column head-text clearfix">
                <p class="pull-left">
                  搜索结果:<span>{{ total }}个视频</span>
                </p>
              </div>

              <div class="tabs-content" data-tabs-content="newVideos">
                <div class="tabs-panel is-active" id="new-all">
                  <div
                    v-if="dataShow && dataShow.length > 0"
                    class="row list-group"
                  >
                    <div
                      v-for="(result, index) in dataShow"
                      :key="index"
                      class="item large-4 medium-6 columns grid-default"
                      style="float:left"
                    >
                      <div class="post thumb-border">
                        <div class="post-thumb">
                          <img
                            :src="'http://localhost:8443/img/videoCover/'+result.interVideoID+'/'+result.icon"
                            alt="new video"
                          />
                          <a href="single-video-v2.html" class="hover-posts">
                            <span><i class="fa fa-play"></i>Watch Video</span>
                          </a>
                          <div class="video-stats clearfix">
                            <div class="thumb-stats pull-left">
                              <i class="fa fa-heart"></i>
                              <span>{{ result.praisePoint }}</span>
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
                              <i class="fa fa-clock-o"></i>
                              <span>{{
                                result.uploadTime
                              }}</span>
                            </p>
                            <p class="pull-left">
                              <i class="fa fa-eye"></i>
                              <span>{{ result.playVolume }}</span>
                            </p>
                          </div>
                          <div class="post-summary">
                            <p>
                              Sed ut perspiciatis unde omnis iste natus error
                              sit voluptatem accusantium doloremque laudantium,
                              totam rem aperiam, eaque ipsa quae ab illo
                              inventore veritatis et quasi architecto sequi
                              nesciunt.
                            </p>
                          </div>
                          <div class="post-button">
                            <a
                              href="single-video-v2.html"
                              class="secondary-button"
                              ><i class="fa fa-play-circle"></i>watch video</a
                            >
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
                    <a aria-label="Next page" @click="prePage"></a>
                  </li>
                  <li
                    style="display:inline"
                    v-for="page in pageNum"
                    :key="page"
                    
                  >
                    <a aria-label="Page 2" @click="thisPage(page)" :style="{'background':(page==currentPage+1)? 'yellow':''}">{{
                      page
                    }}</a>
                  </li>

                  <li class="pagination-next" style="display:inline">
                    <a aria-label="Next page" @click="nextPage">></a>
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
      <div class="large-3 columns">
        <aside class="secBg sidebar">
          <div class="row">
            <!-- search Widget -->
            <div class="large-12 medium-7 medium-centered columns">
              <div class="widgetBox">
                <div class="widgetTitle">
                  <h5>Search Videos</h5>
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
                    <button class="button" @click="searchnow" style="font-size: 11px;width:60px;height: 40px;">
                    
                      搜索
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End search Widget -->

            <!-- categories -->
            <div class="large-12 medium-7 medium-centered columns">
              <div class="widgetBox">
                <center>
                  <div class="widgetTitle">
                    <h5>类型</h5>
                  </div>
                </center>
                <div class="widgetContent">
                  <ul class="accordion" data-accordion>
                    <li class="accordion-item" data-accordion-item >
                      <center>
                        <a class="accordion-title" @click="searchnow" :style="{'background':(tag=='all')? 'yellow':''}" >全部</a>
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a class="accordion-title" @click="choose($event)" :style="{'background':(tag=='0')? 'yellow':''}">0</a>
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a class="accordion-title" @click="choose($event)" :style="{'background':(tag=='1')? 'yellow':''}">1</a>
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a class="accordion-title" @click="choose($event)" :style="{'background':(tag=='2')? 'yellow':''}">2</a>
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a class="accordion-title" @click="choose($event)" :style="{'background':(tag=='3')? 'yellow':''}">3</a>
                      </center>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <center>
                        <a class="accordion-title" @click="choose($event)" :style="{'background':(tag=='4')? 'yellow':''}">4</a>
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
      dataShow: undefined,
      total: undefined,
      tag: "all",
      // 共几页
      pageNum: 1,
      // 默认当前显示第一页
      currentPage: 0,
      come:this.$route.query.SR
    };
  },
  watch: {
    SearchName: function(val) {
      this.tag = "all";
      this.currentPage = 0;
      this.search();
    },
  },
  mounted() {
    if (this.$route.query.SR != null) {
      this.SearchName = this.$route.query.SR;
      this.search();
    }
  },
  methods: {
    search() {
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
    },
    nextPage() {
      if (this.currentPage == this.pageNum - 1) {
        alert("已经是最后一页啦");
        return;
      }
      ++this.currentPage;
      this.search();
    },
    // 上一页
    prePage() {
      if (this.currentPage == 0) {
        alert("已经是第一页啦");
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
    }
  }
}; 
</script>