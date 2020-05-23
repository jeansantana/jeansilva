<template>
  <a
    v-bind:href="href"
    v-on:click="navigate"
  >
    <slot></slot>
  </a>
</template>

<script>
  import routes from '../routes';

  export default {
    name: 'VLink',

    props: {
      href: {
        type:String,
        required: true 
      }
    },

    methods: {
      navigate(event) {
        event.preventDefault();
        this.$root.currentRoute = this.href;
        window.history.pushState(
          null,
          routes[this.href],
          this.href
        );
      }
    }
  }
</script>
