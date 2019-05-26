<template>
        <v-layout row>
          <v-flex xs12 v-for="d in detail" :key="d.title" v-show="d.id===routeqe()">
                        <div class="animated fadeInUp fast">
            <v-layout :class="!$vuetify.breakpoint.xs ? 'text-All':'text-All2'" justify-center>
                            <div class="pa-3">
                              <div class="text-xs-left white--text text-1">{{d.title}}</div>
                              <div class="text-xs-left white--text text-2">{{d.text}}</div>
                            </div>
            </v-layout>
            <div id="border1"></div>
            <v-layout row wrap justify-center>
            <v-flex lg3 sm6 xl3 offset-sm3 xs11>
              <div class="white--text caption">
                {{d.subtext}}
              </div>
            </v-flex>
            <v-flex lg3 sm3 xl3 xs12>
              <div class="white--text text-xs-center pt-3">
                <div class="pb-3">
                  Project
                  <div>
                  WEB
                  </div>
                </div>

                  <div class="py-3">
                  Date
                  <div>
                  Aug 2018
                  </div>
                </div>
                <div class="py-3">
                  Client
                  <div>
                  가구예술
                </div>
                </div>
              </div>
            </v-flex>
            </v-layout>
            <v-layout justify-center ma-3>
              <v-flex xl8 lg8 md8 sm10 xs12>
              <v-img
              :src="d.img"></v-img>
              </v-flex>
            </v-layout>
                        </div>
          </v-flex>
        </v-layout>
</template>
<script>
/* eslint-disable */ 
export default {
  data() {
    return {
      detail:[
        {id:'/Works/Work1', title:'생활속의 가구예술', text:'by. WEB', img:require('../../assets/img/test1.jpg'), subtext:'작품 설명란'},
        {id:'/Works/Work2', title:'생활속의 가구예술1', text:'by. WEB1', img:require('../../assets/img/test2.jpg'), subtext:'작품 설명란1'},
        {id:'/Works/Work3', title:'생활속의 가구예술', text:'by. WEB', img:require('../../assets/img/test3.jpg'), subtext:'작품 설명란'},
        {id:'/Works/Work4', title:'생활속의 가구예술1', text:'by. WEB1', img:require('../../assets/img/test2.jpg'), subtext:'작품 설명란1'},
        {id:'/Works/Work5', title:'생활속의 가구예술', text:'by. WEB', img:require('../../assets/img/test3.jpg'), subtext:'작품 설명란'},
      ]
    }
  },
  methods: {
    routeqe(){
      return this.$route.path
    }
  },
}
</script>
<style lang="scss" scoped>

.text-All{
    font-family: 'Noto Sans KR', sans-serif;
    padding: 5px;
    position: relative;
    margin-top: 160px;
}
.text-All2{
    padding: 5px;
    position: relative;
    margin-top: 160px;
}
.text-1{
    font-size: 45px;
    font-weight: 700;
    letter-spacing: 3px;
}
.text-2{
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    font-style: italic;
}
#border1 {
  border-style: solid;
  border-color: white;
  border-width: 0.5px;
  margin: 25px auto;
  width: 20%;
  position: relative;
}

</style>
