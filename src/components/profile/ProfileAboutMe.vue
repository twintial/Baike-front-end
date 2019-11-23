<template>
    <div>
        <profile-header></profile-header>
        <div class="row">
            <left-side-bar></left-side-bar>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- single post description -->
                <section class="singlePostDescription">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="heading">
                                <i class="fa fa-user"></i>
                                <h4>Description</h4>
                            </div>
                            <div class="description">
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
                                <div class="site profile-margin">
                                    <button><i class="fa fa-globe"></i>Site</button>
                                    <a href="#" class="inner-btn">www.betube.com</a>
                                </div>
                                <div class="email profile-margin">
                                    <button><i class="fa fa-envelope"></i>Email</button>
                                    <span class="inner-btn">support@betube.com</span>
                                </div>
                                <div class="phone profile-margin">
                                    <button><i class="fa fa-phone"></i>Phone</button>
                                    <span class="inner-btn">92-568-748</span>
                                </div>
                                <div class="socialLinks profile-margin">
                                    <button><i class="fa fa-share-alt"></i>get socialize</button>
                                    <a href="#" class="inner-btn"><i class="fa fa-facebook"></i></a>
                                    <a href="#" class="inner-btn"><i class="fa fa-twitter"></i></a>
                                    <a href="#" class="inner-btn"><i class="fa fa-google-plus"></i></a>
                                    <a href="#" class="inner-btn"><i class="fa fa-flickr"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><!-- End single post description -->
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