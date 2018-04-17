<template>
  <v-app v-resize="onResize" light>
    <v-container :fluid="fluid" class="pb-4 pl-0 pr-0 pt-0 elevation-0">
      <!-- had elavation-20 above but it causes a horizontal cross shadow on old ios safari -->
      <v-toolbar class="primary elevation-0" style="height:28px;" primary>
        <v-container pt-1 mt-0>
          <v-toolbar-items>
            <LangSwitcher></LangSwitcher>
          </v-toolbar-items>
          <v-spacer></v-spacer>
          <!-- <span v-text="title" style="margin-top: -30px;"></span> -->
          <v-spacer></v-spacer>
        </v-container>
      </v-toolbar>
      <MainNav :displaySettings="displaySettings"></MainNav>
      <v-expansion-panel style="display: none;">
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
      <v-footer class="pt-2" style="background: transparent;">
        <v-container :fluid="fluid" class="pa-0" light>
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
      // fluid: true,
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
    onResize() {
      // TODO - make use of this event
      // this.$vuetify.breakpoint.smAndDown
      // this.windowSize = { x: window.innerWidth, y: window.innerHeight }
      // console.log(this.windowSize)
      // console.log(this.$vuetify.breakpoint)
    }
  },
  name: 'App',
  beforeCreate: function() {
    // when served by rails, "/" should redirect to a route 
    // with a locale but just in case will default to "en"
    let locale = this.$route.params["locale"]

    // let params = this.$route.params
    if (!locale) {
      locale = "en"
      let newParams = {
        locale: locale
      }
      this.$router.push({ name: 'landing', params: newParams })
    }


    // || "en"
    this.$store.commit('setCurrentLocale', locale)
  },
  watch: {
    // active: {
    //   handler() {
    //     this.color = { hex: this.theme[this.active] }
    //   },
    //   immediate: true
    // },
    theme: {
      handler() {
        this.$vuetify.theme = this.theme
      },
      deep: true
    }
  },
  mounted: function() {
    this.$store.dispatch('loadSettings')
    // let primaryColour = this.styleVariables.primary_color || "#68c368"
    // let secondaryColour = this.styleVariables.secondary_color || "#8ec449"
    // // debugger 8E24AA
    // this.$vuetify.theme = {
    //   primary: primaryColour,
    //   secondary: secondaryColour,
    //   // secondary: "#e57373",
    //   accent: "#9c27b0",
    //   error: "#f44336",
    //   warning: "#ffeb3b",
    //   info: "#2196f3",
    //   success: "#4caf50"
    // }
  },
  computed: {
    styleVariables() {
      return this.$store.state.displaySettings.style_variables || {}
    },
    theme() {
      let primaryColour = this.styleVariables.primary_color
      // || "#68c368"
      let secondaryColour = this.styleVariables.secondary_color
      // || "#8ec449"
      let footerColour = this.styleVariables.footer_bg_color
      let actionColour = this.styleVariables.action_color
      // debugger 8E24AA
      let theme = {
        primary: primaryColour,
        secondary: secondaryColour,
        // secondary: "#e57373",
        accent: actionColour,
        error: "#f44336",
        warning: "#ffeb3b",
        info: "#2196f3",
        success: "#4caf50",
        footercolor: footerColour
      }
      return theme
    },
    fluid() {
      let body_style = this.styleVariables.body_style || "siteLayout.wide"
      return body_style === "siteLayout.wide"
    },
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
