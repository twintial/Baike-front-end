<template >
  <div>
    <div class="off-canvas-wrapper">
      <div class="off-canvas-wrapper-inner" data-off-canvas-wrapper>
        
        <div class="off-canvas-content" data-off-canvas-content>
          <header v-show="(this.$route.path !='/admin')&&(this.$route.path !='/adminlogin')">
            <!-- Top -->
            <section id="top" class="topBar show-for-large">
              <div class="row">
                <div class="medium-6 columns" style="width:100%">
                  <div class="top-button">
                    <ul class="menu float-right">
                      <li v-if="online != -1">
                        Hello!  {{ nickname }}
                      </li>
                      <li>
                        <a @click="logout" v-if="online != -1">logout</a>
                      </li>
                      <li class="dropdown-login" v-if="online == -1">
                        <a class="loginReg" data-toggle="example-dropdown"
                          >login/Register</a
                        >
                        <div class="login-form">
                          <h6 class="text-center">Login Now!</h6>
                          <div>
                            <div class="input-group">
                              <span class="input-group-label"
                                ><i class="fa fa-user"></i
                              ></span>
                              <input
                                class="input-group-field"
                                type="text"
                                placeholder="Enter username"
                                v-model="user.account"
                                required
                              />
                            </div>
                            <div class="input-group">
                              <span class="input-group-label"
                                ><i class="fa fa-lock"></i
                              ></span>
                              <input
                                class="input-group-field"
                                type="password"
                                id="password"
                                placeholder="Enter password"
                                v-model="user.password"
                                required
                              />
                            </div>
                            <input
                              type="submit"
                              name="submit"
                              value="Login Now"
                              @click="login"
                            />
                          </div>

                          <p class="text-center">
                            New here?
                            <a class="newaccount" href="/register"
                              >Create a new Account</a
                            >
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>
            <!-- End Top -->
            <!--Navber-->
            <section id="navBar">
              <nav class="sticky-container" data-sticky-container>
                <div
                  class="sticky topnav"
                  data-sticky
                  data-top-anchor="navBar"
                  data-btm-anchor="footer-bottom:bottom"
                  data-margin-top="0"
                  data-margin-bottom="0"
                  style="width: 100%; background: #fff;"
                  data-sticky-on="large"
                >
                  <div class="row">
                    <div class="large-12 columns">
                      <div
                        class="top-bar show-for-large"
                        id="beNav"
                        style="width: 100%;"
                      >
                        <div class="top-bar-left">
                          <ul class="menu">
                            <li class="menu-text">
                              <a href="/"
                                ><img width="134px" src="@/assets/logo.png" alt="logo"
                              /></a>
                            </li>
                          </ul>
                        </div>
                        <div class="top-bar-right search-btn">
                          <ul class="menu">
                            <li v-bind:class="type1">
                              <i v-bind:class="type2"></i>
                            </li>
                          </ul>
                        </div>
                        <div class="top-bar-right">
                          <ul
                            class="menu vertical medium-horizontal"
                            data-responsive-menu="drilldown medium-dropdown"
                          >
                            <li class="has-submenu">
                              <a href="/"><i class="fa fa-home"></i>Home</a>
                            </li>
                            <li>
                              <a><i class="fa fa-th"></i>category</a>
                              <ul
                                class="submenu menu vertical"
                                data-submenu
                                data-animate="slide-in-down slide-out-up"
                              >
                                <li>
                                  <a @click="searchby('Adventure')"
                                    ><i class="fa fa-th"></i>Adventure</a
                                  >
                                </li>
                                <li>
                                  <a  @click="searchby('Mystery')"
                                    ><i class="fa fa-th"></i>Mystery</a
                                  >
                                </li>
                                <li>
                                  <a  @click="searchby('Thriller')"
                                    ><i class="fa fa-th"></i>Thriller</a
                                  >
                                </li>
                                <li>
                                  <a @click="searchby('Romance')"
                                    ><i class="fa fa-th"></i>Romance</a
                                  >
                                </li>
                                <li>
                                  <a @click="searchby('Comedy')"
                                    ><i class="fa fa-th"></i>Comedy</a
                                  >
                                </li>
                                <li>
                                  <a @click="searchby('Time-travel')"
                                    ><i class="fa fa-th"></i>Time-travel</a
                                  >
                                </li>
                              </ul>
                            </li>
                            <li v-if="online != -1">
                              <a href='/myaccount'
                                ><i class="fa fa-user"></i>Personal Center</a
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div id="search-bar" class="clearfix search-bar-light">
                    <div>
                      <div class="search-input float-left">
                        <input
                          type="search"
                          name="search"
                          v-model="SN"
                          required
                        />
                      </div>
                      <div class="search-btn float-right text-right">
                        <button class="button" @click="searcho">Search</button>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </section>
          </header>
          <!-- End Header -->
          <!--breadcrumbs-->
          <section id="breadcrumb" class="breadMargin" style="height:30px" v-show="(this.$route.path !='/admin')&&(this.$route.path !='/adminlogin')">
          </section>
          <section id="breadcrumb" class="breadMargin" style="height:60px" v-show="(this.$route.path =='/admin')||(this.$route.path =='/adminlogin')">
           <h2 style="color:white" align="center"> Baike Management Interface</h2>
          </section>
          <!--end breadcrumbs-->
          <router-view />
          <!-- footer -->
          <div id="footer-bottom">
            <div class="btm-footer-text text-center">
              <p>2019 © Baike Video Share Sire</p>
            </div>
          </div>
        </div>
        <!--end off canvas content-->
      </div>
      <!--end off canvas wrapper inner-->
    </div>
    <!--end off canvas wrapper-->
  </div>
</template>
<script>
import SearchResultVue from "./components/SearchResult.vue";
export default {
  name: "App",
  data() {
    return {
      nickname: "",
      online: -1,
      SN: "",
      type1: "search",
      type2: "fa fa-search",
      type3: "display:none;",
      user: { account: "", password: "" }
    };
  },
  created() {
    this.isonline();
  },
  mounted() {
    if (this.online != -1) {
      this.getname();
    }
  },
  methods: {
    getname() {
      this.$axios
        .get("/getname/" + this.online)
        .then(successResponse => {
          this.nickname = successResponse.data.nickName;
        })
        .catch(failResponse => {});
    },
    searcho() {
      this.$router.push({ path: "/SearchResult", query: { SR: this.SN } });
      this.$router.go(0);
    },
    searchby(t){
      this.$router.push({ path: "/SearchResult", query: { SR: t } });
      this.$router.go(0);
    },
    login() {
      this.$axios
        .post("/login", {
          account: this.user.account,
          password: this.user.password
        })
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data);
          if (successResponse.data.code === 200) {
            this.$router.push("/");
            this.$router.go(0);
          }
          if (successResponse.data.code === 400) {
            this.$dlg.toast("Account does not exist or password is incorrect！", {messageType: 'error', closeTime: 5})
          }
        })
        .catch(failResponse => {});
    },
    logout() {
      this.$axios
        .post("/logout", {})
        .then(successResponse => {
          this.$router.push("/");
          this.$router.go(0);
        })
        .catch(failResponse => {
          this.$dlg.toast("Fail to log out", {messageType: 'error', closeTime: 5})
        });
    },
    isonline() {
      this.$axios
        .post("/isOnline", {})
        .then(successResponse => {
          this.online = successResponse.data;
          if (this.online != -1) {
          this.getname();
        }
        })
        .catch(failResponse => {
          this.$dlg.toast("error！", {messageType: 'error', closeTime: 5})
        });
    }
  }
};
</script>