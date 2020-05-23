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
                  <div class="owl-carousel text-rotation">
                    <div class="item">
                      <h4>{{ $t('aboutMe.skills.softwareEngineer') }}</h4>
                    </div>

                    <div class="item">
                      <h4>{{ $t('aboutMe.skills.fullStackDeveloper') }}</h4>
                    </div>
                  </div>

                  <h1>Jean Silva</h1>
                  <p>
                    {{ $t('aboutMe.description') }}
                  </p>

                  <div class="home-buttons">
                    <a href="#" target="_blank" class="btn btn-primary">Download CV</a>
                    <a href="#" target="_self" class="btn btn-secondary">{{ $t('contact.label') }}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Home Page Top Part -->

      <!-- Services -->
      <div class="row">
        <div class="col-xs-12 col-sm-12">
          <div class="p-50"></div>

          <div class="block-title">
            <h2>{{ $t('aboutMe.whatIdo.label') }}</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6" v-for="item in whatIdoList" :key="item.title">
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
      </div>
      <!-- Services -->
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    data() {
      return {
        whatIdoList: [{
          title: this.$t('aboutMe.whatIdo.item.softwareDevelopment.title'),
          description: this.$t('aboutMe.whatIdo.item.softwareDevelopment.description'),
          icon: this.$t('aboutMe.whatIdo.item.softwareDevelopment.icon')
        }]
      }
    },

    components: {
      MainLayout
    }
  }
</script>
