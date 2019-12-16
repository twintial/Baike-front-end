// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'jquery'
import vUploader from 'v-uploader'
import vDialogs from 'v-dialogs'


Vue.use(vDialogs, { language: 'en' })

const VueUploadComponent = require('vue-upload-component')
Vue.component('file-upload', VueUploadComponent)
// v-uploader plugin global config
const uploaderConfig = {
  // set the way to show upload message(upload fail message)
  showMessage: (vue, message) => {
    //using v-dialogs to show message
    vue.$dlg.alert(message, {messageType: 'error'});
  }
};

// install plugin with options
Vue.use(vUploader, uploaderConfig);



// 引用axios，并设置基础URL为后端服务api地址
var axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8443/api'
axios.defaults.withCredentials = true
// 将API方法绑定到全局
Vue.prototype.$axios = axios

Vue.config.productionTip = false


// 视频上传格式化大小
Vue.filter('formatSize', function (size) {
  if (size > 1024 * 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024 / 1024).toFixed(2) + ' TB'
  } else if (size > 1024 * 1024 * 1024) {
    return (size / 1024 / 1024 / 1024).toFixed(2) + ' GB'
  } else if (size > 1024 * 1024) {
    return (size / 1024 / 1024).toFixed(2) + ' MB'
  } else if (size > 1024) {
    return (size / 1024).toFixed(2) + ' KB'
  }
  return size.toString() + ' B'
})
// 时间戳转换为可读时间
Vue.filter('timestampToDate', function (timestamp) {
  var d = new Date(timestamp);    //根据时间戳生成的时间对象
  var date = (d.getFullYear()) + "-" + 
            (d.getMonth() + 1) + "-" +
            (d.getDate())
  return date
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
