<template>
    <!-- registration -->
    <section class="registration">
        <div class="row secBg">
            <div class="large-12 columns">
                <div class="login-register-content">
                    <div class="row collapse borderBottom">
                        <div class="medium-6 large-centered medium-centered">
                            <div class="page-heading text-center">
                                <h3>User login</h3>
                                <p>Login now and to have a nice day in the site</p>
                            </div>
                        </div>
                    </div>
                    <div data-equalizer data-equalize-on="medium" id="test-eq">
                        <div style="width:30%;margin-left:35%">
                            <div class="register-form">
                                <h5 class="text-center">Create your Account</h5>
                                <form method="post" onsubmit="return false;" data-abide novalidate>
                                    <div data-abide-error class="alert callout" style="display: none;">
                                        <p><i class="fa fa-exclamation-triangle"></i> There are some errors in your form.</p>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-user"></i></span>
                                        <input class="input-group-field" type="text" placeholder="Enter your email" v-model="user.account" required>
                                        <span class="form-error">enter email please</span>
                                    </div>

                                    <div class="input-group">
                                        <span class="input-group-label"><i class="fa fa-lock"></i></span>
                                        <input type="password" id="password" placeholder="Enter your password" v-model="user.password" required>
                                        <span class="form-error">enter password please</span>
                                    </div>
                                    <button class="button expanded" @click="login">login Now</button>
                                    <p style="text-align:right"> New Here? <a href="login-register.html">Create a new Account</a></p>
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
  name: 'login',
  data () {
    return {
      user: {account: '', password: ''}
    }
  },
  methods: {
    login () {
      this.$axios
        .post('/login', {
          account: this.user.account,
          password: this.user.password
        })
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data)
          if (successResponse.data.code === 200) {
              this.$router.push('/')
              this.$router.go(0);
          }
          if (successResponse.data.code === 400) {
            alert(successResponse.data.msg)
          }
        })
        .catch(failResponse => {})
    }
  }
}
</script>
