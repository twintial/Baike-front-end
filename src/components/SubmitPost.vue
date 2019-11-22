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
                                    <form data-abide novalidate>
                                        <div data-abide-error class="alert callout" style="display: none;">
                                            <p><i class="fa fa-exclamation-triangle"></i>还有未填写的信息哦</p>
                                        </div>
                                        <div class="row">
                                            <div class="large-12 columns">
                                                <label>标题
                                                    <input type="text" placeholder="在这里填写你的视频标题..." required>
                                                    <span class="form-error">
                                                        视频标题不能为空
                                                    </span>
                                                </label>
                                            </div>
                                            <div class="large-12 columns">
                                                <label >简介
                                                    <textarea placeholder="在这里填写你的视频简介..."></textarea>
                                                </label>
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
                                                            <!-- <div class="btn-group">
                                                                <button class="button" type="button" data-toggle="example-dropdown-1">
                                                                Action
                                                                </button>
                                                                <div class="dropdown-pane" id="example-dropdown-1" data-dropdown data-hover="true" data-hover-pane="true">
                                                                <a href="#" v-if="file.active" @click.prevent="$refs.upload.update(file, {active: false})">Abort</a>
                                                                <a href="#" v-else-if="file.error && file.error !== 'compressing' && $refs.upload.features.html5" @click.prevent="$refs.upload.update(file, {active: true, error: '', progress: '0.00'})">Retry upload</a>
                                                                <a :class="{'dropdown-item': true, disabled: file.success || file.error === 'compressing'}" href="#" v-else @click.prevent="file.success || file.error === 'compressing' ? false : $refs.upload.update(file, {active: true})">Upload</a>
                                                                <a :class="{'dropdown-item': true, disabled: !file.active}" href="#" @click.prevent="file.active ? $refs.upload.update(file, {error: 'cancel'}) : false">Cancel</a>
                                                                <div class="dropdown-divider"></div>
                                                                <a class="dropdown-item" href="#" @click.prevent="$refs.upload.remove(file)">Remove</a>
                                                                </div>
                                                            </div> -->
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                    </div>
                                                    <div class="example-foorer">
                                                    <div class="footer-status float-right">
                                                        Drop: {{$refs.upload ? $refs.upload.drop : false}},
                                                        Active: {{$refs.upload ? $refs.upload.active : false}},
                                                        Uploaded: {{$refs.upload ? $refs.upload.uploaded : true}},
                                                        Drop active: {{$refs.upload ? $refs.upload.dropActive : false}}
                                                    </div>
                                                    <div>
                                                        <file-upload v-show="files.length"
                                                        class="button primary resize-button"
                                                        :post-action="postAction"
                                                        :extensions="extensions"
                                                        :accept="accept"
                                                        :multiple="multiple"
                                                        :directory="directory"
                                                        :size="size || 0"
                                                        :thread="thread < 1 ? 1 : (thread > 5 ? 5 : thread)"
                                                        :drop="drop"
                                                        :drop-directory="dropDirectory"
                                                        :add-index="addIndex"
                                                        :data="data"
                                                        v-model="files"
                                                        @input-filter="inputFilter"
                                                        @input-file="inputFile"
                                                        ref="upload">
                                                        <i class="fa fa-plus"></i>
                                                        上传视频
                                                        </file-upload>
                                                        <!-- <button type="button" class="button success resize-button" v-if="!$refs.upload || !$refs.upload.active" @click.prevent="$refs.upload.active = true">
                                                        <i class="fa fa-arrow-up" aria-hidden="true"></i>
                                                            开始上传
                                                        </button> -->
                                                        <button type="button" class="button alert resize-button"  v-show="$refs.upload && $refs.upload.active" @click.prevent="$refs.upload.active = false">
                                                        <i class="fa fa-stop" aria-hidden="true"></i>
                                                            停止上传
                                                        </button>
                                                    </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                            <div class="large-12 columns">
                                                <div class="upload-video">
                                                    <label for="imgUpload" class="button">Upload Image</label>
                                                    <input type="file" id="imgUpload" class="show-for-sr">
                                                    <span>No file chosen</span>
                                                </div>
                                            </div>
                                            <div class="large-12 columns">
                                                <div class="post-category">
                                                    <label>选择视频种类：
                                                        <select>
                                                            <option value="">one</option>
                                                            <option value="">two</option>
                                                            <option value="">three</option>
                                                        </select>
                                                    </label>
                                                </div>
                                            </div>
                                            <div class="large-12 columns">
                                                <button class="button expanded" type="submit" name="submit">上传</button>
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

