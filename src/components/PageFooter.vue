<template>
  <v-card class="" :dark="dark" flat tile>
    <!--     <v-card-title class="">
    </v-card-title>
 -->
    <v-card-text class="footercolor">
      <v-layout>
        <v-flex>
          <div class="body-2 subheading">
            {{ currentAgency.display_name }}
          </div>
          <div>
            <v-icon size="18px" class="mr-3">fa-phone</v-icon>
            {{ currentAgency.phone_number_primary }}
          </div>
          <div>
            <v-icon size="18px" class="mr-3">fa-envelope</v-icon>
            {{ currentAgency.email_primary }}
          </div>
        </v-flex>
        <v-spacer></v-spacer>
        <div>
          <template v-for="(value, key) in displaySettings.social_media">
            <template v-if="socialMediaIcons[key]">
              <v-btn :href="value" icon class="mx-3">
                <v-icon large color="accent" size="24px">{{ socialMediaIcons[key].classes }}</v-icon>
              </v-btn>
            </template>
          </template>
          <!--           <v-btn href="/ddd" v-for="icon in icons" :key="icon" icon class="mx-3">
            <v-icon large color="purple darken-2" size="24px">{{ icon }}</v-icon>
          </v-btn>
 -->
        </div>
        <v-spacer></v-spacer>
        <v-flex>
          <div> <span v-html="displaySettings.footer_html"></span>
          </div>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="">
      <div class="text-sm-left ml-3">
        <router-link :to="{path: link.target_path}" exact v-for="link in displaySettings.footer_links" :key="link.slug" icon class="white--text mx-3">
          {{link.link_title}}
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="text-sm-right ml-3" style="float:right;">
        Powered by <a class="white--text" href="https://propertywebbuilder.com" target="_blank"><strong>PropertyWebBuilder</strong></a>
      </div>
    </v-card-actions>
  </v-card>
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
