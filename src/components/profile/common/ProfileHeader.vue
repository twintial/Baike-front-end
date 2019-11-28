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
                                    <span>myfollows</span>
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
        .post('/aboutMe', {
        })
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.UserInfo = successResponse.data.data
            this.$emit('func',successResponse.data.data.introduction , successResponse.data.data.nickName)
          }
          if (successResponse.data.code === 400) {
            alert(successResponse.data.msg)
          }
        })
        .catch(failResponse => {})
      },
      minusFollower(){
          if( this.UserInfo.usersFollowNum != 0){
            this.UserInfo.usersFollowNum--
          }
      },
      minusFavVideo(){
          if( this.UserInfo.favVideoNum != 0){
            this.UserInfo.favVideoNum--
          }
      },
      minusMyVideo(){
          if( this.UserInfo.uploadVideoNum != 0){
            this.UserInfo.uploadVideoNum--
          }
      }
  },
  mounted(){
      this.getUserHead()
  }
}
</script>