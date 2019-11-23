<template>
    <div>
        <profile-header></profile-header>
        <div class="row">
            <left-side-bar></left-side-bar>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- followers -->
                <section class="content content-with-sidebar followers margin-bottom-10">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="row column head-text clearfix">
                                <h4 class="pull-left"><i class="fa fa-users"></i>Followers</h4>
                            </div>
                            <div class="row collapse">
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                                <div class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        <span>Frank Wright</span>
                                        <button type="submit" name="follow">Subscribe</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="show-more-inner text-center">
                            <a href="#" class="show-more-btn">show more</a>
                        </div>
                    </div>
                </section>
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