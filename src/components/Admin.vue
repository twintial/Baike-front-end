<template>
  <section class="category-content">
    <div class="row">
      <!-- sidebar -->
      <div class="large-3 columns">
        <aside class="secBg sidebar">
          <div class="row">
            <!-- search Widget -->
            <div class="large-12 medium-7 medium-centered columns">
              
            </div>
            <!-- End search Widget -->

            <!-- categories -->
            <div class="large-12 medium-7 medium-centered columns">
              <div class="widgetBox">
                <center>
                  <div class="widgetTitle">
                    <h5>State</h5>
                  </div>
                </center>
                <div class="widgetContent">
                  <ul
                    class="side-nav"
                    v-if="searchstyle == 'video'"
                  >
                    <li >
                      <center>
                        <a
                          @click="choose1"
                          style=" font-size:24px"
                          :style="{
                            background: tag == 'NORMAL' ? '#89942d52' : ''
                          }"
                          >Normal videos</a
                        >
                      </center>
                    </li>
                    <li>
                      <center>
                        <a
                          @click="choose2"
                          style=" font-size:24px"
                          :style="{
                            background: tag == 'FROZEN' ? '#89942d52' : ''
                          }"
                          >Frozen videos</a
                        >
                      </center>
                    </li>
                  </ul>
                  <ul
                    class="side-nav"
                    v-if="searchstyle == 'user'"
                  >
                    <li >
                      <center>
                        <a
                          @click="choose1"
                          style=" font-size:24px"
                          :style="{
                            
                            background: tag == 'NORMAL' ? '#89942d52' : ''
                          
                          }"
                          >Normal accounts</a
                        >
                      </center>
                    </li>
                    <li >
                      <center>
                        <a
                          @click="choose2"
                          style=" font-size:24px"
                          :style="{
                            background: tag == 'FROZEN' ? '#89942d52' : ''
                          }"
                          >Frozen accounts</a
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
      <div class="large-9 columns">
        <section class="content content-with-sidebar">
          <!-- newest video -->
          <div class="main-heading removeMargin">
            <div class="row secBg padding-14 removeBorderBottom">
              <div class="medium-11 small-12 columns">
                <div class="head-title" >
                
                  <span style=" margin-left:50px">
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
                  <div style="float:right">
                search name:
                  <input
                  type="text" 
                  style="width:90px;height:30px;display:inline"
                    v-model="SearchName"
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row secBg">
            <div class="large-12 columns">
              <div class="row column head-text clearfix">
                <p class="pull-left">
                  Number:<span>{{ total }} </span>
                </p>
              </div>

              <div>
                <div v-if="total > 0">
                  <table
                    v-if="searchstyle == 'video' && tag == 'FROZEN'"
                  >
                  <thead>
                    <tr>
                      <td>Video ID</td>
                      <td>Video Name</td>
                      <td>Tag</td>
                      <td>Upload Time</td>
                      <td>State</td>
                      <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(result, index) in dataShow" :key="index">
                      <td>{{ result.interVideoID }}</td>
                      <td>{{ result.videoName }}</td>
                      <td>{{ result.tag }}</td>
                      <td>{{ result.uploadTime | timestampToDate }}</td>
                      <td>{{ tag }}</td>
                      <td>
                        <button
                          type="button"
                          @click="changeVideoState(result.interVideoID)"
                        >
                          Recover
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>

                  <table
                    v-if="searchstyle == 'video' && tag == 'NORMAL'"
                  >
                  <thead>
                    <tr>
                      <td>Video ID</td>
                      <td>Video Name</td>
                      <td>Tag</td>
                      <td>Upload Time</td>
                      <td>State</td>
                      <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(result, index) in dataShow" :key="index">
                      <td>{{ result.interVideoID }}</td>
                      <td>{{ result.videoName }}</td>
                      <td>{{ result.tag }}</td>
                      <td>{{ result.uploadTime | timestampToDate }}</td>
                      <td>{{ tag }}</td>
                      <td>
                        <button
                          type="button"
                          @click="changeVideoState(result.interVideoID)"
                        >
                          Freeze
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>

                  <table
                    
                    v-if="searchstyle == 'user' && tag == 'NORMAL'"
                  >
                    <thead>
                      <tr>
                        <td>User ID</td>
                        <td>Nickname</td>
                        <td>State</td>
                        <td></td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(result, index) in dataShow" :key="index">
                        <td>{{ result.uid }}</td>
                        <td>{{ result.nickName }}</td>
                        <td>{{ tag }}</td>
                        <td>
                          <button
                            type="button"
                            @click="changeUserState(result.uid)"
                          >
                            Freeze
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>

                  <table
                    v-if="searchstyle == 'user' && tag == 'FROZEN'"
                  >
                  <thead>
                    <tr>
                      <td>User ID</td>
                      <td>Nickname</td>
                      <td>State</td>
                      <td></td>
                    </tr>
                    </thead>
                    <tbody>
                    <tr v-for="(result, index) in dataShow" :key="index">
                      <td>{{ result.uid }}</td>
                      <td>{{ result.nickName }}</td>
                      <td>{{ tag }}</td>
                      <td>
                        <button
                          type="button"
                          @click="changeUserState(result.uid)"
                        >
                          Recover
                        </button>
                      </td>
                    </tr>
                    </tbody>
                  </table>
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
      <!-- end sidebar -->
    </div>
  </section>
  <!-- End Category Content-->
