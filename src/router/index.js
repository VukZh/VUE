import Vue from 'vue'
import VueRouter from 'vue-router'
import Game from '@/components/Game'
import Settings from '@/components/Settings'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Game
    }, {
        path: '/game',
        name: 'Game',
        component: Game
    }, {
        path: '/settings',
        name: 'Settings',
        component: Settings
    }]
})