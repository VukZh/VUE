<template>
  <div id="app">
    <div style="font-size:160%">
      Привет!
    </div>
    <txxt2 txt = 24></txxt2>
    <txxt3 txt1 = 10 txt2 = 25></txxt3>
    <txxt4 proc = 80></txxt4>
    <p></p>

    <div style="font-size:140%">
      Настройки
    </div>
    <slider  maxrange = 15></slider>
    <slider2 maxrange = 10></slider2>
    <set set1 = "checked" set5 = "checked"></set>
    <p></p>

  </div>
</template>
<script>
export default {
  name: 'App',
}
</script>
<style>

</style>
