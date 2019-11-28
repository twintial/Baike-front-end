<template>
    <div>
            <!-- right side content area -->
            <div class="large-8 columns profile-inner">
                <!-- profile settings -->
                <section class="profile-settings">
                    <div class="row secBg">
                        <div class="large-12 columns">
                            <div class="heading">
                                <i class="fa fa-gears"></i>
                                <h4>Profile Settings</h4>
                            </div>
                            <div class="row">
                                <div class="large-12 columns">
                                    <div class="setting-form">
                                            <div class="setting-form-inner">
                                                <div class="row">
                                                    <div class="medium-6 columns">
                                                        <label>Your NickName:
                                                            <input type="text" v-model="Myname" placeholder="enter your nick name..">
                                                        </label>
                                                    </div>
                                                    <div class="medium-12 columns">
                                                        <label>Your Introduction:
                                                            <textarea v-model="Myintro" placeholder="enter your introduction.."></textarea>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="setting-form-inner">
                                                <button class="button expanded" @click="editInfor">update now</button>
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section><!-- End profile settings -->
            </div><!-- end left side content area -->
        </div>
</template>
<script>
export default {
  name: 'profileSetting',
  props:["userintroduction" , "username"],
  data(){
      return{
          Myname: this.username,
          Myintro: this.userintroduction
      }
  },
  methods:{
      editInfor(){
          if(this.Myname == ''){
              alert("Nick name can not be empty")
          }else{
              this.$axios
                .post('/aboutMe/setting', {
                    nickName: this.Myname,
                    introduction: this.Myintro
                })
                .then(successResponse => {
                    this.responseResult = JSON.stringify(successResponse.data)
                    if (successResponse.data.code === 200) {
                        alert("Edit Success")
                        location.reload()
                }
                if (successResponse.data.code === 400) {
                    alert(successResponse.data.message)
                }
                })
                .catch(failResponse => {})
            } 
        },
    },
  mounted(){
  }
}
</script>