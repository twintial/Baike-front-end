<template>
    <div>
         <!-- style="background: url('images/profile-bg1.png') no-repeat; -->
        <profile-header @func="getMsgFormHead"></profile-header>
         <div class="row">
             <left-side-bar @func="getMsgFormSon"></left-side-bar>
             <about-me v-if="MYPOS == 0" :message="giveUserIntro"></about-me>
             <myvideo v-else-if="MYPOS == 1"></myvideo>
             <favourite v-else-if="MYPOS == 2"></favourite>
             <followers v-else-if="MYPOS == 3"></followers>
             <myfollow v-else-if="MYPOS == 4"></myfollow>
         </div>
    </div>
</template>

<script>
import profileHeader from '@/components/otherprofile/common/ProfileOHeader.vue'
import leftSideBar from '@/components/otherprofile/common/OLeftSideBar.vue'
import aboutMe from '@/components/otherprofile/ProfileOAboutme.vue'
import favourite from '@/components/otherprofile/ProfileOFavourite.vue'
import followers from '@/components/otherprofile/ProfileOFollowers.vue'
import myvideo from '@/components/otherprofile/ProfileOVideo.vue'
import myfollow from '@/components/otherprofile/ProfileOMyFollow.vue'
export default {
    name:'Hisinformation',
    data(){
        return{
            MYPOS: '',
            giveUserIntro: '',
        }
    },
    components:{
        profileHeader,
        leftSideBar,
        aboutMe,
        favourite,
        followers,
        myvideo,
        myfollow
    },
    methods:{
        getMsgFormSon(data){
            this.MYPOS= data
        },
        getMsgFormHead(data){
            this.giveUserIntro = data
        },
    },
    mounted(){
        this. getMsgFormSon(0)
    },
    watch: {

    },

}
</script>