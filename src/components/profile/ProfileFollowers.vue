<template>
    <div>
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
                                <div v-for="(myfollower, index) in followers" :key="index" class="large-2 small-6 medium-3 columns">
                                    <div class="follower">
                                        <div class="follower-img">
                                            <img src="http://placehold.it/115x100" alt="followers">
                                        </div>
                                        
                                        <span class="myspan"><a @click="moveToOpage(myfollower.uid)">{{myfollower.nickName}}</a></span>
                                    </div>
                                </div>
                                <div v-show="!followers.length" class="text-style">
                                  You haven't got a Follower
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

.mybutton{
  width:115px;
  height:100px;
}

</style>
<script>
Array.prototype.extend = function (other_array) {
    other_array.forEach(function(v) {this.push(v)}, this);  
}
export default {
    name: 'Myfollowers',
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
        .get('/aboutMe/userFollowers/' + pageNum)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.temp = successResponse.data.data
            this.totlePage = successResponse.data.msg
            
            this.$dlg.toast("success", {messageType: 'success', closeTime: 5})
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