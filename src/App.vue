<template>
  <v-app light>
    <v-container :fluid="fluid" class="pa-0 elevation-20">
      <v-toolbar class="primary" style="height:28px;" primary>
        <v-toolbar-items>
          <LangSwitcher></LangSwitcher>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <!-- <span v-text="title" style="margin-top: -30px;"></span> -->
        <v-spacer></v-spacer>
      </v-toolbar>
      <MainNav :displaySettings="displaySettings" ></MainNav>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>tttt</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <!-- <ThemeGenerator></ThemeGenerator> -->
      <v-content class="">
        <router-view/>
      </v-content>
      <v-footer class="pt-5" style="background:transparent" absolute>
        <v-container :fluid="fluid" class="pa-0" style="background:transparent" light>
          <PageFooter></PageFooter>
          <!--  -->
        </v-container>
      </v-footer>
    </v-container>
  </v-app>
</template>
<script>
import ThemeGenerator from '@/components/ThemeGenerator'
import LangSwitcher from '@/components/LangSwitcher'
import PageFooter from '@/components/PageFooter'
import MainNav from '@/components/sections/MainNav'

export default {
  components: {
    ThemeGenerator,
    LangSwitcher,
    PageFooter,
    MainNav

  },
  data() {
    return {
      // locales: ['en', 'nl', 'es'],
      colors: ['blue', 'green', 'purple', 'red'],
      fluid: false,
      clipped: false,
      drawer: true,
      fixed: false,
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'PropertyWebBuilder'
    }
  },
  methods: {
    // changeLocale(to) {
    //   // global.helper.ls.set('locale', to)
    //   // below works but I think it will be better 
    //   // to reload the app...
    //   this.$store.commit('setCurrentLocale', to)
    //   this.$store.dispatch('loadSettings')
    // },
  },
  name: 'App',
  beforeCreate: function() {
    // when served by rails, "/" should redirect to a route 
    // with a locale but just in case will default to "en"
    let locale = this.$route.params["locale"] || "en"
    this.$store.commit('setCurrentLocale', locale)
  },
  mounted: function() {
    this.$store.dispatch('loadSettings')
  },
  computed: {
    displaySettings() {
      return this.$store.state.displaySettings
    },
  },
}

</script>
<style>
body {
  background-color: #fafafa;
}
</style>