</template>

<script>
export default {
  name: "admin",
  data() {
    return {
      SearchName: "",
      ResultName: "",
      searchstyle: "video",
      searchorder: "playV",
      dataShow: undefined,
      total: undefined,
      tag: "NORMAL",
      // 共几页
      pageNum: 1,
      // 默认当前显示第一页
      currentPage: 0,

    };
  },
  mounted() {
      this.SearchName = "";
      this.search();
  },
  watch: {
    searchstyle: function(val) {
      this.dataShow = [];
      this.currentPage = 0;
      this.tag = "NORMAL";
      this.search();
    },
    SearchName: function(val) {
      this.searchnow();
    }
  },
  methods: {
    search() {
      if (this.searchstyle == "video") {
        if (this.SearchName == "" || this.SearchName == null) {
          this.$axios
            .get(
              "/SearchVideoByAdmin/" +
                (this.currentPage + 1) +
                "/" +
                this.searchorder +
                "/" +
                this.tag
            )
            .then(successResponse => {
              this.ResultName = this.SearchName;
              this.dataShow = successResponse.data.list;
              this.total = successResponse.data.pageNum;
              this.pageNum = Math.ceil(this.total / 9) || 1;
              
            })
            .catch(failResponse => {});
        } else {
          this.$axios
            .get(
              "/SearchVideoByAdmin/" +
                this.SearchName +
                "/" +
                (this.currentPage + 1) +
                "/" +
                this.searchorder +
                "/" +
                this.tag
            )
            .then(successResponse => {
              this.ResultName = this.SearchName;
              this.dataShow = successResponse.data.list;
              this.total = successResponse.data.pageNum;
              this.pageNum = Math.ceil(this.total / 9) || 1;
              
            })
            .catch(failResponse => {});
        }
      } else {
        if (this.SearchName == "" || this.SearchName == null) {
          this.$axios
            .get(
              "/SearchUserByAdmin/" +
                (this.currentPage + 1) +
                "/" +
                this.searchorder +
                "/" +
                this.tag
            )
            .then(successResponse => {
              this.ResultName = this.SearchName;
              this.dataShow = successResponse.data.list;
              this.total = successResponse.data.pageNum;
              this.pageNum = Math.ceil(this.total / 9) || 1;
              
            })
            .catch(failResponse => {});
        } else {
          this.$axios
            .get(
              "/SearchUserByAdmin/" +
                this.SearchName +
                "/" +
                (this.currentPage + 1) +
                "/" +
                this.searchorder +
                "/" +
                this.tag
            )
            .then(successResponse => {
              this.ResultName = this.SearchName;
              this.dataShow = successResponse.data.list;
              this.total = successResponse.data.pageNum;
              this.pageNum = Math.ceil(this.total / 9) || 1;
              
            })
            .catch(failResponse => {});
        }
      }
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
    choose1() {
      this.tag = "NORMAL";
      this.currentPage = 0;
      this.search();
    },
    choose2() {
      this.tag = "FROZEN";
      this.currentPage = 0;
      this.search();
    },
    searchnow() {
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
    },
    changeUserState(id) {
      this.$axios
        .put("/ChangeUserState/" + id)
        .then(successResponse => {
          this.currentPage = 0;
          this.search();
        })
        .catch(failResponse => {});
    },
    changeVideoState(id) {
      this.$axios
        .put("/ChangeVideoState/" + id)
        .then(successResponse => {
          this.currentPage = 0;
          this.search();
        })
        .catch(failResponse => {});
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
