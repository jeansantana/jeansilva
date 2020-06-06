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

          <form id="contact_form" class="contact-form" action="contact_form/contact_form.php" method="post">

            <div class="messages"></div>

            <div class="controls two-columns">
              <div class="fields clearfix">
                <div class="left-column">
                  <div class="form-group form-group-with-icon">
                    <input id="form_name" type="text" name="name" class="form-control" :placeholder="$t('contact.form.fullname')" required="required" data-error="Name is required.">
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group form-group-with-icon">
                    <input id="form_email" type="email" name="email" class="form-control" :placeholder="$t('contact.form.email')" required="required" data-error="Valid email is required.">
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>

                  <div class="form-group form-group-with-icon">
                    <input id="form_name" type="text" name="subject" class="form-control" :placeholder="$t('contact.form.subject')" required="required" data-error="Subject is required.">
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
                <div class="right-column">
                  <div class="form-group form-group-with-icon">
                    <textarea id="form_message" name="message" class="form-control" :placeholder="$t('contact.form.message')" rows="7" required="required" data-error="Please, leave me a message."></textarea>
                    <div class="form-control-border"></div>
                    <div class="help-block with-errors"></div>
                  </div>
                </div>
              </div>

              <div class="g-recaptcha" data-sitekey="6LcV4QAVAAAAAMuPNmbqsBYr-kfbjTmbp9kLy_bM"></div>

              <input type="submit" class="button btn-send disabled" :value="$t('contact.form.send')">
            </div>
          </form>

        </div>

      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue';
  import helper from '../helper';

  export default {
    methods: { },
    created() { },

    mounted() {
      helper.initComponents();

      let recaptchaScript = document.createElement('script');
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js');
      document.head.appendChild(recaptchaScript);
    },

    components: {
      MainLayout
    }
  }
</script>
