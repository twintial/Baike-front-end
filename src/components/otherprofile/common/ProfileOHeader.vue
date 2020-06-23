<template>
  <section class="topProfile">
    <div class="myback" :style='{backgroundImage:"url("+ "http://localhost:5000/img/userIcon/" + MyBackIcon + ")"}'></div>
    <div class="profile-stats">
        <div class="row secBg">
            <div class="large-12 columns">
                <div class="profile-author-img">
                    <img  :src="'http://localhost:5000/img/userIcon/'+ MyIcon" alt="profile author img">
                </div>
                <div class="profile-subscribe">
                    <div>                   
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

.myback {
    background-repeat: no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    position: relative;
    height: 350px;
}


</style>

<script>
export default {
  name: 'HisprofileHeader',
  data(){
      return{
        UserInfo:[],
        MyIcon: 'user_default.jpg',
        MyBackIcon: 'back_default.jpg'
      }
  },
  methods:{
      getUserHead(){
        this.$axios
        .get('/aboutHis/' + this.$route.query.oID)
        .then(successResponse => {
          if (successResponse.data.code === 200) {
            this.UserInfo = successResponse.data.data
            this.MyIcon = successResponse.data.data.iconURL
            this.MyBackIcon = successResponse.data.data.backgroundIconURL
            this.$emit('func',successResponse.data.data.introduction )
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
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
            this.$dlg.toast(successResponse.data.msg, {messageType: 'success', closeTime: 5})   
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})  
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