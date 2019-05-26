import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    slide: 0,
    slides: [
      {id: 'Work1', title:'생활속의 가구예술',type:'by.WEB',   img:require('./assets/img/test1.jpg')},
      {id: 'Work2', title:'생활속의 가구예술1',type:'by.WEB1', img:require('./assets/img/test3.jpg')},
      {id: 'Work3', title:'생활속의 가구예술2',type:'by.WEB2', img:require('./assets/img/test2.jpg')},
      {id: 'Work4', title:'생활속의 가구예술3',type:'by.WEB3', img:require('./assets/img/test2.jpg')},
      {id: 'Work5', title:'생활속의 가구예술4',type:'by.WEB4', img:require('./assets/img/test3.jpg')},
		]
  },
  getters:{
    WorksList(state) {
      return state.slides[state.slide]
    },
  },
  mutations: {

  },
  actions: {

  }
})
