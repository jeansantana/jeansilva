<template>
  <main-layout>
    <div class="page-title">
      <h1>{{ $t('resume.label') }}</h1>
      <div class="page-subtitle">
        <h4>{{ $t('resume.description') }}</h4>
      </div>
    </div>

    <div id="content" class="page-content site-content single-post" role="main">
      <div class="row">
        <div class=" col-xs-12 col-sm-6">
          <div class="block-title">
            <h2>{{ $t('resume.education.label') }}</h2>
          </div>

          <div id="timeline_1" class="timeline clearfix">
            <div class="timeline-item clearfix" v-for="item in education" :key="item.key">
              <h5 class="item-period ">{{ item.year }}</h5>
              <span class="item-company">{{ item.title }}</span>
              <h4 class="item-title">{{ item.subtitle }}</h4>
              <p>{{ item.description }}</p>
            </div>

          </div>
        </div>

        <div class=" col-xs-12 col-sm-6">
          <div class="block-title">
            <h2>{{ $t('resume.experience.label') }}</h2>
          </div>

          <div id="timeline_1" class="timeline clearfix">
            <div class="timeline-item clearfix" v-for="item in experience" :key="item.key">
              <h5 class="item-period ">{{ item.year }}</h5>
              <span class="item-company">{{ item.title }}</span>
              <h4 class="item-title">{{ item.subtitle }}</h4>
              <p>{{ item.description }}</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main-layout>
</template>

<script>
  import MainLayout from '../layouts/Main.vue'

  export default {
    data() {
      return {
        education: [{
          key: "01",
          year: this.$t('resume.education.item.ifrn.year'),
          title: this.$t('resume.education.item.ifrn.title'),
          subtitle: this.$t('resume.education.item.ifrn.subtitle'),
          description: this.$t('resume.education.item.ifrn.description'),
        }, {
          key: "02",
          year: this.$t('resume.education.item.college.year'),
          title: this.$t('resume.education.item.college.title'),
          subtitle: this.$t('resume.education.item.college.subtitle'),
          description: this.$t('resume.education.item.college.description'),
        }, {
          key: "03",
          year: this.$t('resume.education.item.masters.year'),
          title: this.$t('resume.education.item.masters.title'),
          subtitle: this.$t('resume.education.item.masters.subtitle'),
          description: this.$t('resume.education.item.masters.description'),
        }],
        experience: [{
          key: "01",
          year: this.$t('resume.experience.item.sinfo.year'),
          title: this.$t('resume.experience.item.sinfo.title'),
          subtitle: this.$t('resume.experience.item.sinfo.subtitle'),
          description: this.$t('resume.experience.item.sinfo.description'),
        }]
      }
    },

    components: {
      MainLayout
    }
  }
</script>
