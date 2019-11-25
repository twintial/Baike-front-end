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
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                            </div>
                        </div>
                    </div>
                    <div class="row" data-equalizer data-equalize-on="medium" id="test-eq">
                        <div class="large-4 large-offset-1 medium-6 columns">
                            <div class="social-login" data-equalizer-watch>
                                <h5 class="text-center">Login via Social Profile</h5>
                                <div class="social-login-btn facebook">
                                    <a href="#"><i class="fa fa-facebook"></i>login via facebook</a>
                                </div>
                                <div class="social-login-btn twitter">
                                    <a href="#"><i class="fa fa-twitter"></i>login via twitter</a>
                                </div>
                                <div class="social-login-btn g-plus">
                                    <a href="#"><i class="fa fa-google-plus"></i>login via google plus</a>
                                </div>
                                <div class="social-login-btn linkedin">
                                    <a href="#"><i class="fa fa-linkedin"></i>login via linkedin</a>
                                </div>
                            </div>
                        </div>
                        <div class="large-2 medium-2 columns show-for-large">
                            <div class="middle-text text-center hide-for-small-only" data-equalizer-watch>
                                <p>
                                    <i class="fa fa-arrow-left arrow-left"></i>
                                    <span>OR</span>
                                    <i class="fa fa-arrow-right arrow-right"></i>
                                </p>
                            </div>
                        </div>
                        <div class="large-4 medium-6 columns end">
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
                                          用户名不能为空
                                        </span>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-envelope"></i></span>
                                        <input class="input-group-field" type="email" placeholder="Enter your email" v-model="registerInfo.account" required>
                                        <span class="form-error">
                                          邮箱错误
                                        </span>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-lock"></i></span>
                                        <input type="password" id="password" placeholder="Enter your password" v-model="registerInfo.password" required>
                                        <span class="form-error">
                                          密码不能为空
                                        </span>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-lock"></i></span>
                                        <input type="password" placeholder="Re-type your password" required pattern="alpha_numeric" data-equalto="password" v-model="registerInfo.repassword">
                                        <span class="form-error">
                                          密码不一致
                                        </span>
                                    </div>
                                    <button class="button expanded" @click="register">register Now</button>
                                    <p class="loginclick"><a href="login.html">Login here</a><a href="login.html">Already have acoount?</a></p>
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
              alert("ok")
              this.$router.push('/login')
            }
            if (successResponse.data.code === 400) {
              alert(successResponse.data.message)
            }
          })
          .catch(failResponse => {})
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
