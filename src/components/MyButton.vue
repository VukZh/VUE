<template>
  <div>
    <button class="but1">{{buttxt}}</button>
  </div>
</template>

<script>  
export default {
  props : ['buttxt']
}
</script>

<style>
.but1 {
    background-color: #ff983a;
    color: black;
    width: 50px;
    height: 50px;
    border-radius: 30%;
    font-size : 160%;
    font-weight:bold;
}
.but1:hover {
    background-color: #ff7120;
}
.but1:active {
  background-color: #ff7120;
}
</style>
