<template>
  <span>
     {{ txt }} 
  </span>
</template>

<script>

export default {
  props : ['txt'],
  }
</script>

<style>
	span {
    color: red;
	font-size: 160%;
	}
</style>
