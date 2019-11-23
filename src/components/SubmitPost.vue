<template>
    <div>
        <!-- profile top section -->
        <section class="topProfile topProfile-inner" style="background: url('images/profile-bg1.png') no-repeat;">
            <div class="main-text">
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
                                        <li class="clearfix"><a href="profile-comments.html"><i class="fa fa-comments-o"></i>comments<span class="float-right">26</span></a></li>
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
                <!-- profile settings -->
                <section class="submit-post">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="heading">
                                <i class="fa fa-pencil-square-o"></i>
                                <h4>上传你的新视频</h4>
                            </div>
                            <div class="row">
                                <div class="large-12 columns">
                                    <form data-abide novalidate onsubmit="return false;">
                                        <div data-abide-error class="alert callout" style="display: none;">
                                            <p><i class="fa fa-exclamation-triangle"></i>还有未填写的信息哦</p>
                                        </div>
                                        <div class="row">
                                            <div class="large-12 columns">
                                                <label>标题:
                                                    <input v-model="videoName" type="text" placeholder="在这里填写你的视频标题..." required>
                                                    <span class="form-error">
                                                        视频标题不能为空
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="large-12 columns">
                                                <label >简介:
                                                    <textarea v-model="introduction" placeholder="在这里填写你的视频简介..."></textarea>
                                                </label>
                                            </div>
                                            <div class="large-12 columns">
                                              <div>
                                                <label>选择你的视频封面:</label>
                                                <label for="avatar"> 
                                                  <img id="cover-preview" :src="coverFiles.length ? url : 'https://www.gravatar.com/avatar/default?s=200&r=pg&d=mm'"/>
                                                </label>
                                              </div>
                                              <div v-show="false">
                                                <file-upload
                                                  extensions="gif,jpg,jpeg,png,webp"
                                                  accept="image/png,image/gif,image/jpeg,image/webp"
                                                  name="avatar"
                                                  post-action="http://localhost:8443/api/cover/upload"
                                                  :drop="false"
                                                  v-model="coverFiles"
                                                  @input-filter="coverInputFilter"
                                                  @input-file="coverInputFile"
                                                  ref="cover">
                                                  Upload avatar
                                                </file-upload>
                                              </div>
                                            </div>
                                            <div class="large-12 columns">
                                              <div class="video-upload">
                                                <div v-show="$refs.upload && $refs.upload.dropActive" class="drop-active">
                                                        <h3>Drop files to upload</h3>
                                                </div>
                                                <!-- 主要都在这里 -->
                                                <div>
                                                    <div>
                                                    <table class="hover unstriped">
                                                        <thead>
                                                        <tr>
                                                            <th>编号</th>
                                                            <th>视频名称</th>
                                                            <th>大小</th>
                                                            <th>上传速度</th>
                                                            <th>状态</th>
                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr v-if="!files.length">
                                                            <td id="before-update" colspan="7">
                                                            <div class="text-center p-5">
                                                                <h4>拖拽视频或文件夹到此页面<br/>or</h4>
                                                                <label :for="name" class="button primary">上传视频</label>
                                                            </div>
                                                            </td>
                                                        </tr>
                                                        <tr v-for="(file, index) in files" :key="file.id" @mouseover="currentIndex = index" @mouseout="currentIndex = -1">
                                                            <td>P{{index + 1}}</td>
                                                            <td>
                                                            <div class="filename">
                                                                {{file.name}}
                                                                <a @click.prevent="$refs.upload.remove(file)"><i v-show="isShow(index)" class="fa fa-trash i-right" aria-hidden="true"></i></a>
                                                            </div>
                                                            <div class="progress round" role="progressbar" v-if="file.active || file.progress !== '0.00'">
                                                                <span class="progress-meter" :style="{width: file.progress + '%'}">
                                                                <p class="progress-meter-text">{{file.progress}}%</p>
                                                                </span>
                                                            </div>
                                                            </td>
                                                            <td>{{file.size | formatSize}}</td>
                                                            <td v-if="$refs.upload.active">{{file.speed | formatSize}}/s</td>
                                                            <td v-else>-</td>

                                                            <td v-if="file.error">{{file.error}}</td>
                                                            <td v-else-if="file.success">成功</td>
                                                            <td v-else-if="file.active">上传中</td>
                                                            <td v-else>等待上传</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    </div>
                                                    <div>
                                                        <file-upload v-show="files.length"
                                                        class="button primary resize-button"
                                                        :name="name"
                                                        :post-action="postAction"
                                                        :extensions="extensions"
                                                        :accept="accept"
                                                        :multiple="true"
                                                        :directory="false"
                                                        :size="0"
                                                        :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
                                                        :drop="true"
                                                        :drop-directory="true"
                                                        :add-index="false"
                                                        v-model="files"
                                                        @input-filter="inputFilter"
                                                        @input-file="inputFile"
                                                        ref="upload">
                                                        <i class="fa fa-plus"></i>
                                                        上传视频
                                                        </file-upload>
                                                        <button type="button" class="button alert resize-button"  v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false">
                                                        <i class="fa fa-stop" aria-hidden="true"></i>
                                                            停止上传
                                                        </button>
                                                    </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div class="large-12 columns">
                                                <div class="post-category">
                                                    <label>选择视频种类:
                                                        <select v-model="tag">
                                                            <option value="动画" selected>动画</option>
                                                            <option value="旅游">旅游</option>
                                                            <option value="美少女">美少女</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="large-12 columns" style="text-align:center">
                                                <button id="submit-button" class="button primary" @click="submitVideo">立即投稿</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><!-- End profile settings -->
            </div><!-- end left side content area -->
        </div>
    </div>
