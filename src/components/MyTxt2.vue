<template>
  <div class = t>
     Добро пожаловать на {{ txt }} тренировочный день,
  </div>
</template>

<script>

export default {
  props : ['txt'],
  }
</script>

<style>
	.t {
	font-size: 120%;
	}
</style>
