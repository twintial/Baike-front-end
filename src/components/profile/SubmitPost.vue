<template>
    <div>
          <!-- right side content area -->
          <div class="large-8 columns profile-inner">
              <!-- profile settings -->
              <section class="submit-post">
                  <div class="row secBg">
                      <div class="large-12 columns">
                          <div class="heading">
                              <i class="fa fa-pencil-square-o"></i>
                              <h4>upload your new video</h4>
                          </div>
                          <div class="row">
                              <div class="large-12 columns">
                                  <form data-abide novalidate onsubmit="return false;">
                                      <div class="row">
                                          <div class="large-12 columns">
                                              <label>title:
                                                  <input v-model="videoName" type="text" placeholder="fill in your title here..." required>
                                                  <span class="form-error">
                                                      video title can't be empty
                                                  </span>
                                              </label>
                                          </div>
                                          <div class="large-12 columns">
                                              <label >description:
                                                  <textarea v-model="introduction" placeholder="fill in your description here..."></textarea>
                                              </label>
                                          </div>
                                          <div class="large-12 columns">
                                            <div>
                                              <label>choose a cover for you video:</label>
                                              <label for="videoCover"> 
                                                <img id="cover-preview" :src="coverFiles.length ? url : 'http://localhost:8443/img/cover_default.jpg'"/>
                                              </label>
                                            </div>
                                            <div v-show="false">
                                              <file-upload
                                                extensions="gif,jpg,jpeg,png,webp"
                                                accept="image/png,image/gif,image/jpeg,image/webp"
                                                name="videoCover"
                                                post-action="http://localhost:8443/api/cover/upload"
                                                :drop="false"
                                                v-model="coverFiles"
                                                @input-filter="coverInputFilter"
                                                @input-file="coverInputFile"
                                                ref="vCover">
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
                                                          <th>NO</th>
                                                          <th>title</th>
                                                          <th>size</th>
                                                          <th>speed</th>
                                                          <th>state</th>
                                                      </tr>
                                                      </thead>
                                                      <tbody>
                                                      <tr v-if="!files.length">
                                                          <td id="before-update" colspan="7">
                                                          <div class="text-center p-5">
                                                              <h4>drop video file or directory to this page<br/>or</h4>
                                                              <label :for="name" class="button primary">upload</label>
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
                                                          <td v-else-if="file.success">success</td>
                                                          <td v-else-if="file.active">uploading</td>
                                                          <td v-else>waiting</td>
                                                      </tr>
                                                      </tbody>
                                                  </table>
                                                  </div>
                                                  <div>
                                                      <file-upload v-show="files.length" style="margin-top:15px; margin-bottom:15px"
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
                                                      upload
                                                      </file-upload>
                                                      <button type="button" class="button alert resize-button"  v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false">
                                                      <i class="fa fa-stop" aria-hidden="true"></i>
                                                          stop
                                                      </button>
                                                  </div>
                                              </div>
                                            </div>
                                          </div>
                                          <div class="large-12 columns">
                                              <div class="post-category">
                                                  <label>category:
                                                      <select v-model="tag">
                                                          <option value="Adventure" selected>Adventure</option>
                                                          <option value="Mystery">Mystery</option>
                                                          <option value="Thriller">Thriller</option>
                                                          <option value="Romance">Romance</option>
                                                          <option value="Comedy">Comedy</option>
                                                          <option value="Time-travel">Time-travel</option>
                                                      </select>
                                                  </label>
                                              </div>
                                          </div>
                                          <div class="large-12 columns" style="text-align:center">
                                              <button id="submit-button" class="button primary" @click="submitVideo">submit</button>
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
</template>

<style scoped>
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
// import Cropper from 'cropperjs'
import FileUpload from 'vue-upload-component'
export default {
  components: {
    FileUpload
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
      url: '',
      // 判断是否是上传操作，防止误删
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
            this.$refs.upload.update(newFile, { error: 'fail to upload' })
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
          // 暂时不使用，上传时也会出现
            // this.$dlg.alert('删除失败', {messageType: 'error'});
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
      // 自动上传
      if (Boolean(newFile) !== Boolean(oldFile) || oldFile.error !== newFile.error) {
        if (this.uploadAuto && !this.$refs.vCover.active) {
          this.$refs.vCover.active = true
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
      for (let i = 0; i < this.files.length; i++){
        this.deleteFile(this.files[i].response)
      }
      this.deleteFile(this.coverFiles[0].response)
    },
    initPage(){
      this.videoName = ''
      this.introduction = ''
      this.files = []
      this.coverFiles = []
      this.tag = ''
    },
    submitVideo(){
      const key = this.$dlg.mask('uploading...')
      if (!this.files.length){
        this.$dlg.close(key)
        this.$dlg.toast("please upload at least one video", {messageType: 'error', closeTime: 5})
        return
      }
      if (!this.coverFiles.length){
        this.$dlg.close(key)
        this.$dlg.toast("please choose a cover for you video", {messageType: 'error', closeTime: 5})
        return
      }
      let videoUUIDs = []
      let videoNames = []
      for (let i = 0; i < this.files.length; i++){
        videoUUIDs[i] = this.files[i].response.uuid + "." + this.files[i].response.type
        videoNames[i] = this.files[i].name
      }
      this.$axios
        .post('/video/submit', {
          videoName: this.videoName,
          introduction: this.introduction,
          tag: this.tag,
          coverUUID: this.coverFiles[0].response.uuid + "." + this.coverFiles[0].response.type,
          videoFilesUUID: videoUUIDs,
          videoNames: videoNames
        })
        .then(successResponse => {
          this.$dlg.close(key)
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
            this.initPage()
            this.$dlg.toast(successResponse.data.data, {messageType: 'success', closeTime: 5})
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {
          this.$dlg.close(key)
        })
    }
  }
}
</script>
