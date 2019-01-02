<template>
	<div id = "container">
		<slot name="splash"></slot>
		<slot name="articles"></slot>
		<slot name="articles-body"></slot>
		<slot name="about"></slot>
		<slot name="about-body"></slot>
		<slot name="donate"></slot>
		<slot name="donate-body"></slot>
		<slot name="footer"></slot>
	</div>
</template>

<script>
export default {
	name: "Layout"
}
</script>

<style>
</style>