<template>
  <div id="article-card-wrapper" data-aos="fade-up" 
      data-aos-duration=2000
      data-aos-anchor-placement="top-bottom" style = "overflow: hidden; width: 93%;">
    <v-container id="article-card-container">
        <v-layout row wrap>
          <v-flex xs12 sm6 md4 lg3 v-for="(article, index) in articles" :key="article.title">
            <v-card class="text-xs-left ma-3" :href="article.articlePath" :hover=true :raised=true :img="article.banner" :height=200 @mouseover = "show = index" @mouseout = "show = null">
              <div :id = "getIdBinding(index)">
                <v-card-text v-show = "show === index">
                    <div class="white--text">{{ article.title }}</div>
                    <div class="posted-date"><em>Posted: {{ article.dateAdded['seconds'] | moment("MMM Do, YYYY") }}</em></div>
                </v-card-text>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
	import { db } from '../main.js'

	export default {
    name: "ArticlesBody",
		data() {
      return {
        articles: [],
        show: null
      }
    },
    firestore() {
      return {
        articles: db.collection('articles').orderBy('dateAdded', 'desc')
      }
    },
    methods: {
      getIdBinding: function(index) {
          if (this.show === index) {
            return 'article-title-overlay'
          }
        }
      }
    }
</script>

<style scoped src="../../node_modules/vuetify/dist/vuetify.min.css">
</style>