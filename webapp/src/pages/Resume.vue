<template>
  <main-layout>
    <div class="page-title">
      <h1>{{ $t('resume.label') }}</h1>
      <div class="page-subtitle">
        <h4>{{ getYearsOfExperience() }}</h4>
      </div>
    </div>
    <div id="content" class="page-content site-content single-post" role="main">
      <!-- history -->
      <div class="row">
        <div class=" col-xs-12 col-sm-6">
          <div class="block-title">
            <h2>{{ $t('resume.education.label') }}</h2>
          </div>

          <div id="timeline_1" class="timeline clearfix">
            <div class="timeline-item clearfix" v-for="(item, index) in education" :key="`edu-${index}`">
              <h5 class="item-period ">{{ item.year }}</h5>
              <span class="item-company">{{ item.title }}</span>
              <h4 class="item-title"><a class="company-link" :href="item.url" target="_blank">{{ item.subtitle }}</a></h4>
              <p>{{ item.description }}</p>
            </div>

          </div>
        </div>

        <div class=" col-xs-12 col-sm-6">
          <div class="block-title">
            <h2>{{ $t('resume.experience.label') }}</h2>
          </div>

          <div id="timeline_1" class="timeline clearfix">
            <div class="timeline-item clearfix" v-for="(item, index) in experience" :key="`exp-${index}`">
              <h5 class="item-period ">{{ item.year }}</h5>
              <span class="item-company">{{ item.title }}</span>
              <h4 class="item-title"><a class="company-link" :href="item.url" target="_blank">{{ item.subtitle }}</a></h4>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
      <!-- history -->

      <!-- skils -->
      <div class="row">
        <div class="col-12 block-title">
          <h2>{{ $t('resume.skills.label') }}</h2>
        </div>
        <div class=" col-xs-12 col-sm-6 ">
          <!-- Skill col 1 -->
          <div>
            <ul>
              <li v-for="(skill, index) in skills.col1" :key="`skillcol1-${index}`">
                {{ skill.title }}
              </li>
            </ul>
          </div>
          <!-- Skill col 1 -->
        </div>
        <div class=" col-xs-12 col-sm-6 ">
          <!-- Skill col 1 -->
          <div>
            <ul>
              <li v-for="(skill, index) in skills.col2" :key="`skillcol2-${index}`">
                {{ skill.title }}
              </li>
            </ul>
          </div>
          <!-- Skill col 1 -->
        </div>
      </div>
      <!-- skils -->
    </div>
  </main-layout>
</template>

<style>
  a.company-link {
    color: black;
  }
</style>

<script>
  import moment from 'moment';

  import MainLayout from '../layouts/Main.vue';
  import helper from '../helper';

  export default {
    data() {
      return {
        education: this.$t('resume.education.items'),
        experience: this.$t('resume.experience.items'),
        skills: this.$t('resume.skills.items'),
      }
    },

    mounted() {
      helper.initComponents();
    },

    methods: {
      getYearsOfExperience() {
        return `${moment().format('YYYY') - 2014} ${this.$t('resume.description')}`;
      }
    },

    components: {
      MainLayout
    }
  }
</script>
