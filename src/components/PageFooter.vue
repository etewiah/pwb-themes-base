<template>
  <v-card flat tile>
<!--     <v-card-title class="">
    </v-card-title>
 -->    
      <v-card-text class="grey lighten-3">
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
          <v-btn v-for="icon in icons" :key="icon" icon class="mx-3">
            <v-icon large color="purple darken-2" size="24px">{{ icon }}</v-icon>
          </v-btn>
        </div>
      <v-spacer></v-spacer>
        <v-flex>
          <div> <span v-html="displaySettings.footer_html"></span>
          </div>
        </v-flex>

      </v-layout>
    </v-card-text>
    <v-card-actions class="grey lighten-2">
      <div class="text-sm-left ml-3">
        <router-link :to="{path: link.target_path}" exact v-for="link in displaySettings.footer_links" :key="link.slug" icon class="mx-3">
          {{link.link_title}}
        </router-link>
      </div>
      <v-spacer></v-spacer>
      <div class="text-sm-right ml-3" style="float:right;">
        Powered by <a class="" href="https://vuetifyjs.com" target="_blank"><strong>PropertyWebBuilder</strong></a>
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
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      // rows: [{
      //     title: 'Company Name',
      //     children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
      //   },
      // ]
    }
  },
  computed: {
    displaySettings: function() {
      return this.$store.state.displaySettings
    },
    // footerHtml: function() {
    //   return this.$store.state.displaySettings.footer_html
    // },
    currentAgency: function() {
      return this.$store.state.currentAgency
    }
  },
  methods: {}
}

</script>
<style scoped>


</style>
