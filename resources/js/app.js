// require('./bootstrap');
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios';
// import storeData from './store/index.js'

window.Vue = require('vue');

Vue.use(VueRouter)
Vue.use(Vuex);

///router
import App from './views/App'
import Welcome from './views/Welcome'
import Category from './views/Category'
import Product from './views/Product'
import Sale from './views/Sale'
import Purchase from './views/Purchase'
import Customer from './views/Customer'
import Account from './views/Account'
const router = new VueRouter({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Welcome
    }, {
        path: '/category',
        name: 'category',
        component: Category
    }, {
        path: '/product',
        name: 'product',
        component: Product
    }, {
        path: '/sale',
        name: 'sale',
        component: Sale
    }, {
        path: '/purchase',
        name: 'purchase',
        component: Purchase
    }, {
        path: '/customer',
        name: 'customer',
        component: Customer
    }, {
        path: '/account',
        name: 'account',
        component: Account
    }, ],
});

/// store
const store = new Vuex.Store({
    state: {
        activeTab: 'home'
    },
    mutations: {
        SET_TAB(state, active) {
            state.activeTab = active;
        }
    },
    actions: {
        setTab({ commit, state }, data) {
            // console.log("work");
            commit('SET_TAB', data);
        }
    }
})
const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});