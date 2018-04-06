<template>
  <div class="footercolor" style="color:white;" flat tile>
    <v-container fill-height :dark="dark" class="pb-0 pt-4">
      <v-layout row wrap align-baseline>
        <v-flex xs4>
          <div class="title mb-3">
            {{ currentAgency.display_name }}
          </div>
          <div v-if="currentAgency.phone_number_primary">
            <v-icon size="18px" color="white" class="mr-3">fa-phone</v-icon>
            {{ currentAgency.phone_number_primary }}
          </div>
          <div v-if="currentAgency.email_primary">
            <v-icon size="18px" color="white" class="mr-3">fa-envelope</v-icon>
            {{ currentAgency.email_primary }}
          </div>
        </v-flex>
        <v-flex xs4 class="mb-2" style="margin-top:auto;">
          <template v-for="(value, key) in displaySettings.social_media">
            <template v-if="socialMediaIcons[key]">
              <v-btn :href="value" icon class="mx-3">
                <v-icon large color="accent" size="24px">{{ socialMediaIcons[key].classes }}</v-icon>
              </v-btn>
            </template>
          </template>
        </v-flex>
        <v-flex xs4 class="" style="margin-top:auto;"align-baseline>
          <div> <span v-html="displaySettings.footer_html"></span>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container class="pt-0">
      <hr style="border-top:1px solid white;" class="mt-0 mb-3">
      <v-layout>
        <v-flex xs12 class="">
          <span class="text-sm-left">
            <router-link :to="{path: link.target_path}" exact v-for="link in displaySettings.footer_links" :key="link.slug" icon class="white--text mr-3">
              {{link.link_title}}
            </router-link>
          </span>
          <span class="text-sm-right ml-3" style="float:right;">
            Powered by <a class="white--text" href="https://propertywebbuilder.com" target="_blank"><strong>PropertyWebBuilder</strong></a>
          </span>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  components: {
    // faCoffee,
    // FontAwesomeIcon
  },
  data() {
    return {
      socialMediaIcons: {
        facebook: {
          classes: "fab fa-facebook"
        },
        linkedin: {
          classes: "fab fa-linkedin"
        },
        twitter: {
          classes: "fab fa-twitter"
        },
        gplus: {
          classes: "fab fa-google-plus"
        },
        pinterest: {
          classes: "fab fa-pinterest"
        },
        youtube: {
          classes: "fab fa-youtube"
        },
      },
      // icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
    }
  },
  computed: {
    dark: function() {
      // TODO - figure out how to calculate this 
      // based on how dark the footer color is
      return true
    },
    displaySettings: function() {
      return this.$store.state.displaySettings
    },
    currentAgency: function() {
      return this.$store.state.currentAgency
    },
  },
  methods: {}
}

</script>
<style scoped>


</style>
