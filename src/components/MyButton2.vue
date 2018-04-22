<template>
  <div>
    <button class="but2">{{buttxt}}</button>
  </div>
</template>

<script>  
export default {
  props : ['buttxt']
}
</script>

<style>
.but2 {
    background-color: #808080;
    color: black;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    font-size : 160%;
    font-weight:bold;
}
.but2:hover {
    background-color: #696969;
}
.but2:active {
  background-color: #696969;
}
</style>
