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
              <a href="index.html">
                <div class="logo-symbol">J</div>
                <div class="logo-text">Jean <span>Silva</span></div>
              </a>
            </div>
            <!-- /Text Logo -->

            <!-- Navigation -->
            <MainMenu/>
            <!-- Navigation -->

            <!-- Mobile Menu Toggle -->
            <a class="menu-toggle mobile-visible">
              <i class="fa fa-bars"></i>
            </a>
            <!-- Mobile Menu Toggle -->
          </div>
        </header>
        <!-- /Header -->

        <div id="main" class="site-main">
          <div id="main-content" class="single-page-content">
            heuh
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from './MainMenu.vue';

export default {
  name: 'Home',
  components: {
    MainMenu,
  }
}
</script>
