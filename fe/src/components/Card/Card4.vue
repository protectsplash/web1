<template>
<div id="app">
  <div class="slides">
    <transition-group 
      name="slide"
      mode="out-in"
      enter-class="slide-in"
      leave-class="slide-out"
      enter-active-class="animated slide-in-active"
      leave-active-class="animated slide-out-active"
    >
      <div
        v-for="index in slides"
        v-show="index.id===active"
        :key="index.id"
      >
        
         <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'text-1-1 mt-5 pt-5':'text-1'" v-show="index.id===1">
              {{ index.title }}
          </div>
          <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'text-1-1 mt-5 pt-5':'text-1'" v-show="index.id===2">
            <v-flex offset-lg1>
              {{ index.title }}
            </v-flex>
          </div>
          <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'text-1-1 mt-5 pt-5':'text-1'" v-show="index.id===3">
            <v-flex offset-lg1>
              {{ index.title }}
            </v-flex>
          </div>
          <div v-show="index.id===3">
            <card3/>
          </div>
          <div v-show="index.id===2">
              <v-layout row wrap pl-2 mb-3>
                <v-flex offset-lg1 lg5 sm6 xs11 v-for="S in service" :key="S.title">
            <v-card flat color="transparent" class="pa-2">
                <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'card-1-1 pt-5':'card-1 pb-3'">
                  {{S.title}}
                </div>
                <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'card-2-1':'card-2'">
                  {{S.text1}}<br>
                  {{S.text2}}
                </div>
                <v-layout>
                  <v-flex xs12>
                <div id="border1"></div>
                </v-flex>
                </v-layout>
                <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'card-3-1':'card-3 mb-5'">
                  {{S.text3}}<br>
                  {{S.text4}}
                </div>
            </v-card>
                </v-flex>
              </v-layout>
          </div>
          <div :class="$vuetify.breakpoint.sm|| $vuetify.breakpoint.xs?'text-2-1':'text-2 pr-5'" v-show="index.id===1">
                {{ index.text1 }}<br>
                {{ index.text2 }}<br>
                {{ index.text3 }}
          </div>
                                              <span v-show="index.id===3"
                                                class="prev"
                                                @click="move(-1)"
                                              >
                                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                              </span>
                                              <span v-show="index.id===2"
                                                class="prev-1"
                                                @click="move(-1)"
                                              >
                                                <i class="fa fa-chevron-left" aria-hidden="true"></i>
                                              </span>
                                              <span v-show="index.id===2"
                                                class="next"
                                                @click="move(1)"
                                              >
                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                              </span>
                                              <span v-show="index.id===1"
                                                class="next"
                                                @click="move(1)"
                                              >
                                                <i class="fa fa-chevron-right" aria-hidden="true"></i>
                                              </span>
      </div>
    </transition-group>
  </div>
  <!-- <ul class="dots">
    <li
      v-for="(dot, index) in slides"
      :class="{ active: ++index === active }"
      @click="jump(index)"
      :key="index"
    ></li>
  </ul> -->
</div>
</template>

<script>
/* eslint-disable */
import card3 from './Card3'
export default {
  components:{
    card3
  },
  data() {
    return {
    slides: [
      {id:1, title:'ABOUT', text1:'심플함이 최고다.', text2:'우리 팀은 직관적인', text3:'디자인을 합니다.'},
      {id:2, title:'SERVICE'},
      {id:3, title:'SKILL SET'},
      ],
    service:[
      {title: 'Strategy', text1:'목표고객에 부합하는 사이트 제작을 위한', text2:'데이터 기반의 최적화된 웹서비스 제공', text3:'Digital Strategy / Consumer Research / Industry Research /', text4:'Research & UX strategy / eBranding Strategy'},
      {title: 'Experience', text1:'사용자 중심의 사용환경을 위한 UI/UX 전략수립과', text2:'모바일에 최적화된 서비스 제공', text3:'UI/UX Design / Mobile / Responsive Design'},
      {title: 'Advertising', text1:'목표고객 유입을 위한 온라인 리서치 및', text2:'광고 대행 제공', text3:'AD Strategy / Online research / SNS Marketing  /', text4:'Search Registration'},
      {title: 'Campaign', text1:'특정 제품 및 서비스의 수요초과를 유발시키는', text2:'캠페인 기획 및 실행', text3:'Product Research / Service Research / Campaign strategy /', text4:'Customer response survey / Online Event Planning'}
    ],
    active: 1
       }
  },
  methods: {
    move(amount) {
      let newActive
      const newIndex = this.active + amount
      if (newIndex > this.slides) newActive = 1
      if (newIndex === 0) newActive = this.slides
      this.active = newActive || newIndex
    },
    jump(index) {
      this.active = index.id
    },
  }
}
</script>

