<template>
    <!-- registration -->
    <section class="registration">
        <div class="row secBg">
            <div class="large-12 columns">
                <div class="login-register-content">
                    <div class="row collapse borderBottom">
                        <div class="medium-6 large-centered medium-centered">
                            <div class="page-heading text-center">
                                <h3>User Registeration</h3>
                                <p>Create an account for yourself and have more privilege in this site</p>
                            </div>
                        </div>
                    </div>
                    <div data-equalizer data-equalize-on="medium" id="test-eq">
                        <div style="width:30%;margin-left:35%">
                            <div class="register-form">
                                <h5 class="text-center">Create your Account</h5>
                                <form id="register" onsubmit="return false;" data-abide novalidate>
                                    <div data-abide-error class="alert callout" style="display: none;">
                                        <p><i class="fa fa-exclamation-triangle"></i> There are some errors in your form.</p>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-user"></i></span>
                                        <input class="input-group-field" type="text" placeholder="Enter your username" v-model="registerInfo.nickName" required>
                                        <span class="form-error">
                                          username cant't be empty
                                        </span>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-envelope"></i></span>
                                        <input class="input-group-field" type="email" placeholder="Enter your email" v-model="registerInfo.account" required>
                                        <span class="form-error">
                                          a mail format is needed
                                        </span>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-lock"></i></span>
                                        <input type="password" id="password" placeholder="Enter your password" v-model="registerInfo.password" required>
                                        <span class="form-error">
                                          password can't be empty
                                        </span>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-lock"></i></span>
                                        <input type="password" placeholder="Re-type your password" required pattern="alpha_numeric" data-equalto="password" v-model="registerInfo.repassword">
                                        <span class="form-error">
                                          different password
                                        </span>
                                    </div>
                                    <button class="button expanded" @click="register">register Now</button>
                                    <p style="text-align:right"> Already have acoount? <a href="/login">Login here</a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name: 'resgister',
  data () {
    return {
      registerInfo: {nickName: '', account: '', password: '', repassword: ''}
    }
  },
  methods: {
    register () {
      if (this.registerInfo.password !== '' && this.registerInfo.password === this.registerInfo.repassword) {
        this.$axios
          .post('/register', {
            nickName: this.registerInfo.nickName,
            account: this.registerInfo.account,
            password: this.registerInfo.password
          })
          .then(successResponse => {
            this.responseResult = JSON.stringify(successResponse.data)
            if (successResponse.data.code === 200) {
              this.$dlg.toast(successResponse.data.msg, {messageType: 'success', closeTime: 5});
              this.$router.push('/login')
            }
            if (successResponse.data.code === 400) {
              this.$dlg.toast(successResponse.data.msg, {messageType: 'error', closeTime: 5});
            }
          })
          .catch(failResponse => {
            if (failResponse.code === 400) {
              console.log(failResponse.data)
            }
          })
      }
    }
  }
  // 前段检测暂时不使用
  // mounted: function () {
  //   $("#register").on("forminvalid.zf.abide", function(ev,frm) {
  //   alert("Form is valid, finally!");
  //   // do something perhaps
  //   });
  // }
}
</script>
