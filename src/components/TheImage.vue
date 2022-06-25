<template>
	<base-panel class="img-panel">
		<div class="container" ref="container">
		</div>
	</base-panel>
</template>
<script setup lang="ts">
import { markerType } from "#/markes";
import { useImage } from "@/hooks/useImage"
interface PropsType {
	markers: Array<markerType>,
	src: string
}
const props = defineProps<PropsType>()
const container = ref()
const { canvas } = useImage(container, props.markers, props.src)
console.log(canvas)
</script>
<style lang="scss" scoped>
.container {
	overflow: scroll;
	width: 100%;
	height: 100%;
	font-size: 0px;
}
</style>