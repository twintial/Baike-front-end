<template>
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
                   <!-- :src="'http://localhost:8443/img/userIcon/'+UserInfo.iconURL+'/'+video.icon" -->
                    <img src="http://placehold.it/120x110" alt="profile author img">
                </div>
                <div class="profile-subscribe">
                    <div class="mysub">                   
                        <button @click="subscribeHim">subscribe</button>
                    </div>
                </div>
                <div class="clearfix">
                    <div class="profile-author-name float-left">
                        <h4>{{UserInfo.nickName}}</h4>
                    </div>
                    <div class="profile-author-stats float-right">
                        <ul class="menu">
                            <li>
                                <div class="icon float-left">
                                    <i class="fa fa-video-camera"></i>
                                </div>
                                <div class="li-text float-left">
                                    <p class="number-text"> {{UserInfo.uploadVideoNum}}</p>
                                    <span>Videos</span>
                                </div>
                            </li>
                            <li>
                                <div class="icon float-left">
                                    <i class="fa fa-heart"></i>
                                </div>
                                <div class="li-text float-left">
                                    <p class="number-text">{{UserInfo.favVideoNum}}</p>
                                    <span>favorites</span>
                                </div>
                            </li>
                            <li>
                                <div class="icon float-left">
                                    <i class="fa fa-users"></i>
                                </div>
                                <div class="li-text float-left">
                                    <p class="number-text">{{UserInfo.userFollowerNum}}</p>
                                    <span>followers</span>
                                </div>
                            </li>
                            <li>
                                <div class="icon float-left">
                                    <i class="fa fa-child"></i>
                                </div>
                                <div class="li-text float-left">
                                    <p class="number-text">{{UserInfo.usersFollowNum}}</p>
                                    <span>hisfollows</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </section><!-- End profile top section -->
  
</template>
<style scoped>
.mysub{
    padding-left:16px
}

.myspan{
  display:inline-block;
  width:45px;
}

</style>

<script>
export default {
  name: 'HisprofileHeader',
  data(){
      return{
        UserInfo:[]
      }
  },
  methods:{
      getUserHead(){
        this.$axios
        .get('/aboutHis/' + this.$route.query.oID)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.UserInfo = successResponse.data.data
            this.$emit('func',successResponse.data.data.introduction )
          }
          if (successResponse.data.code === 400) {
            alert(successResponse.data.msg)
          }
        })
        .catch(failResponse => {})
      },
      subscribeHim(){
        this.$axios
        .get('/aboutHis/subscribe/' + this.$route.query.oID)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.UserInfo.userFollowerNum++
            alert(successResponse.data.msg)       
          }
          if (successResponse.data.code === 400) {
            alert(successResponse.data.msg)
          }
        })
        .catch(failResponse => {})
      }
  },
  mounted(){
      this.getUserHead()
  },
  watch:{
    '$route'(to,from) {
        this.getUserHead()
    }
  }
}
</script>