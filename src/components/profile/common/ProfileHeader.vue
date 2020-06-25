<template>
  <section class="topProfile">
    <label for="backavatar">
    <!-- <div class="myback img-point" :style='{backgroundImage:"url("+ "http://localhost:5000/img/userIcon/" + backdata.BackMyIcon + ")"}'></div> -->
    <div class="myback img-point" :style="{backgroundImage:`url(${backcoverFiles.length ? backUrl: backdata.BackUrl + backdata.BackMyIcon})`}"></div>
    
    </label>
    <div v-show="false">
        <file-upload
        extensions="gif,jpg,jpeg,png,webp"
        accept="image/png,image/gif,image/jpeg,image/webp"
        name="backavatar"
        :post-action="resourceUrl+ '/api/aboutMe/uploadback'"
        :drop="false"
        :data="backdata"
        v-model="backcoverFiles"
        @input-filter="coverbackInputFilter"
        @input-file="coverbackInputFile"
        ref="backcover">
        Upload backavatar
        </file-upload>
    </div>
    <div class="profile-stats">
        <div class="row secBg">
            <div class="large-12 columns">
                <div class="profile-author-img">
                    <label for="avatar"> 
                        <img class="img-point" :src="coverFiles.length ? url : resourceUrl + '/img/userIcon/'+data.MyIcon" alt="profile author img">
                    </label>
                    <div v-show="false">
                        <file-upload
                        extensions="gif,jpg,jpeg,png,webp"
                        accept="image/png,image/gif,image/jpeg,image/webp"
                        name="avatar"
                        :post-action="resourceUrl + '/api/aboutMe/upload'"
                        :drop="false"
                        :data="data"
                        v-model="coverFiles"
                        @input-filter="coverInputFilter"
                        @input-file="coverInputFile"
                        ref="cover">
                        Upload avatar
                        </file-upload>
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

<style scoped>
.img-point {
  cursor: pointer;
}

.myback {
    background-repeat: no-repeat;
    background-size:100% 100%;
    -moz-background-size:100% 100%;
    position: relative;
    height: 350px;
}


</style>
<script>
import resourceUrl from '@/js/url.js'

export default {
  name: 'HisprofileHeader',
  data(){
      return{
        resourceUrl: resourceUrl,
        UserInfo:[],
        coverFiles: [],
        backcoverFiles:[],
        url: '',
        backUrl: '',
        data: {
            UserID: '',
            MyIcon: 'user_default.jpg'
        },
        backdata: {
            BackUserID: '',
            BackUrl: resourceUrl + '/img/userIcon/',
            BackMyIcon: 'back_default.jpg'
        },
      }
  },
  methods:{
      deleteFile(response){
    },
      getUserHead(){
        this.$axios
        .post('/aboutMe', {
        })
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.UserInfo = successResponse.data.data
            this.UserInfo.nickName = this.UserInfo.u.nickName
            this.data.UserID = successResponse.data.data.u.uid
            this.data.MyIcon = successResponse.data.data.u.iconURL
            this.backdata.BackUserID = successResponse.data.data.u.uid
            this.backdata.BackMyIcon = successResponse.data.data.u.backgroundIconURL
            this.$emit('func',successResponse.data.data.u.introduction , successResponse.data.data.u.nickName)
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
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
      },
      coverInputFile(newFile, oldFile, prevent) {
      // 自动上传
        if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) { 
          if (true && !this.$refs.cover.active) {
          this.$refs.cover.active = true
        //   location.reload()            
          }
        }
      },
      coverInputFilter(newFile, oldFile, prevent){
        if (newFile && !oldFile) {
            if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
            this.$dlg.toast("Please upload a image", {messageType: 'error', closeTime: 5})
            return prevent()
            }
        }
        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
            this.url = URL.createObjectURL(newFile.file)
            }
            // 删除上一张图片
            if (this.coverFiles.length){
                this.deleteFile(this.coverFiles[0].response)
            }
        }
      },
      coverbackInputFile(newFile, oldFile, prevent) {
      // 自动上传
        if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) { 
          if (true && !this.$refs.backcover.active) {
          this.$refs.backcover.active = true
        //   location.reload()            
          }
        }
      },
      coverbackInputFilter(newFile, oldFile, prevent){
        if (newFile && !oldFile) {
            if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
            this.$dlg.toast("Please upload a image", {messageType: 'error', closeTime: 5})
            return prevent()
            }
        }
        if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
            let URL = window.URL || window.webkitURL
            if (URL && URL.createObjectURL) {
            this.backUrl = URL.createObjectURL(newFile.file)
            }
            // 删除上一张图片
            if (this.backcoverFiles.length){
                this.deleteFile(this.backcoverFiles[0].response)
            }
        }
      },
  },
  mounted(){
      this.getUserHead()
  }
}
</script>