<style lang="scss">
$primary: WHITE;
.card-1{
  font-family: 'Anton', sans-serif;
  font-size: 30px;
  color: white;
  font-style: italic;
  letter-spacing: 3px;
  font-weight: 500;
}
.card-1-1{
  font-family: 'Anton', sans-serif;
  font-size: 20px;
  color: white;
  font-style: italic;
  letter-spacing: 3px;
  font-weight: 500;
}
.card-2{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 16px;
  color: white;
  letter-spacing: 1px;
  font-weight: 100;
}
.card-2-1{
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 12px;
  color: white;
  letter-spacing: 1px;
  font-weight: 100;
  padding-top: 20px;
}
.card-3{
  font-family: 'Anton', sans-serif;
  font-size: 16px;
  color: white;  
  letter-spacing: 1px;
  font-weight: 100;
}
.card-3-1{
  font-family: 'Anton', sans-serif;
  font-size: 12px;
  color: white;  
  letter-spacing: 1px;
  font-weight: 100;
}

.text-1{  
  font-family: 'Anton', sans-serif;
  color: white;
  font-size: 100px;
  letter-spacing: 20px;
}
.text-1-1{  
  font-family: 'Anton', sans-serif;
  color: white;
  font-size: 60px;
  letter-spacing: 15px;
}
.text-2{
  font-family: 'Noto Sans KR', sans-serif;
  color: white;
  font-size: 69px;
  letter-spacing: 10px;
  font-weight: 600;
}
.text-2-1{
  font-family: 'Noto Sans KR', sans-serif;
  color: white;
  font-size: 35px;
  letter-spacing: 10px;
  font-weight: 600;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}



.prev,
.next {
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid $primary;
  color: $primary;
  border-radius: 50%;
  margin-top: -25px;
  margin-left: 25px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s ;
  right: 0;
  margin-left: auto;
  margin-right: 25px;
  text-indent: 2px;
  
  &:hover {
    background: black;
    opacity: 0.75;
    color: #fff;
    transform: scale(1.2);
  }
  
  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}
.prev-1{
  position: absolute;
  top: 50%;
  width: 50px;
  height: 50px;
  border: 2px solid $primary;
  color: $primary;
  border-radius: 50%;
  margin-top: -25px;
  cursor: pointer;
  line-height: 48px;
  text-align: center;
  text-indent: -2px;
  transition: all 0.2s ;
  left: 0;
  margin-left: auto;
  text-indent: 2px;
  margin-left: 25px;
  
  &:hover {
    background: black;
    opacity: 0.75;
    color: #fff;
    transform: scale(1.2);
  }
  
  &:active {
    transform: translate(0, 3px) scale(1.2);
  }
}

// .next {
//   right: 0;
//   margin-left: auto;
//   margin-right: 25px;
//   text-indent: 2px;
// }

.dots {
  position: fixed;
  display: block;
  width: 100%;
  text-align: center;
  bottom: 20px;
  
  li {
    width: 6px;
    height: 6px;
    border-radius: 3px;
    background: $primary;
    opacity: 0.2;
    display: inline-block;
    margin: 0 3px;
    cursor: pointer;
    transition: opacity 0.4s ease-in-out,width 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    
    &.active {
      width: 22px;
      opacity: 1;
    }
  }
}

.slides {
  display: flex;
  height: 100%;
  widows: 100%;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  
  .animated {
    transition: all 400ms;
    position: absolute;
    transform: translate(-50%, -50%);
  }
  
  .slide-in {
    opacity: 0;
    transform: translate(0%, -50%);
  }
  
  .slide-in-active {
    transition-delay: 150ms;
    text-align: left;
    width: 100%;
  }
  
  .slide-out {
    opacity: 1;
  }
  
  .slide-out-active {
    opacity: 0;
    width: 100%;
    text-align: left;
    transform: translate(-80%, -50%);
  }
}
#border1 {
  border-style: solid;
  border-color: white;
  border-width: 0.5px;
  margin: 10px 0;
  width: 50%;
}


</style>