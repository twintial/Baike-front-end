<template>
  <!-- registration -->
  <section class="registration">
    <div class="row secBg">
      <div class="large-12 columns">
        <div class="login-register-content">
          <div class="row collapse borderBottom"></div>
          <div data-equalizer data-equalize-on="medium" id="test-eq">
            <div style="width:30%;margin-left:35%">
              <div class="register-form">
                <h5 class="text-center">Admin login</h5>
                <form
                  method="post"
                  onsubmit="return false;"
                  data-abide
                  novalidate
                >
                  <div
                    data-abide-error
                    class="alert callout"
                    style="display: none;"
                  >
                    <p>
                      <i class="fa fa-exclamation-triangle"></i> There are some
                      errors in your form.
                    </p>
                  </div>
                  <div class="input-group">
                    <span class="input-group-label"
                      ><i class="fa fa-user"></i
                    ></span>
                    <input
                      class="input-group-field"
                      type="text"
                      placeholder="Enter your email"
                      v-model="admin.account"
                      required
                    />
                    <span class="form-error"></span>
                  </div>

                  <div class="input-group">
                    <span class="input-group-label"
                      ><i class="fa fa-lock"></i
                    ></span>
                    <input
                      type="password"
                      id="password"
                      placeholder="Enter your password"
                      v-model="admin.psw"
                      required
                    />
                    <span class="form-error"></span>
                  </div>
                  <button class="button expanded" @click="login">
                    login Now
                  </button>
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
  name: "adminLogin",
  data() {
    return {
      admin: { account: "", psw: "" }
    };
  },
  methods: {
    login() {
      if (this.admin.account == "") alert("Please fill in account");
      else if (this.admin.psw == "") alert("Please fill in password");
      else {
        this.$axios
          .post("/AdminLogin", {
            account: this.admin.account,
            password: this.admin.psw
          })
          .then(successResponse => {
            this.responseResult = JSON.stringify(successResponse.data);
            if (this.responseResult === "true") {
              this.$router.push("/admin");
            } else if (this.responseResult === "false") {
              alert("This administrator does not exist!");
            }
          })
          .catch(failResponse => {});
      }
    }
  }
};
</script>