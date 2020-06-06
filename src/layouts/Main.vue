<template>
  <div class="page">
    <div class="lm-animated-bg"></div>
    
    <!-- Loading animation -->
    <!-- <div class="preloader">
      <div class="preloader-animation">
        <div class="preloader-spinner">
        </div>
      </div>
    </div> -->
    <!-- /Loading animation -->

    <!-- Scroll To Top Button -->
    <div class="lmpixels-scroll-to-top"><i class="lnr lnr-chevron-up"></i></div>
    <!-- /Scroll To Top Button -->

    <div class="page-scroll">
      <div id="page_container" class="page-container bg-move-effect" data-animation="transition-flip-in-right">

        <!-- Header -->
        <header id="site_header" class="header">
          <div class="header-content clearfix">

            <!-- Text Logo -->
            <div class="text-logo">
              <router-link to="/">
                <div class="logo-symbol">J</div>
                <div class="logo-text">Jean <span>Silva</span></div>
              </router-link>
            </div>
            <!-- /Text Logo -->

            <!-- Navigation -->
            <main-menu/>
            <!-- Navigation -->
          </div>
        </header>
        <!-- /Header -->

        <!-- Content -->
        <div id="main" class="site-main">
          <div id="main-content" class="single-page-content">
            <div id="primary" class="content-area">
              <slot></slot>
            </div>
          </div>
        </div>
        <!-- Content -->

        <!-- Footer -->
        <footer class="site-footer clearfix">
          <div class="footer-social">
            <ul class="footer-social-links">
              <li>
                <a href="https://www.linkedin.com/in/jeanssilva" target="_blank">Linkedin</a>
              </li>

              <li>
                <a href="https://www.facebook.com/jeangssilva" target="_blank">Facebook</a>
              </li>

              <li>
                <a href="https://www.instagram.com/jeangsilva" target="_blank">Instagram</a>
              </li>
            </ul>
          </div>
              
          <div class="footer-copyrights">
            <p>© {{ actualYear() }} All rights reserved. Jean Silva.</p>
          </div>
        </footer>
        <!-- /Footer -->
      </div>
    </div>
  </div>
</template>

<script>

import MainMenu from '../components/MainMenu.vue';
import moment from 'moment';
export default {
  name: 'Main',
  methods: {
    actualYear() {
      return moment().format('YYYY'); 
    }
  },
  components: {
    MainMenu
  },
}
</script>

<style>
  @import url('../assets/css/normalize.css');
  @import url('../assets/css/bootstrap.min.css');
  @import url('../assets/css/owl.carousel.css');
  @import url('../assets/css/magnific-popup.css');
  @import url('../assets/css/main.css');
</style>
