<template>
  <span>
    <div class="site-nav mobile-menu-hide">
      <ul class="leven-classic-menu site-main-menu">
        <li class="menu-item" v-bind:class="{ 'current-menu-item': isActive(item.route) }" v-for="item in menuItems" :key="item.route">
          <v-link v-bind:href="item.route">
            {{ item.title }}
          </v-link>
        </li>
      </ul>
    </div>
    <!-- Mobile Menu Toggle -->
    <a class="menu-toggle mobile-visible">
      <i class="fa fa-bars"></i>
    </a>
    <!-- Mobile Menu Toggle -->
  </span>
</template>

<script>
  import VLink from './VLink';

  export default {
    name: 'MainMenu',

    data() {
      return {
        menuItems: [{
          title: this.$t('mainMenu.item.aboutMe'),
          route: '/',
        }, {
          title: this.$t('mainMenu.item.resume'),
          route: '/resume',
        }, {
          title: this.$t('mainMenu.item.portifolio'),
          route: '/portifolio',
        }, {
          title: this.$t('mainMenu.item.contact'),
          route: '/contact',
        }],
      }
    },

    methods: {
      isActive (route) {
        return route === this.$root.currentRoute;
      }
    },

    components: {
      VLink,
    }
  }
</script>
