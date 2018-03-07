<template>
  <v-app light>
    <v-container :fluid="fluid" class="pa-0">
      <v-toolbar class="primary" style="height:28px;" primary>
        <v-toolbar-items>
          <LangSwitcher></LangSwitcher>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <span v-text="title" style="margin-top: -30px;"></span>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-toolbar>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-side-icon class="hidden-md-and-up"></v-toolbar-side-icon>
        <v-toolbar-items class="hidden-sm-and-down">
          <template v-for="item in displaySettings.top_nav_links">
            <v-btn :to="{path: item.target_path}" exact flat>{{item.link_title}}</v-btn>
          </template>
          <v-btn></v-btn>
        </v-toolbar-items>
<!--         <v-menu offset-y>
          <v-btn icon dark slot="activator">
            <v-icon dark>language</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="lang in locales" :key="lang" @mouseover.native="changeLocale(lang)">
              <v-list-tile-title>
                {{lang}}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn icon dark slot="activator">
            <v-icon dark>format_paint</v-icon>
          </v-btn>
          <v-list>
            <v-list-tile v-for="n in colors" :key="n" :class="n" @mouseover.native="theme = n">
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-menu offset-y>
          <v-btn icon @click.stop="rightDrawer = !rightDrawer">
            <v-icon dark>language</v-icon>
          </v-btn>
        </v-menu> -->
      </v-toolbar>
      <v-expansion-panel>
        <v-expansion-panel-content>
          <v-card>
            <v-card-text>tttt</v-card-text>
          </v-card>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <ThemeGenerator></ThemeGenerator>
      <v-content>
        <router-view/>
        <v-footer class="blue darken-2">
          <v-layout row wrap align-center>
            <v-flex xs12>
              <div class="white--text ml-3">
                Powered with
                <v-icon class="red--text">favorite</v-icon>
                by <a class="white--text" href="https://vuetifyjs.com" target="_blank">PropertyWebBuilder</a>
              </div>
            </v-flex>
          </v-layout>
        </v-footer>
      </v-content>
    </v-container>
  </v-app>
</template>
<script>
import ThemeGenerator from '@/components/ThemeGenerator'
import LangSwitcher from '@/components/LangSwitcher'
export default {
  components: {
    ThemeGenerator,
    LangSwitcher
  },
  data() {
    return {
      // locales: ['en', 'nl', 'es'],
      colors: ['blue', 'green', 'purple', 'red'],
      fluid: true,
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
<style scoped>
</style>
