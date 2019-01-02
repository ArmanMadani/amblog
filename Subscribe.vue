<template>
	<div id="subscribe" v-on:submit.prevent="addSub">
        <center>
        	<form id = "sub">
        		<div id = "input-field">
	    			<input type = "email" v-model="email" placeholder = "enter your email address to subscribe">
	    		</div>
    			<input type = "submit" id="subscribe-button" value="submit">
    			<p v-if="showMessage" color="#30BC57" data-aos="fade-down" data-aos-duration=2000 data-aos-anchor-placement="top-bottom">{{ message }}</p>
        	</form>
        </center>
	    </div>
</template>

<script>
import { db, subscribersCollection } from '../main.js';

// Variable used to analyze email addresses upon subscription
var emailRE = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default {
	name: "SubscribeBar",
	data () {
		return {
			email: '',
			datetimeAdded: '',
			unixTime: '',
			message: '',
			showMessage: false
		}
	},
	computed: {
		validation () {
			return emailRE.test(this.email)
		},
		isValid () {
			var validation = this.validation
			return Object.keys(validation).every(function (key) {
				return validation[key]
			})
		}
	},
	methods: {
		addSub () {
			if (this.email === '' || !this.isValid) {
				this.showMessage = true
				this.message = "Please provide a valid email address."
			}

			else if (this.isValid && this.email !== '') {
				this.datetimeAdded = Date().toString()
				this.unixTime = Date.now()
				subscribersCollection.add({
					email: this.email,
					datetimeAdded: this.datetimeAdded,
					unixTime: this.unixTime
				})
				this.email = ''
				this.showMessage = true
				this.message = "Thanks for subscribing to email updates!"
			}
		}
	}
}
</script>

<style>
</style>