<template>
    <div>
        <!-- profile top section -->
        <section class="topProfile">
            <div class="main-text text-center">
                <div class="row">
                    <div class="large-12 columns">
                        <h3>World’s Biggest</h3>
                        <h1>Powerfull Video Theme</h1>
                    </div>
                </div>
            </div>
            <div class="profile-stats">
                <div class="row secBg">
                    <div class="large-12 columns">
                        <div class="profile-author-img">
                            <img src="http://placehold.it/120x110" alt="profile author img">
                        </div>
                        <div class="profile-subscribe">
                            <span><i class="fa fa-users"></i>6</span>
                            <button type="submit" name="subscribe">subscribe</button>
                        </div>
                        <div class="profile-share">
                            <div class="easy-share" data-easyshare data-easyshare-http data-easyshare-url="http://joinwebs.com">
                                <!-- Facebook -->
                                <button data-easyshare-button="facebook">
                                    <span class="fa fa-facebook"></span>
                                    <span>Share</span>
                                </button>
                                <span data-easyshare-button-count="facebook">0</span>

                                <!-- Twitter -->
                                <button data-easyshare-button="twitter" data-easyshare-tweet-text="">
                                    <span class="fa fa-twitter"></span>
                                    <span>Tweet</span>
                                </button>
                                <span data-easyshare-button-count="twitter">0</span>

                                <!-- Google+ -->
                                <button data-easyshare-button="google">
                                    <span class="fa fa-google-plus"></span>
                                    <span>+1</span>
                                </button>
                                <span data-easyshare-button-count="google">0</span>

                                <div data-easyshare-loader>Loading...</div>
                            </div>
                        </div>
                        <div class="clearfix">
                            <div class="profile-author-name float-left">
                                <h4>Joseph John</h4>
                                <p>Join Date : <span>5 January 16</span></p>
                            </div>
                            <div class="profile-author-stats float-right">
                                <ul class="menu">
                                    <li>
                                        <div class="icon float-left">
                                            <i class="fa fa-video-camera"></i>
                                        </div>
                                        <div class="li-text float-left">
                                            <p class="number-text">36</p>
                                            <span>Videos</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon float-left">
                                            <i class="fa fa-heart"></i>
                                        </div>
                                        <div class="li-text float-left">
                                            <p class="number-text">50</p>
                                            <span>favorites</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon float-left">
                                            <i class="fa fa-users"></i>
                                        </div>
                                        <div class="li-text float-left">
                                            <p class="number-text">6</p>
                                            <span>followers</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div class="icon float-left">
                                            <i class="fa fa-comments-o"></i>
                                        </div>
                                        <div class="li-text float-left">
                                            <p class="number-text">26</p>
                                            <span>comments</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section><!-- End profile top section -->
        <div class="row">
            <!-- left sidebar -->
            <div class="large-4 columns">
                <aside class="secBg sidebar">
                    <div class="row">
                        <!-- profile overview -->
                        <div class="large-12 columns">
                            <div class="widgetBox">
                                <div class="widgetTitle">
                                    <h5>Profile Overview</h5>
                                </div>
                                <div class="widgetContent">
                                    <ul class="profile-overview">
                                        <li class="clearfix"><a href="profile-about-me.html"><i class="fa fa-user"></i>about me</a></li>
                                        <li class="clearfix"><a href="profile-video.html"><i class="fa fa-video-camera"></i>Videos <span class="float-right">36</span></a></li>
                                        <li class="clearfix"><a href="profile-favorite.html"><i class="fa fa-heart"></i>Favorite Videos<span class="float-right">50</span></a></li>
                                        <li class="clearfix"><a href="profile-followers.html"><i class="fa fa-users"></i>Followers<span class="float-right">6</span></a></li>
                                        <li class="clearfix"><a class="active" href="#"><i class="fa fa-comments-o"></i>comments<span class="float-right">26</span></a></li>
                                        <li class="clearfix"><a href="profile-settings.html"><i class="fa fa-gears"></i>Profile Settings</a></li>
                                        <li class="clearfix"><a href="index.html"><i class="fa fa-sign-out"></i>Logout</a></li>
                                    </ul>
                                    <a href="submit-post.html" class="button"><i class="fa fa-plus-circle"></i>Submit Video</a>
                                </div>
                            </div>
                        </div><!-- End profile overview -->
                    </div>
                </aside>
            </div><!-- end sidebar -->
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
