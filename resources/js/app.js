
require('./bootstrap');

window.Vue = require('vue');

import Api from './api.js';

window.api = new Api();

import Auth from './auth.js';
window.auth = new Auth();
import Vue from 'vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueRouter from 'vue-router';

window.Event = new Vue;

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('app', require('./components/App.vue').default);

import App from './components/App'
import MainView from './components/MainView'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

axios.defaults.baseURL = 'http://localhost:/api';

const router = new VueRouter({

    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainView
        },

        {
            path: '/register',
            name: 'register',
            component: Register,

        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },

    ],
});



const app = new Vue({
    el: '#app',
    components: { App },
    router,
});
