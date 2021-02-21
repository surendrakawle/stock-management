<template>
  <div>
    <!-- Page Loader -->
    <div class="page-loader-wrapper" v-if="isLogin">
        <div class="loader">
            <div class="preloader">
                <div class="spinner-layer pl-red">
                    <div class="circle-clipper left">
                        <div class="circle"></div>
                    </div>
                    <div class="circle-clipper right">
                        <div class="circle"></div>
                    </div>
                </div>
            </div>
            <p>Please wait...</p>
        </div>
    </div>
    <!-- #END# Page Loader -->
    <!-- Overlay For Sidebars -->
    <div class="overlay" v-if="isLogin"></div>
    <!-- #END# Overlay For Sidebars -->
    <!-- Search Bar -->
    <div class="search-bar" v-if="isLogin">
        <div class="search-icon">
            <i class="material-icons">search</i>
        </div>
        <input type="text" placeholder="START TYPING...">
        <div class="close-search">
            <i class="material-icons">close</i>
        </div>
    </div>
    <!-- #END# Search Bar -->
    <app-header v-if="isLogin"> </app-header>
    <app-sidebar v-if="isLogin"> </app-sidebar>
    <router-view v-if="isLogin"></router-view>
    <app-sign-in v-if="!isLogin"> </app-sign-in>
  </div>
</template>
<script>
import Header from './Header'
import Sidebar from './Sidebar'
import Footer from './Footer'
import SignIn from './SignIn'
export default {
    components:{
        'app-header': Header,
        'app-sidebar': Sidebar,
        'app-footer': Footer,
        'app-sign-in': SignIn
    },
    data: function () {
        return {
            isLogin: true
        }
    }
};
</script>