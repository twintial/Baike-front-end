<template>
  <section class="category-content">
    <div class="row">
      <!-- left side content area -->
      <div class="large-8 columns">
        <section class="content content-with-sidebar">
          <!-- newest video -->
          <div class="main-heading removeMargin">
            <div class="row secBg padding-14 removeBorderBottom">
              <div class="medium-8 small-12 columns">
                <div class="head-title">
                  <i class="fa fa-search"></i>
                  <h4>“ Comedy videos ”的查询结果</h4>
                </div>
              </div>
            </div>
          </div>

          <div class="row secBg">
            <div class="large-12 columns">
              <div class="row column head-text clearfix">
                <p class="pull-left">搜索结果:<span>15个视频</span></p>
              </div>

              <div class="tabs-content" data-tabs-content="newVideos">
                <div class="tabs-panel is-active" id="new-all">
                  <div class="row list-group">
                    <div class="item large-4 medium-6 columns grid-default">
                      <div class="post thumb-border">
                        <div class="post-thumb">
                          <img
                            src="http://placehold.it/370x220"
                            alt="new video"
                          />
                          <a href="single-video-v2.html" class="hover-posts">
                            <span><i class="fa fa-play"></i>Watch Video</span>
                          </a>
                          <div class="video-stats clearfix">
                            <div class="thumb-stats pull-left">
                              <i class="fa fa-heart"></i>
                              <span>506</span>
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
                              <span>5 January 16</span>
                            </p>
                            <p class="pull-left">
                              <i class="fa fa-eye"></i>
                              <span>1,862K</span>
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
                    <a href="#" aria-label="Next page"><<</a>
                  </li>
                  <li style="display:inline">
                    <a href="#" aria-label="Page 2">1</a>
                  </li>
                  <li style="display:inline">
                    <a href="#" aria-label="Page 2">2</a>
                  </li>
                  <li style="display:inline">
                    <a href="#" aria-label="Page 3">3</a>
                  </li>
                  <li style="display:inline">
                    <a href="#" aria-label="Page 4">4</a>
                  </li>
                  <li class="pagination-next" style="display:inline">
                    <a href="#" aria-label="Next page">>></a>
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
                <div class="widgetTitle">
                  <h5>Search Videos</h5>
                </div>
                <form id="searchform" method="get" role="search">
                  <div class="input-group">
                    <input
                      class="input-group-field"
                      type="text"
                      placeholder="Enter your keyword"
                    />
                    <div class="input-group-button">
                      <input type="submit" class="button" value="Submit" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <!-- End search Widget -->

            <!-- categories -->
            <div class="large-12 medium-7 medium-centered columns">
              <div class="widgetBox">
                <div class="widgetTitle">
                  <h5>categories</h5>
                </div>
                <div class="widgetContent">
                  <ul class="accordion" data-accordion>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Entertainment</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Technology</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title"
                        >Fashion &amp; Beauty</a
                      >
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title"
                        >sports &amp; recreation</a
                      >
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Automotive</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">foods &amp; drinks</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Peopls</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Nature</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Transportationy</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title"
                        >places &amp; landmarks</a
                      >
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Travel</a>
                    </li>
                    <li class="accordion-item" data-accordion-item>
                      <a href="#" class="accordion-title">Animals</a>
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


