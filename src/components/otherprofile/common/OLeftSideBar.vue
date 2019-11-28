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
                                <li class="clearfix"><a @click="changeView(0)" :class="{active:toPos==0}"><i class="fa fa-user"></i>about him</a></li>
                                <li class="clearfix"><a @click="changeView(1)" :class="{active:toPos==1}"><i class="fa fa-video-camera"></i>His Videos <span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(2)" :class="{active:toPos==2}"><i class="fa fa-heart"></i>His Favorite Videos<span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(3)" :class="{active:toPos==3}"><i class="fa fa-users"></i>His Followers<span class="float-right"></span></a></li>
                                <li class="clearfix"><a @click="changeView(4)" :class="{active:toPos==4}"><i class="fa fa-child"></i>His Follow<span class="float-right"></span></a></li>
                            </ul>
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
      },
      initData(){
           this.toPos = 0
           this.$emit('func',this.toPos)
      }
  },
  watch:{
        '$route'(to,from) {
            this.initData()
        }
  }
}
</script>