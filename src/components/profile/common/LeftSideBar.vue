<template>
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
                                <li class="clearfix"><a @click="changeView(0)" :class="{active:toPos==0}"><i class="fa fa-user"></i>about me</a></li>
                                <li class="clearfix"><a @click="changeView(1)" :class="{active:toPos==1}"><i class="fa fa-video-camera"></i>Videos <span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(2)" :class="{active:toPos==2}"><i class="fa fa-heart"></i>Favorite Videos<span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(3)" :class="{active:toPos==3}"><i class="fa fa-users"></i>Followers<span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(4)" :class="{active:toPos==4}"><i class="fa fa-child"></i>MyFollow<span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(5)" :class="{active:toPos==5}"><i class="fa fa-history"></i>Browse History<span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(6)" :class="{active:toPos==6}"><i class="fa fa-gears"></i>Profile Settings</a></li>
                                <li class="clearfix"><a @click="changeView(7)" :class="{active:toPos==7}"><i class="fa fa-sign-out"></i>Logout</a></li>
                            </ul>
                            <a class="button" @click="changeView(8)"><i class="fa fa-plus-circle"></i>Submit Video</a>
                        </div>
                    </div>
                </div><!-- End profile overview -->
            </div>
        </aside>
    </div><!-- end sidebar -->
</template>
<script>
export default {
  name: 'HisleftSideBar',
  data(){
      return{
          toPos : 0
      }
  },
  methods:{
      changeView(pos){
          if( pos != this.toPos){
                this.toPos = pos
          }
          this.$emit('func',this.toPos)
      }
  }
}
</script>