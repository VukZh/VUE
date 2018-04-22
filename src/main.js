// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import But from './components/MyButton'
import But2 from './components/MyButton2'
import Txxt from './components/MyTxt'
import Counter from './components/MyCounter'
import Input from './components/MyInput'


Vue.component ('but',But)
Vue.component ('but2',But2)
Vue.component ('txxt',Txxt)
Vue.component ('counter',Counter)
Vue.component ('inp',Input)
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
