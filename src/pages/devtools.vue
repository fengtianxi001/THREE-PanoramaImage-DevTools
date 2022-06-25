<template>
	<div class="devtools">
		<div class="panel">
			<the-image></the-image>
			<the-code></the-code>
		</div>
		<the-three></the-three>
	</div>
</template>
<script setup lang="ts">
</script>
<style lang="scss" scoped>
.devtools {
	width: 100vw;
	height: 100vh;
	padding: 10px;
	display: grid;
	grid-gap: 10px;
	grid-template-columns: 1fr 1fr;
	background-image: url(../assets/desert.jpeg);
	background-size: cover;

	.panel {
		display: flex;
		grid-gap: 10px;
		flex-direction: column;
		// grid-template-rows: 1fr ;
	}
}
</style>