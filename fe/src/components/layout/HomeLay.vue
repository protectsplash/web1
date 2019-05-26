<template>
    <v-layout>
        <v-flex xs12>
        <img src="../../assets/img/back.png" id="bg" alt="">
            <card1/>
            <div class="bg-text">
                WEB<br>
                MARKETING<br>
                UI / UX<br>
                CAMPAIGN<br>
            </div>
            <!-- <div class="bg-text1" v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl">
                WORKS
            </div> -->
            <!-- <div v-show="$vuetify.breakpoint.lg || $vuetify.breakpoint.xl">
            <div class="bg-img1">
                <v-img
                :src="require('../../assets/img/round-patton.png')" width="244"></v-img>
            </div>
            <div class="bg-img2">
                <v-img
                :src="require('../../assets/img/round-patton.png')" width="244"></v-img>
            </div>
            </div> -->
        </v-flex>
    </v-layout>
</template>
<script>
/* eslint-disable */ 
import card1 from '../Card/Card1.vue'
import card2 from '../Card/Card2.vue'
export default {
    components:{
        card1,
        card2
    }
}
</script>
<style scoped>
/* font-family: 'Noto Sans KR', sans-serif;
font-family: 'Anton', sans-serif; */
#bg-1{
    background-image: url( "../../assets/img/back.png" );
    background-size: cover;

}
#bg {
  position: fixed; 
  top: 0; 
  left: 0;
  z-index: 0;
    
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}
.bg-text{
    z-index: 0;
    opacity: 0.1;
    padding: 10px;
    font-family: 'Anton', sans-serif;
    font-size: 45px;
    line-height: 100px;
    color: white;
    font-weight: 400;
    letter-spacing:10px;
    position: absolute;
    top: 20%;
}
.bg-text1{
    z-index: 0;
    opacity: 0.1;
    font-family: 'Anton', sans-serif;
    font-size: 300px;
    line-height: 100px;
    color: white;
    font-weight: 400;
    letter-spacing:10px;
    position: absolute;
    top: 50%;
    right: -20%;
    transform: rotate(-90deg);
}
.bg-img1{
    z-index: 0;
    position: absolute;
    opacity: 0.1;
    top: 70%;
    right: 93%;
}
.bg-img2{
    z-index: 0;
    position: absolute;
    opacity: 0.1;
    bottom: 85%;
    left: 85%;
}
</style>
