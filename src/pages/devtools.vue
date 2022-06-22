<template>
	<div class="devtools">
		<div>
			<button @click="onPrintMarkers">输出marker</button>
		</div>
		<canvas ref="canvasRef"></canvas>
	</div>
</template>
<script setup lang="ts">
import { Ref } from 'vue';
import { ReactiveVariable } from 'vue/macros';
const canvasRef: Ref<HTMLCanvasElement | undefined> = ref()
let ctx: ReactiveVariable<CanvasRenderingContext2D | undefined> = $ref()
const targetWidth = 1000
let width = $ref(0)
let height = $ref(0)
let markerList: Array<[number, number]> = reactive([])
onMounted(() => {
	const image = new Image()
	image.src = "http://localhost:3001/texture.jpeg"
	image.onload = () => {
		width = targetWidth
		height = image.height / (image.width / targetWidth)
		canvasRef.value!.width = width
		canvasRef.value!.height = height
		ctx = canvasRef.value!.getContext("2d") as CanvasRenderingContext2D
		ctx.drawImage(image, 0, 0, width, height)
	}
	canvasRef.value?.addEventListener("click", (e) => {
		const { offsetX, offsetY } = e
		ctx?.beginPath()
		ctx.arc(offsetX, offsetY, 2, 0, 2 * Math.PI);
		ctx.stroke();
		ctx.closePath()
		markerList.push([offsetX, offsetY])
		onPrintMarkers()
	})

})
const onPrintMarkers = () => {
	//先获取中心点位
	const ox = width / 2
	const oy = height / 2
	var a = markerList.map((marker) => {
		const dx = marker[0] - ox
		const dy = marker[1] - oy
		const θ = (dx / width) * Math.PI * 2
		const φ = (dy / height) * Math.PI
		if (dx <= 0) {
			const y = 10 * Math.sin(θ) * Math.sin(φ)
			const x = 10 * Math.cos(θ) 
			const z = 10 * Math.sin(θ) * Math.cos(φ)
			return [x, y, z]
		} else {
			const y = 10 * Math.sin(θ) * Math.sin(φ)
			const x = 10 * Math.cos(θ)
			const z = 10 * Math.sin(θ) * Math.cos(φ) 
		}


	})
	console.log(a[a.length - 1])
}
</script>
<style>
.devtools {
	width: 100vw;
	height: 100vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
}
</style>