<template>
    <v-layout id="bg1" justify-center>
            <card5/>
    </v-layout>
</template>
<script>
/* eslint-disable */ 
import card5 from '../Card/Card5.vue'
export default {
    components:{
        card5
    }
}
</script>
<style scoped>
/* font-family: 'Noto Sans KR', sans-serif;
font-family: 'Anton', sans-serif; */
#bg1 {
  position: absolute;
  top: 0; 
  left: 0;
  z-index: 0;
  background-color: black;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}

</style>
