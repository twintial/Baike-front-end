<template>
    <div>
        <profile-header></profile-header>
        <div class="row">
            <left-side-bar></left-side-bar>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- Comments -->
                <section class="content comments">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="main-heading borderBottom">
                                <div class="row padding-14">
                                    <div class="medium-12 small-12 columns">
                                        <div class="head-title">
                                            <i class="fa fa-comments"></i>
                                            <h4>Comments <span>(4)</span></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="comment-box thumb-border">
                                <div class="media-object stack-for-small">
                                    <div class="media-object-section comment-img text-center">
                                        <div class="comment-box-img">
                                            <img src= "http://placehold.it/80x80" alt="comment">
                                        </div>
                                        <h6><a href="#">Joseph John</a></h6>
                                    </div>
                                    <div class="media-object-section comment-textarea">
                                        <form method="post">
                                            <textarea name="commentText" placeholder="Add a comment here.."></textarea>
                                            <input type="submit" name="submit" value="send">
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div class="comment-sort text-right">
                                <span>Sort By : <a href="#">newest</a> | <a href="#">oldest</a></span>
                            </div>

                            <!-- main comment -->
                            <div class="main-comment showmore_one">
                                <div class="media-object stack-for-small">
                                    <div class="media-object-section comment-img text-center">
                                        <div class="comment-box-img">
                                            <img src= "http://placehold.it/80x80" alt="comment">
                                        </div>
                                    </div>
                                    <div class="media-object-section comment-desc">
                                        <div class="comment-title">
                                            <span class="name"><a href="#">Joseph John</a> Said:</span>
                                            <span class="time float-right"><i class="fa fa-clock-o"></i>1 minute ago</span>
                                        </div>
                                        <div class="comment-text">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoresunt explicabo.</p>
                                        </div>
                                        <div class="comment-btns">
                                            <span><a href="#"><i class="fa fa-thumbs-o-up"></i></a> | <a href="#"><i class="fa fa-thumbs-o-down"></i></a></span>
                                            <span><a href="#"><i class="fa fa-share"></i>Reply</a></span>
                                            <span class='reply float-right hide-reply'></span>
                                        </div>

                                        <!--sub comment-->
                                        <div class="media-object stack-for-small reply-comment">
                                            <div class="media-object-section comment-img text-center">
                                                <div class="comment-box-img">
                                                    <img src= "http://placehold.it/80x80" alt="comment">
                                                </div>
                                            </div>
                                            <div class="media-object-section comment-desc">
                                                <div class="comment-title">
                                                    <span class="name"><a href="#">Nancy John</a> Said:</span>
                                                    <span class="time float-right"><i class="fa fa-clock-o"></i>1 minute ago</span>
                                                </div>
                                                <div class="comment-text">
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoresunt explicabo.</p>
                                                </div>
                                                <div class="comment-btns">
                                                    <span><a href="#"><i class="fa fa-thumbs-o-up"></i></a> | <a href="#"><i class="fa fa-thumbs-o-down"></i></a></span>
                                                    <span><a href="#"><i class="fa fa-share"></i>Reply</a></span>
                                                    <span class='reply float-right hide-reply'></span>
                                                </div>
                                            </div>
                                        </div><!-- end sub comment -->

                                        <!--sub comment-->
                                        <div class="media-object stack-for-small reply-comment">
                                            <div class="media-object-section comment-img text-center">
                                                <div class="comment-box-img">
                                                    <img src= "http://placehold.it/80x80" alt="comment">
                                                </div>
                                            </div>
                                            <div class="media-object-section comment-desc">
                                                <div class="comment-title">
                                                    <span class="name"><a href="#">frank</a> Said:</span>
                                                    <span class="time float-right"><i class="fa fa-clock-o"></i>1 minute ago</span>
                                                </div>
                                                <div class="comment-text">
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoresunt explicabo.</p>
                                                </div>
                                                <div class="comment-btns">
                                                    <span><a href="#"><i class="fa fa-thumbs-o-up"></i></a> | <a href="#"><i class="fa fa-thumbs-o-down"></i></a></span>
                                                    <span><a href="#"><i class="fa fa-share"></i>Reply</a></span>
                                                    <span class='reply float-right hide-reply'></span>
                                                </div>

                                            </div>
                                        </div><!-- end sub comment -->

                                    </div>
                                </div>

                                <div class="media-object stack-for-small">
                                    <div class="media-object-section comment-img text-center">
                                        <div class="comment-box-img">
                                            <img src= "http://placehold.it/80x80" alt="comment">
                                        </div>
                                    </div>
                                    <div class="media-object-section comment-desc">
                                        <div class="comment-title">
                                            <span class="name"><a href="#">Joseph John</a> Said:</span>
                                            <span class="time float-right"><i class="fa fa-clock-o"></i>1 minute ago</span>
                                        </div>
                                        <div class="comment-text">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoresunt explicabo.</p>
                                        </div>
                                        <div class="comment-btns">
                                            <span><a href="#"><i class="fa fa-thumbs-o-up"></i></a> | <a href="#"><i class="fa fa-thumbs-o-down"></i></a></span>
                                            <span><a href="#"><i class="fa fa-share"></i>Reply</a></span>
                                            <span class='reply float-right hide-reply'></span>
                                        </div>

                                    </div>
                                </div>

                                <div class="media-object stack-for-small">
                                    <div class="media-object-section comment-img text-center">
                                        <div class="comment-box-img">
                                            <img src= "http://placehold.it/80x80" alt="comment">
                                        </div>
                                    </div>
                                    <div class="media-object-section comment-desc">
                                        <div class="comment-title">
                                            <span class="name"><a href="#">Nancy John</a> Said:</span>
                                            <span class="time float-right"><i class="fa fa-clock-o"></i>1 minute ago</span>
                                        </div>
                                        <div class="comment-text">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoresunt explicabo.</p>
                                        </div>
                                        <div class="comment-btns">
                                            <span><a href="#"><i class="fa fa-thumbs-o-up"></i></a> | <a href="#"><i class="fa fa-thumbs-o-down"></i></a></span>
                                            <span><a href="#"><i class="fa fa-share"></i>Reply</a></span>
                                            <span class='reply float-right hide-reply'></span>
                                        </div>
                                        <!--sub comment-->
                                        <div class="media-object stack-for-small reply-comment">
                                            <div class="media-object-section comment-img text-center">
                                                <div class="comment-box-img">
                                                    <img src= "http://placehold.it/80x80" alt="comment">
                                                </div>
                                            </div>
                                            <div class="media-object-section comment-desc">
                                                <div class="comment-title">
                                                    <span class="name"><a href="#">Joseph John</a> Said:</span>
                                                    <span class="time float-right"><i class="fa fa-clock-o"></i>1 minute ago</span>
                                                </div>
                                                <div class="comment-text">
                                                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoresunt explicabo.</p>
                                                </div>
                                                <div class="comment-btns">
                                                    <span><a href="#"><i class="fa fa-thumbs-o-up"></i></a> | <a href="#"><i class="fa fa-thumbs-o-down"></i></a></span>
                                                    <span><a href="#"><i class="fa fa-share"></i>Reply</a></span>
                                                    <span class='reply float-right hide-reply'></span>
                                                </div>
                                                <!--sub comment-->
                                                <div class="media-object stack-for-small reply-comment">
                                                    <div class="media-object-section comment-img text-center">
                                                        <div class="comment-box-img">
                                                            <img src= "http://placehold.it/80x80" alt="comment">
                                                        </div>
                                                    </div>
                                                    <div class="media-object-section comment-desc">
                                                        <div class="comment-title">
                                                            <span class="name"><a href="#">Joseph John</a> Said:</span>
                                                            <span class="time float-right"><i class="fa fa-clock-o"></i>1 minute ago</span>
                                                        </div>
                                                        <div class="comment-text">
                                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventoresunt explicabo.</p>
                                                        </div>
                                                        <div class="comment-btns">
                                                            <span><a href="#"><i class="fa fa-thumbs-o-up"></i></a> | <a href="#"><i class="fa fa-thumbs-o-down"></i></a></span>
                                                            <span><a href="#"><i class="fa fa-share"></i>Reply</a></span>
                                                            <span class='reply float-right hide-reply'></span>
                                                        </div>
                                                    </div>
                                                </div><!-- end sub comment -->
                                            </div>
                                        </div><!-- end sub comment -->
                                    </div>
                                </div>
                            </div><!-- End main comment -->

                        </div>
                    </div>
                </section><!-- End Comments -->
            </div><!-- end left side content area -->
        </div>
    </div>
</template>
<script>
import profileHeader from '@/components/profile/common/ProfileHeader.vue'
import leftSideBar from '@/components/profile/common/LeftSideBar.vue'
export default {
    name: 'aboutMe',
    components: {profileHeader, leftSideBar},
}
</script>