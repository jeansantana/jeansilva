<template>
  <span>
    <div class="site-nav mobile-menu-hide">
      <ul class="leven-classic-menu site-main-menu">
        <li class="menu-item" v-bind:class="{ 'current-menu-item': isActive(item.route) }" v-for="item in menuItems" :key="item.route">
          <router-link :to="item.route">
            {{ item.title }}
          </router-link>
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
  export default {
    name: 'MainMenu',

    data() {
      return {
        menuItems: this.$t('mainMenu.items').filter((menuItem) => menuItem.visible),
      }
    },

    methods: {
      isActive (route) {
        if (this.$router.currentRoute) {
          return route === this.$router.currentRoute.fullPath;
        }

        return false;
      }
    },

    components: { }
  }
</script>
