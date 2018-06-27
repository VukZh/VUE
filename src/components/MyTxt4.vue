<template>
  <div class = t>
     Общая точность {{ proc }}%.
  </div>
</template>

<script>

export default {
  props : ['proc'],
  }
</script>

<style>
	.t {
	font-size: 120%;
	}
</style>
