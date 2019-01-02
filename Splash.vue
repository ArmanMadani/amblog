<template>
	<div id = "splash">
		<div id = "splash-wrapper">
			<div id="header-wrapper">
				<header id="main-icon">
					<a href="index.html" class="main-icon"><img src="../assets/main_icon.png" height="40" width = "100"></a>
					<ul>
						<li><a href="#" v-scroll-to="'#donate'">donate</a></li>
						<li><a href="#" v-scroll-to="'#about'">about</a></li>
						<li><a href="#" v-scroll-to="'#footer'">contact</a></li>
					</ul>
				</header>
			</div>
			<div id = "welcome">
				<center>welcome to my blog</center><br/>
				<center>i like to write about data science, economics, and policy topics </center><br/><br/>
				<SubscribeBar></SubscribeBar>
			</div>
			<div class="arrow bounce">
				<center><a class = "fa-scroll-link" href="#" v-scroll-to="'#articles-wrapper'">
					<center><div id = "featured-articles-link">featured articles</div></center>
					<center><feather type="chevrons-down" stroke="white" size="37"/></center>
				</a></center>
			</div>
		</div>
	</div>
</template>

<script>
import SubscribeBar from './Subscribe.vue';

export default {
	name: "Splash",
	components: {
		SubscribeBar
	}
}
</script>