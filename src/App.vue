<template>
  <div id="app">
    <counter></counter>
    <div align = "center">
      <txxt txt = 12></txxt>
      <txxt txt = *></txxt>
      <inp></inp>
      <txxt txt = *></txxt>
      <inp></inp>
      <txxt txt = "="></txxt>
      <txxt txt = 112233></txxt>
      <p></p>
    </div>

    <table width = "100%">
      <tr>
        <td align = "center"><but buttxt = "1"></but></td>
        <td align = "center"><but buttxt = "2"></but></td>
        <td align = "center"><but buttxt = "3"></but></td>
        <td align = "center"><but2 buttxt = "<"></but2></td>
      </tr>
      <tr>
        <td align = "center"><but buttxt = "4"></but></td>
        <td align = "center"><but buttxt = "5"></but></td>
        <td align = "center"><but buttxt = "6"></but></td>
        <td align = "center"><but2 buttxt = ">"></but2></td>
      </tr>
      <tr>
        <td align = "center"><but buttxt = "7"></but></td>
        <td align = "center"><but buttxt = "8"></but></td>
        <td align = "center"><but buttxt = "9"></but></td>
        <td align = "center"><but2 buttxt = "?"></but2></td>
      </tr> 
      <tr>
        <td></td>
        <td align = "center"><but buttxt = "0"></but></td>
        <td></td>
        <td align = "center"><but2 buttxt = "="></but2></td>
      </tr> 
    </table>
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>
<style>

</style>
