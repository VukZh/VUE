<template>
  <div class = t>
     Ваш последний результат - решено {{ txt1 }} из {{ txt2 }}.
  </div>
</template>

<script>

export default {
  props : ['txt1','txt2'],
  }
</script>

<style>
	.t {
	font-size: 120%;
	}
</style>
