<template>
        <div style="z-index:3;">
            <v-flex xs12>
              <v-layout row wrap align-center justify-center>
                  <v-flex xs12>
                <div :class="!$vuetify.breakpoint.xs || !$vuetify.breakpoint.sm ? 'lay-1 text-xs-center' : 'lay-small text-xs-center'">
                <agile class="main" ref="main" :options="options1" :as-nav-for="asNavFor1">
                  <div class="slide" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`">
                      <v-layout wrap row justify-center align-center>
                          <v-flex lg2 offset-md1 xl2 sm12 xs11>
                      <v-layout :class="!$vuetify.breakpoint.xs ? 'text-All':'text-All2'" justify-center align-end>
                        <div class="animated infinite fadeInRight slower">
                            <div class="text-xs-left white--text text-1">{{slide.title}}</div>
                            <div class="text-xs-left white--text text-2">{{slide.type}}</div>
                        </div>
                      </v-layout>
                        </v-flex>
                        <v-flex xl9 lg9 sm9 xs12>
                      <router-link :to="`/Works/${slide.id}`">
                      <img id="main-img" :src="slide.img"/>
                      </router-link>
                        </v-flex>
                      </v-layout>
                   </div>
                </agile>
                </div>
                </v-flex>
                <v-flex xs4>
                </v-flex>
                <v-flex xl8 lg8 sm8 xs12>
                <div class="lay-2">
                    <agile class="thumbnails" ref="thumbnails" :options="options2" :as-nav-for="asNavFor2">
                      <div class="slide slide--thumbniail" v-for="(slide, index) in slides" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails.goTo(index)"><img id="main-img2" :src="slide.img"/></div>
                    </agile>
                </div>
                </v-flex>
            </v-layout>
            </v-flex>
        </div>
</template>
<script>
/* eslint-disable */ 
export default {
    data() {
        return {
              asNavFor1: [],
			asNavFor2: [],
			options1: {
				dots: false,
                fade: true,
                centerMode: true,
				navButtons: false
			},
			
			options2: {
				autoplay: true,
				centerMode: false,
				dots: false,
                navButtons: false,
				responsive: [
                    {
                    breakpoint: 300,
                    settings: {slidesToShow: 2},
                    },
                    {
                    breakpoint: 600,
                    settings: {slidesToShow: 3},
                    },
                    {
                    breakpoint: 960,
                    settings: {slidesToShow: 5}
                    }
                    
            ]
				
			},
			
			slides: [
                {id: 'Work1', title:'생활속의 가구예술',type:'by.WEB', img:require('../../assets/img/test1.jpg')},
                {id: 'Work2', title:'생활속의 가구예술1',type:'by.WEB1', img:require('../../assets/img/test3.jpg')},
                {id: 'Work3', title:'생활속의 가구예술2',type:'by.WEB2', img:require('../../assets/img/test2.jpg')},
                {id: 'Work4', title:'생활속의 가구예술3',type:'by.WEB3', img:require('../../assets/img/test2.jpg')},
                {id: 'Work5', title:'생활속의 가구예술4',type:'by.WEB4', img:require('../../assets/img/test3.jpg')},
				]
        }
    },
    mounted () {
		this.asNavFor1.push(this.$refs.thumbnails)
		this.asNavFor2.push(this.$refs.main)
	},
   methods: {
    },
    computed: {
    },
}
</script>
<style lang="scss" scoped>
.lay-1{
    margin-top: 120px;
}
.lay-small{
    margin-top: 20px;
}
.text-All{
    padding: 5px;
    position: relative;
    margin-top: 120px;
}
.text-All2{
    padding: 5px;
    position: relative;
    margin-top: 80px;
}
.text-1{
    font-family: 'Noto Sans KR', sans-serif;
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
.text-3{
    z-index: 2;
    font-size: 15px;
    font-weight: 400;
    letter-spacing: 1px;
    font-style: italic;
}
.card-1{
    border-radius: 15px;
}
#main-img{
  height: 100%;
}
#main-img2{
  border-radius: 10px;
}
.main {
  border-radius: 15px;
}

.thumbnails {
  width: 100%;
}
.slide {
  cursor: pointer;
}
.slide--thumbniail {
  cursor: pointer;
  padding: 5px;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  -o-object-fit: cover;
     object-fit: cover;
  -o-object-position: center;
     object-position: center;
  width: 75%;
}
</style>
