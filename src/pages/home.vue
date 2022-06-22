<template>
	<div class="home">
		<div>
			<canvas ref="canvasRef" width="500" height="500"></canvas>
		</div>
		<div ref="threeRef"></div>

	</div>
</template>
<script setup lang="ts">
import { useThree } from "@/hooks/useThree";
import { useDevTools } from "@/hooks/useDevtools"
// import { ref } from "vue";
const threeRef = ref()
const canvasRef = ref()
const image = "http://localhost:3000/123.png"
const { marker } = useDevTools(canvasRef, image)
useThree(threeRef, image, marker)

</script>
<style lang="scss" scoped>
.home {
	width: 100vw;
	height: 100vh;
	display: grid;
	grid-template-columns: 1fr 1fr;
}
</style>