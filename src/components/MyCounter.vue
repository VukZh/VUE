<template>
  <table width="100%" id="app">
  <td align="left">
  <button v-on:click="runTimer()" style = "background-color: #e7e7e7; font-size : 160%;">Run</button></td><td align="right">
  <h2 style = "color: red; font-size : 160%;">{{ cnt }}</h2>
  </td></table>
</template>

<script>
export default {
  data(){return {cnt:10,timerId:0}},

  methods:{
    sub(){
      this.cnt--;
      if (this.cnt < 1) {this.cnt = 0; clearInterval(this.timerId);alert ("ops");}
    },
    runTimer:function() { 
     	this.timerId = setInterval(this.sub, 1000); /////
    }
  }
}
</script>

