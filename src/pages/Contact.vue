<template>
  <main-layout>
    <div class="page-title">
      <h1>{{ $t('contact.label') }}</h1>
      <div class="page-subtitle">
        <h4>{{ $t('contact.getInTouch') }}</h4>
      </div>
    </div>

    <div id="content" class="page-content site-content single-post" role="main">
      <div class="row">
        <div class=" col-xs-12 col-sm-4 ">
          <div id="info_list_1" class="info-list-w-icon">

            <div class="info-block-w-icon">
              <div class="ci-icon">
                <i class="linecons linecons-phone"></i>
              </div>
              <div class="ci-text">
                <h4>+55 84 998187108</h4>
              </div>
            </div>

            <div class="info-block-w-icon">
              <div class="ci-icon">
                <i class="linecons linecons-location"></i>
              </div>
              <div class="ci-text">
                <h4>{{ $t('contact.location') }}</h4>
              </div>
            </div>
            
            <div class="info-block-w-icon">
              <div class="ci-icon">
                <i class="linecons linecons-mail"></i>
              </div>
              <div class="ci-text">
                <h4>info@jeansilva.com.br</h4>
              </div>
            </div>
          </div>
        </div>

        <div class=" col-xs-12 col-sm-8 ">
          <div class="block-title">
            <h2>{{ $t('contact.form.label') }}</h2>
          </div>

          <form id="contact_form" class="contact-form">

            <!-- <div class="alert messages">
              heuh
            </div> -->
            <div v-if="errors.length" class="alert alert-danger alert-dismissable">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <ul>
                <li v-for="(error, index) in errors" :key="`error-${index}`">{{ error }}</li>
              </ul>
            </div>

            <div v-if="successMessage" class="alert alert-success alert-dismissable">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              {{ successMessage }}
            </div>

            <div class="controls two-columns">
              <div class="fields clearfix">
                <div class="left-column">
                  <div class="form-group form-group-with-icon">
                    <input id="form_name" type="text" name="name" v-model="data.name" class="form-control" :placeholder="$t('contact.form.fullname')">
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group form-group-with-icon">
                    <input id="form_email" type="email" name="email" v-model="data.email" class="form-control" :placeholder="$t('contact.form.email')">
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group form-group-with-icon">
                    <input id="form_name" type="text" name="subject" v-model="data.subject" class="form-control" :placeholder="$t('contact.form.subject')">
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="right-column">
                  <div class="form-group form-group-with-icon">
                    <textarea id="form_message" name="message" v-model="data.message" class="form-control" :placeholder="$t('contact.form.message')" rows="7"></textarea>
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>

              <div name="recaptcha" class="g-recaptcha" data-sitekey="6LcV4QAVAAAAAMuPNmbqsBYr-kfbjTmbp9kLy_bM" data-callback="correctCaptcha"></div>

              <span v-on:click="submitContact()" class="btn btn-primary">
                {{ $t('contact.form.send') }}
              </span>
            </div>
          </form>

        </div>

      </div>
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
      helper.initComponents();

      // recaptcha config
      window.correctCaptcha = (response) => {
        this.$set(this.data, 'g-recaptcha-response', response);
      };

      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
      document.head.appendChild(recaptchaScript);
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
