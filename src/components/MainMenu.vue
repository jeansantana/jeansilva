<template>
  <div class="site-nav mobile-menu-hide">
    <ul class="leven-classic-menu site-main-menu">
      <li class="menu-item" v-for="item in menuItems" :key="item.message">
        <a href="#">{{ item.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [{
        title: 'About me',
        link: '#'
      }, {
        title: 'Resume',
        link: '#'
      }, {
        title: 'Portifolio',
        link: '#'
      }, {
        title: 'Contacts',
        link: '#'
      }],
    }
  },

  name: 'MainMenu',
}
</script>
