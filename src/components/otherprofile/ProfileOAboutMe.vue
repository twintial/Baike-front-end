<template>
    <div>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- single post description -->
                <section class="singlePostDescription">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="heading">
                                <i class="fa fa-user"></i>
                                <h4>About him</h4>
                            </div>
                            <div class="description">
                                <p v-if="message === null">He is an idle person, so he haven't edit the introduction</p>
                                <p v-else>{{message}}</p>
                               
                            </div>
                        </div>
                    </div>
                </section><!-- End single post description -->
            </div>
            <!-- end left side content area -->
    </div>
</template>
<script>
export default {
  name: 'aboutMe',
  props:["message"]

}
</script>