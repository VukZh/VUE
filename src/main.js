// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import But from './components/MyButton'
import But2 from './components/MyButton2'
import Txxt from './components/MyTxt'
import Txxt2 from './components/MyTxt2'
import Txxt3 from './components/MyTxt3'
import Txxt4 from './components/MyTxt4'
import Counter from './components/MyCounter'
import Input from './components/MyInput'
import Slider from './components/MySlider'
import Slider2 from './components/MySlider2'
import Set from './components/MySet'
import game from './components/Game'
import settings from './components/Settings'
import router from './router'

Vue.component('but', But)
Vue.component('but2', But2)
Vue.component('txxt', Txxt)
Vue.component('txxt2', Txxt2)
Vue.component('txxt3', Txxt3)
Vue.component('txxt4', Txxt4)
Vue.component('counter', Counter)
Vue.component('slider', Slider)
Vue.component('slider2', Slider2)
Vue.component('set', Set)
Vue.component('inp', Input)

new Vue({
    el: '#app',
    router
})