<template>
  <table width="100%" class = s><td width="5%">1</td> <td width="20%"><input type="range" :max=maxrange v-model="cnt" ></td><td>{{cnt}}</td><td> <span> Сложность {{ cnt }}       </span></td></table>
</template>

<script>

export default {
  props : ['maxrange'],

  data: function () {
    return {
      cnt: Math.floor(this.maxrange/2)
    }
  }
}
</script>

<style>
	.s {
	font-size: 120%;
	}
</style>
