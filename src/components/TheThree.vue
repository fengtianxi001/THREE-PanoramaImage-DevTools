<template>
	<base-panel>
		<div class="three" ref="three"></div>
	</base-panel>
</template>
<script setup lang="ts">
import { useThree } from "@/hooks/useThree";

</script>
<style lang="scss" scoped>
.three {
	width: 100%;
	height: 100%;
	background-color: red;
}
</style>