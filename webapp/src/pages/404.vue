<template>
  <main-layout>
    <div id="main-content" class="single-page-content nothing-found">
      <div id="primary" class="content-area">

        <div id="content" class="page-content site-content single-post" role="main">

          <div class="page-content">
            <h1 class="nf-page-title">404</h1>
            <p>It looks like nothing was found at this location.</p>
          </div>

        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import helper from '../helper';

  export default {
    mounted() {
      helper.initComponents();
    },

    components: {
      MainLayout
    }
  }
</script>
