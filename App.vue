<template>
  <Layout>
	<Splash slot = "splash"></Splash>
	<Articles slot = "articles"></Articles>
	<ArticlesBody slot ="articles-body"></ArticlesBody>
	<About slot = "about"></About>
	<AboutBody slot = "about-body"></AboutBody>
	<Donate slot = "donate"></Donate>
	<DonateBody slot = "donate-body"></DonateBody>
	<Footer slot = "footer"></Footer>
  </Layout>
</template>

<script>
import Vue from 'vue';
import {Component} from 'vue-property-decorator';
import Layout from './components/Layout.vue';
import Splash from './components/Splash.vue';
import About from './components/About.vue';
import Donate from './components/Donate.vue';
import AboutBody from './components/AboutBody.vue';
import DonateBody from './components/DonateBody.vue';
import Footer from './components/Footer.vue';
import Articles from './components/Articles.vue';
import ArticlesBody from './components/ArticlesBody.vue';
import SubscribeBar from './components/Subscribe.vue'

export default {
  components: {
	  	Layout, 
	  	Splash,
	  	SubscribeBar,
	  	Articles,
	  	ArticlesBody,
	  	About,
	  	Donate,
	  	AboutBody,
	  	DonateBody,
	  	Footer
 	}
}
</script>

<style>
</style>
