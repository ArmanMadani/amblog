import Vue from 'vue';
import VueRouter from 'vue-router'

import App from './App.vue';

import VueScrollTo from'vue-scrollto';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Vuetify from 'vuetify';

import * as firebase from 'firebase';
import 'firebase/firestore';

import VueFeather from 'vue-feather';

import VueFire from 'vuefire';

import VueMoment from 'vue-moment'

// Declare Vue to use scrolling effect
Vue.use(VueRouter)
Vue.use(VueScrollTo)
Vue.use(Vuetify)
Vue.use(VueFire)
Vue.use(VueMoment)
Vue.config.productionTip = false
Vue.component(VueFeather.name, VueFeather);

firebase.initializeApp({
    apiKey: "AIzaSyDuoTLqP7tRo4vIOAIzHloB2AoC34MCVy8",
    authDomain: "armanmadani-subscribers.firebaseapp.com",
    databaseURL: "https://armanmadani-subscribers.firebaseio.com",
    projectId: "armanmadani-subscribers",
    storageBucket: "armanmadani-subscribers.appspot.com",
    messagingSenderId: "1029564201603"
  })

const db = firebase.firestore()
const settings = {timestampsInSnapshots: true};
db.settings(settings)
const subscribersCollection = db.collection('subscribers')
const articlesCollection = db.collection('articles')

export {
	db, 
  subscribersCollection,
  articlesCollection
}

new Vue({
  el: '#app',
  created () {
  	AOS.init()
  },
  render: h => h(App)
})

