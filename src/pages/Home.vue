<template>
  <main-layout>
    <div id="content" class="page-content site-content single-post" role="main">
      <!-- Home Page Top Part -->
      <div class="row">
        <div class=" col-xs-12 col-sm-12">
          <div class="home-content">
            <div class="row flex-v-align">
              
              <div class="col-sm-12 col-md-5 col-lg-5">
                <div class="home-photo">
                  <div class="hp-inner">
                  </div>
                </div>
              </div>

              <div class="col-sm-12 col-md-7 col-lg-7">
                <div class="home-text hp-left">
                  <h1>Jean Silva</h1>
                  <p>
                    {{ $t('aboutMe.description') }}
                  </p>

                  <!-- <div class="home-buttons">
                    <a href="#" target="_blank" class="btn btn-primary">Download CV</a>
                    <v-link class="btn btn-secondary" v-bind:href="'/contact'">
                      {{ $t('contact.label') }}
                    </v-link>
                  </div> -->
                  <div class="row about-quick-info">
                    <div class="col-xs-12 col-sm-6" v-for="(item, index) in profileItems" :key="`profile-item-${index}`">
                      <div class="info-list-w-icon">
                        <div class="info-block-w-icon">
                          <div class="ci-icon">
                            <i class="linecons" v-bind:class="item.icon"></i>
                          </div>

                          <div class="ci-text">
                            <strong>{{ item.title }}</strong>
                            <p><a class="about-link" v-bind:href="item.url" target="_blank">{{ item.description }}</a></p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Home Page Top Part -->

      <!-- Services -->
      <!-- <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="p-50"></div>

          <div class="block-title">
            <h2>{{ $t('aboutMe.whatIdo.label') }}</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6" v-for="(item, index) in whatIdoList" :key="`ido-${index}`">
          <div class="info-list-w-icon">
            <div class="info-block-w-icon">
              <div class="ci-icon">
                <i class="linecons" v-bind:class="item.icon"></i>
              </div>

              <div class="ci-text">
                <h4>{{ item.title }}</h4>
                <p>{{ item.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- Services -->
    </div>
  </main-layout>
</template>
<style>
  a.about-link {
    color: #666;
  }

  div.about-quick-info {
    padding-top: 2em;
  }
</style>
<script>
  import MainLayout from '../layouts/Main.vue';
  import helper from '../helper';

  export default {
    data() {
      return {
        // skills: this.$t('aboutMe.skills'),
        whatIdoList: this.$t('aboutMe.whatIdo.items'),
        profileItems: this.$t('aboutMe.profile.items'),
      }
    },

    mounted() {
      helper.initComponents();
    },

    components: {
      MainLayout,
    }
  }
</script>
