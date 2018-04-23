<template>
  <fieldset class = set>
  <div>
    <input type="checkbox" id="sum" name="sett" value="sum" v-model="set1">
    <label for="sum">Суммирование</label>
  </div>
  <div>
    <input type="checkbox" id="sub" name="sett" value="sub" v-model="set2">
    <label for="sub">Разность</label>
  </div>
    <div>
    <input type="checkbox" id="mul" name="sett" value="mul" v-model="set3">
    <label for="mul">Умножение</label>
  </div>
    <div>
    <input type="checkbox" id="div" name="sett" value="div" v-model="set4">
    <label for="div">Деление</label>
  </div>
    <div>
    <input type="checkbox" id="exp" name="sett" value="exp" v-model="set5">
    <label for="exp">Возведение в степень</label>
  </div>
</fieldset>
</template>

<script>

export default {
  props : ['set1','set2','set3','set4','set5'],
}
</script>


<style>
  .set {
    display: block;
    margin-left: 2px;
    margin-right: 2px;
    padding-top: 0.35em;
    padding-bottom: 0.625em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    border: 0px groove;
    font-size: 120%;
  }
</style>

