<template>
  <main-layout>
    <div class="page-title">
      <h1>{{ $t('contact.label') }}</h1>
      <div class="page-subtitle">
        <h4>{{ $t('contact.getInTouch') }}</h4>
      </div>
    </div>

    <div id="content" class="page-content site-content single-post" role="main">
    </div>
  </main-layout>
</template>

<script>
  import axios from 'axios';
  import qs from 'qs';

  import MainLayout from '../layouts/Main.vue';

  import helper from '../helper';

  export default {
    data() {
      return {
        data: {
          name: null,
          email: null,
          subject: null,
          message: null,
        },
        errors: [],
        successMessage: null,
      };
    },

    created() { },

    mounted() {
    },

    methods: {
      async submitContact() {
        // validate
        if (this.validate()) {
          try {
            const url = 'contact_form/contact_form.php';
            const config = {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
              }
            };

            const body = qs.stringify(this.data);

            const response = await axios.post(url, body, config);

            if ( response && response.data && response.data.type === 'danger' ) {
              this.errors.push(response.data.message);
            } else if ( response && response.data && 
                      ( response.data.type === 'success' || 
                      ( typeof(response.data) === 'string' && response.data.includes('successfully submitted') ) ) ) {
              this.successMessage = this.$t('contact.successMessage');
            }

          } catch (error) {
            this.errors.push(this.$t('contact.unexpectedError'));
          }
        }
      },

      validate() {
        this.errors = [];

        if (!this.data.name) {
          this.errors.push(this.$t('contact.form.errors.name'));
        }

        if (!this.data.email) {
          this.errors.push(this.$t('contact.form.errors.email'));
        }

        if (!this.data.subject) {
          this.errors.push(this.$t('contact.form.errors.subject'));
        }

        if (!this.data.message) {
          this.errors.push(this.$t('contact.form.errors.message'));
        }

        if (!this.data['g-recaptcha-response']) {
          this.errors.push(this.$t('contact.form.errors.recaptcha'));
        }

        return this.errors.length ? false : true;
      },
    },

    components: {
      MainLayout
    }
  }
</script>