#before-update{
    padding: 50px;
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
import ImageCompressor from '@xkeshi/image-compressor'
import FileUpload from 'vue-upload-component'
export default {
  components: {
    FileUpload,
  },
  data() {
    return {
      files: [],
      accept: 'video/mp4',
      extensions: 'mp4',
      // extensions: ['gif', 'jpg', 'jpeg','png', 'webp'],
      // extensions: /\.(gif|jpe?g|png|webp)$/i,
      minSize: 0,
      size: 0,
      multiple: true,
      directory: false,
      drop: true,
      dropDirectory: true,
      addIndex: false,
      thread: 3,
      name: 'file',
      postAction: 'http://localhost:8443/api/upload',
      data: {
        fileID : '',
      },
      // autoCompress: 1024 * 1024,
      uploadAuto: true,
      currentIndex: -1,
    }
  },

  mounted() {
    window.addEventListener('beforeunload', e => this.deleteAllFile(e))
    window.onbeforeunload = e => {
      return '是否确定离开'
    };
  },
  methods: {
    inputFilter(newFile, oldFile, prevent) {
      if (newFile && !oldFile) {
        // Before adding a file
        // 添加文件前
        // Filter system files or hide files
        // 过滤系统文件 和隐藏文件
        if (/(\/|^)(Thumbs\.db|desktop\.ini|\..+)$/.test(newFile.name)) {
          return prevent()
        }
        // Filter php html js file
        // 过滤 php html js 文件
        if (/\.(php5?|html?|jsx?)$/i.test(newFile.name)) {
          return prevent()
        }
        // Automatic compression
        // 自动压缩
        // if (newFile.file && newFile.type.substr(0, 6) === 'image/' && this.autoCompress > 0 && this.autoCompress < newFile.size) {
        //   newFile.error = 'compressing'
        //   const imageCompressor = new ImageCompressor(null, {
        //     convertSize: Infinity,
        //     maxWidth: 512,
        //     maxHeight: 512,
        //   })
        //   imageCompressor.compress(newFile.file)
        //     .then((file) => {
        //       this.$refs.upload.update(newFile, { error: '', file, size: file.size, type: file.type })
        //     })
        //     .catch((err) => {
        //       this.$refs.upload.update(newFile, { error: err.message || 'compress' })
        //     })
        // }
      }
      if (newFile && (!oldFile || newFile.file !== oldFile.file)) {
        // Create a blob field
        // 创建 blob 字段
        newFile.blob = ''
        let URL = window.URL || window.webkitURL
        if (URL && URL.createObjectURL) {
          newFile.blob = URL.createObjectURL(newFile.file)
        }
        // Thumbnails
        // 缩略图
        newFile.thumb = ''
        if (newFile.blob && newFile.type.substr(0, 6) === 'image/') {
          newFile.thumb = newFile.blob
        }
      }
    },
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
          // $.ajax({
          //   type: 'DELETE',
          //   url: '/upload/delete?id=' + oldFile.response.id,
          // })
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
        if (successResponse.data.code === 200) {
          alert(successResponse.data)
          alert(this.responseResult)
          }
        })
        .catch(failResponse => {})
    },

    deleteAllFile(e){
      for (let i in this.files){
        this.deleteFile(this.files[i].response)
      }
    }
  }
}
</script>
