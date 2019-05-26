<template>
  <v-layout pa-3 align-center row wrap>
    <v-flex sm6 xs12 v-for="Skill in Skills" :key="Skill.title">
      <v-card color="transparent" flat>
        <v-layout row wrap align-center justify-center mt-4>
          <v-flex xs1>
            <v-layout justify-start>
            <v-card flat color="transparent" class="mr-2">
              <v-img
              :src="Skill.icon" width="30"></v-img>
            </v-card>
            </v-layout>
          </v-flex>
          <v-flex xl4 sm6 xs8>
            <div class="text-xs-left white--text">
              <div>
                <span class="title pr-3">{{Skill.title}}</span>
                <span class="body-1 font-italic font-weight-thin #EEEEEE--text">{{Skill.year}}</span>
              </div>
            </div>
          </v-flex>
          <v-flex xs2>
            <div class="text-xs-right white--text">
              <span class="headline font-weight-bold">{{Skill.point}}%</span>
            </div>
          </v-flex>
          <v-flex xl7 sm9 xs12>
          <div>
              <v-progress-linear
                color="success"
                height="20"
                :value="Skill.value"
                class="linear"
                background-color="white"
              ></v-progress-linear>
          </div>
          </v-flex>
        </v-layout>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
/* eslint-disable */ 
export default {    
  data() {
    return {
      Skills:[
        {title:'Vue', year:'3YEARS', icon: require('../../assets/skill/vue.png'), point:'90', value:'90'},
        {title:'HTML / CSS', year:'3YEARS', icon: require('../../assets/skill/html.svg'), point:'90', value:'90'},
        {title:'Vuetify', year:'1YEARS', icon: require('../../assets/skill/vuetify.svg'), point:'80', value:'80'},
        {title:'Node.js', year:'1YEARS', icon: require('../../assets/skill/nodejs.png'), point:'60', value:'60'},
        {title:'Photoshop', year:'2YEARS', icon: require('../../assets/skill/ps.svg'), point:'60', value:'60'},
        {title:'Illustrator', year:'3YEARS', icon: require('../../assets/skill/ai.svg'), point:'80', value:'80'},
        {title:'GraphQL', year:'1YEARS', icon: require('../../assets/skill/GraphQL.png'), point:'80', value:'80'},
        {title:'mongodb', year:'1YEARS', icon: require('../../assets/skill/Mongodb.svg'), point:'60', value:'60'},
        {title:'JavaScript', year:'1YEARS', icon: require('../../assets/skill/js.svg'), point:'50', value:'50'},
        {title:'Adobe-XD', year:'8MONTH', icon: require('../../assets/skill/adobe-xd.svg'), point:'70', value:'70'},
      ],
    }
  },

    methods: {
    }
}
</script>
<style lang="scss" scoped>
.linear{
  border-radius: 10px;
  box-shadow: 2px 3px 3px white;
}
/* font-family: 'Noto Sans KR', sans-serif;
font-family: 'Anton', sans-serif; */

</style>
