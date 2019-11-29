<template>
    <div>
         <!-- style="background: url('images/profile-bg1.png') no-repeat; -->
        <profile-header @func="getMsgFormHead" ref="headchild"></profile-header>
         <div class="row">
             <left-side-bar @func="getMsgFormSon"></left-side-bar>
             <about-me v-if="MYPOS == 0" :message="giveUserIntro"></about-me>
             <myvideo v-else-if="MYPOS == 1" @func="minusmyVideo"></myvideo>
             <favourite v-else-if="MYPOS == 2" @func="minusfavVideo"></favourite>
             <followers v-else-if="MYPOS == 3" ></followers>
             <myfollow v-else-if="MYPOS == 4" @func="minusFollowers"></myfollow>
             <setting v-else-if="MYPOS == 5" :userintroduction="giveUserIntro" :username="giveUserName"></setting>
         </div>
    </div>
</template>

<script>
import profileHeader from '@/components/profile/common/ProfileHeader.vue'
import leftSideBar from '@/components/profile/common/LeftSideBar.vue'
import aboutMe from '@/components/profile/ProfileAboutMe.vue'
import favourite from '@/components/profile/ProfileFavourite.vue'
import followers from '@/components/profile/ProfileFollowers.vue'
import myvideo from '@/components/profile/ProfileVideo.vue'
import setting from '@/components/profile/ProfileSetting.vue'
import myfollow from '@/components/profile/ProfileMyFollow.vue'
export default {
    name:'Myinformation',
    data(){
        return{
            MYPOS: '',
            giveUserIntro: '',
            giveUserName: '',
        }
    },
    components:{
        profileHeader,
        leftSideBar,
        aboutMe,
        favourite,
        followers,
        myvideo,
        setting,
        myfollow
    },
    methods:{
        getMsgFormSon(data){
            this.MYPOS= data
        },
        getMsgFormHead(data , nickname){
            this.giveUserIntro = data
            this.giveUserName = nickname
        },
        minusFollowers(){
            this.$refs.headchild.minusFollower()
        },
        minusfavVideo(){
            this.$refs.headchild.minusFavVideo()
        },
        minusmyVideo(){
            this.$refs.headchild.minusMyVideo()
        }
    },
    mounted(){
        this. getMsgFormSon(0)
    },
}
</script>>