</template>

<style>
a {
  color: #000;
  text-decoration: none; 
}
a:hover .fa-trash{ 
   color:red; 
}
thead {
  color: #000;
}
tbody {
  color: #000
}
.i-right {
  float: right;
  margin-top: 7px;
}
.resize-button {
  padding-top: 10px;
  padding-bottom: 10px;
}

#before-update {
  padding: 50px;
}
#cover-preview {
  width: 370px;
  height: 220px;
  cursor: pointer;
  border-radius: 5px;
  margin-bottom: 40px;
}
#submit-button {
  margin-bottom: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  padding-left: 50px;
  padding-right: 50px;
}

.video-upload .filename {
  margin-bottom: .3rem
}

.video-upload .example-foorer {
  padding: .5rem 0;
  border-top: 1px solid #e9ecef;
  border-bottom: 1px solid #e9ecef;
}

.video-upload .footer-status {
  padding-top: .4rem;
}
.video-upload .drop-active {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  z-index: 9999;
  opacity: .6;
  text-align: center;
  background: #000;
}
.video-upload .drop-active h3 {
  margin: -.5em 0 0;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  -webkit-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 40px;
  color: #fff;
  padding: 0;
}
</style>

<script>
// import ImageCompressor from '@xkeshi/image-compressor'
import Cropper from 'cropperjs'
import FileUpload from 'vue-upload-component'
export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      // 视频信息
      videoName: '',
      introduction: '',
      tag: '',
      // 视频上传
      files: [],
      accept: 'video/mp4',
      extensions: 'mp4',
      // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
      // extensions: /\.(gif|jpe?g|png|webp)$/i,
      minSize: 0,
      thread: 3,
      name: 'file',
      postAction: 'http://localhost:8443/api/video/upload',
      uploadAuto: true,
      currentIndex: -1,
      // 视频封面上传
      coverFiles: [],
      cropper: false,
      url: '',
    }
  },


  mounted() {
    window.addEventListener('beforeunload', e => {
      this.deleteAllFile(e)
    })
    // window.addEventListener("unload", function(event) { 
      
    // })
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统非视频文件，之后添加别的视频类型
        if (!/\.(mp4)$/i.test(newFile.name)) {
          return prevent()
        }
      }
    },
    // 视频上用传函数
    // add, update, remove File Event
    inputFile(newFile, oldFile) {
      if (newFile && oldFile) {
        // update
        if (newFile.active && !oldFile.active) {
          // beforeSend
          // min size
          if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
            this.$refs.upload.update(newFile, { error: '上传失败' })
          }
        }
        if (newFile.progress !== oldFile.progress) {
          // progress
        }
        if (newFile.error && !oldFile.error) {
          // error
        }
        if (newFile.success && !oldFile.success) {
          // success
        }
      }
      if (!newFile && oldFile) {
        // remove
        if (oldFile.success && oldFile.response.uuid) {
          this.deleteFile(oldFile.response)
        }
      }
      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.upload.active) {
          this.$refs.upload.active = true
        }
      }
    },

    // is show garbage
    isShow(index) {
      return this.currentIndex === index
    },
    deleteFile(response){
      this.$axios
        .delete('/upload/' + response.uuid + '/' + response.type)
        .then(successResponse => {
        this.responseResult = JSON.stringify(successResponse.data)
        if (successResponse.data === false) {
            this.$dlg.alert('删除失败', {messageType: 'error'});
          }
        })
        .catch(failResponse => {})
    },

    // 封面上传用函数
    coverInputFile(newFile, oldFile, prevent) {
      if (newFile && oldFile) {
        if (newFile.active && !oldFile.active) {
        }
      }
      // Automatically activate upload
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.cover.active) {
          this.$refs.cover.active = true
        }
      }
    },
    coverInputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        if (!/\.(gif|jpg|jpeg|png|webp)$/i.test(newFile.name)) {
          this.alert('你上传的不是一张图片')
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


    // 离开页面时调用，删除所有上传文件
    deleteAllFile(e){
      for (let i in this.files){
        this.deleteFile(this.files[i].response)
      }
      this.deleteFile(this.coverFiles[0].response)
    },

    submitVideo(){
      if (!this.files.length){
        this.$dlg.alert("请上传视频", {messageType: 'error'})
        return
      }
      if (!this.coverFiles.length){
        this.$dlg.alert("请给你的视频选择封面", {messageType: 'error'})
        return
      }
      let videoUUIDs = []
      let videoNames = []
      for (let i in this.files){
        videoUUIDs[i] = this.files[i].response.uuid + "." + this.files[i].type
          .substr(this.files[i].type.lastIndexOf("/") + 1)
        videoNames[i] = this.files[i].name
      }
      this.$axios
        .post('/video/submit', {
          videoName: this.videoName,
          introduction: this.introduction,
          tag: this.tag,
          coverUUID: this.coverFiles[0].response.uuid + "." + this.coverFiles[0].type
            .substr(this.coverFiles[0].type.lastIndexOf("/") + 1),
          videoFilesUUID: videoUUIDs,
          videoNames: videoNames
        })
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.$dlg.alert(successResponse.data.data, {messageType: 'success'})
          }
          if (successResponse.data.code === 400) {
            this.$dlg.alert(successResponse.data.message, {messageType: 'error'})
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>
