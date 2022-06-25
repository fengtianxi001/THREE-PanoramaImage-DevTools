<template>
	<base-panel class="img-panel">
		<div class="container" ref="container">
			<canvas ref="canvas"></canvas>
		</div>
	</base-panel>
</template>
<script setup lang="ts">
import { fetchURL } from "@/utils/index"
const canvas: HTMLCanvasElement = $ref()
const container: HTMLElement = $ref()
const state = reactive({
	zoom: 1
})
onMounted(() => {
	const ctx = canvas.getContext("2d") as CanvasRenderingContext2D
	const image = new Image()
	image.src = fetchURL("../assets/texture.jpeg")
	image.onload = () => {
		canvas.width = container.clientWidth
		canvas.height = image.height * (container.clientWidth / image.width)
		ctx.drawImage(image, 0, 0, canvas.width, canvas.height)
	}
	// console.log(import.meta)
	// console.log(canvas)
})
// function getImageUrl(name) {
//     return new URL(`../assets/blogPhotos/${name}.jpg`, import.meta.url).href;
// }
// const onMousewheel = (event: MouseEvent) => {
// 	const { offsetX: x, offsetY: y } = event
// 	//@ts-ignore
// 	state.zoom += event.wheelDelta / 1200
// 	console.log(imgRef)
// 	if (imgRef) {
// 		if (state.zoom < 0.2) state.zoom = 0.2;
// 		// imgRef.style.transformOrigin = `${x} ${y}`
// 		imgRef.style.transform = `scale('${state.zoom}')`;
// 		console.log("inter:", imgRef.style.transformOrigin)
// 		// imgRef.style.transformOrigin = 
// 	}
// }
</script>
<style lang="scss" scoped>
.img-panel {
	// transform-origin: 100 100;
	// transform: scale(2);
}

.container {
	overflow: hidden;
	width: 100%;
	height: 100%;
	font-size: 0px;

	img {
		width: 100%;
		object-fit: contain;
	}

}
</style>