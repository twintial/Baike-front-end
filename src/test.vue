<template>
  <!-- <video src="http://localhost:8443/static/特典1.mp4" controls="controls" width="100%">
  </video> -->
  <div>
    <v-uploader file-size-limit='2GB' upload-file-url="http://localhost:8443/cover/upload" @don @done="uploadDone"></v-uploader>
    <v-uploader file-type-exts='mp4' file-size-limit='2GB' upload-file-url="http://localhost:8443/cover/upload" @done="uploadDone" :multiple="true"></v-uploader>
  </div>
</template>

<script>
export default {
  methods: {
    uploadDone(files){
      if(files && Array.isArray(files) && files.length){
        this.$dlg.alert("success", {messageType: 'success'});
      }
    }
  }
}
</script>
