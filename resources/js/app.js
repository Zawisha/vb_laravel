
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
Vue.component('Loading_line', require('./components/board/loading_line.vue').default);

import App from './components/App'
import MainView from './components/MainView'
import Register from './components/Auth/Register'
import Contacts from './components/other/contacts'
import Rules from './components/other/rules'
import Login from './components/Auth/Login'
import ResetPassword from './components/Auth/ResetPassword'
import Add_advertisement from './components/board/add_advertisement'
import Add_advertisement1 from './components/board/add_advertisement1'
import Add_advertisement2 from './components/board/add_advertisement2'
import Add_advertisement3 from './components/board/add_advertisement3'
import Loading_line from './components/board/loading_line'

import Vuex from 'vuex';
Vue.use(Vuex);
import {store} from './store';

axios.defaults.baseURL = 'http://localhost:/api';

const router = new VueRouter({

    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'main',
            component: MainView,
            children: [

                {
                    path: '/login',
                    name: 'login',
                    component: Login
                },
                {
                    path: '/register',
                    name: 'register',
                    component: Register,

                },
                {
                    path: '/reset_password',
                    name: 'reset_password',
                    component: ResetPassword,

                },
                {
                    path: '/contacts',
                    name: 'contacts',
                    component: Contacts,

                },
                {
                    path: '/rules',
                    name: 'rules',
                    component: Rules,

                },
                {
                    path: '/add_advertisement',
                    name: 'add_advertisement',
                    component: Add_advertisement,
                    children: [
                        {
                            path: '/add_advertisement',
                            name: 'add_advertisement',
                            component: Add_advertisement1,
                        },
                        {
                            path: '/add_advertisement2',
                            name: 'add_advertisement2',
                            component: Add_advertisement2,
                        },
                        {
                            path: '/add_advertisement3',
                            name: 'add_advertisement3',
                            component: Add_advertisement3,
                        },

                    ]
                },

                ]
        },




    ],
});



const app = new Vue({
    el: '#app',
    components: { App, Loading_line },
    router,
    store
});
