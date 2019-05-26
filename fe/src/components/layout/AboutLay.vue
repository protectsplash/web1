<template>
    <v-layout id="bg1" justify-center>
            <card4/>
    </v-layout>
</template>
<script>
/* eslint-disable */ 
import card4 from '../Card/Card4.vue'
export default {
    components:{
        card4
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
  background-color: #5321FE;
  /* Preserve aspet ratio */
  min-width: 100%;
  min-height: 100%;
}

</style>
