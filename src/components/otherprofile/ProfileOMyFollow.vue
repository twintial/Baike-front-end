<template>
    <div>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- followers -->
                <section class="content content-with-sidebar followers margin-bottom-10">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="row column head-text clearfix">
                                <h4 class="pull-left"><i class="fa fa-child"></i>His Follow</h4>
                            </div>
                            <div class="row collapse">
                                <div v-for="(myfollower, index) in followers" :key="index" class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img :src="'http://localhost:8443/img/userIcon/'+myfollower.iconURL" alt="followers">
                                        </div>
                                        <span class="myspan"><a @click="moveToOpage(myfollower.uid)">{{myfollower.nickName}}</a></span>
                                    </div>
                                </div>
                                <div v-show="!followers.length" class="text-style">
                                     He haven't Follow others
                                </div>
                            </div>
                            <div v-if="currentPage < totlePage" class="show-more-inner text-center">
                              <button class="show-more-btn" @click="showMore">show more</button>
                            </div>
                            <div v-else v-show="followers.length" class="text-style">
                              -end-
                            </div>
                        </div>
                    </div>
                </section>
            </div><!-- end left side content area -->
    </div>
</template>
<style scoped>

.text-style {
  text-align: center;
  margin-bottom: 20px;
}

.myspan{
  display:inline-block;
  width:115px;
}

</style>
<script>
Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);  
}
export default {
    name: 'Hisfollow',
    data() {
      return {
        currentPage: 1,
        totlePage: 0,
        temp: [],
        followers: []
      }
    },
    mounted() {
      this.requestForFollowers(this.currentPage)
    },
    // 每次监听到temp的变化就把temp加入followers
    watch: {
      temp: function(val){
        this.followers.extend(val)
        val = []
      }
    },
    methods: {
      requestForFollowers(pageNum){
        this.$axios
        .get('/aboutHis/usersFollow/'+ this.$route.query.oID + '/' + pageNum)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.temp = successResponse.data.data
            this.totlePage = successResponse.data.msg
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {})
      },
      showMore(){
        this.requestForFollowers(++this.currentPage)
      },
      moveToOpage(oid){
        this.$router.push({name:'othersAccount',query:{oID:oid}});
      }
    }
}
</script>