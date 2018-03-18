<template>
  <v-card flat tile>
    <v-card-title class="">
      <strong class="subheading">Get connected with us on social networks!</strong>
      <v-spacer></v-spacer>

      <v-btn v-for="icon in icons" :key="icon" icon class="mx-3">
        <v-icon  large color="purple darken-2" size="24px">{{ icon }}</v-icon>
      </v-btn>

<!--       <v-btn v-for="icon in socialMediaLinks" :key="icon" icon class="mx-3">
        {{ icon }}
      </v-btn>
 -->
    </v-card-title>
    <v-card-text class="grey lighten-3">
      <v-layout>
        <v-flex v-for="(col, i) in rows" :key="i" xs3>
          <span class="body-2" v-text="col.title.toUpperCase()" />
          <div v-for="(child, i) in col.children" :key="i" v-text="child" />
        </v-flex>
        <v-flex xs3 layout column>
          <span class="body-2">CONTACT</span>
          <div>
            <v-icon size="18px" class="mr-3">fa-home</v-icon>
            New York, NY 10012, US
          </div>
          <div>
            <v-icon size="18px" class="mr-3">fa-envelope</v-icon>
            info@example.com
          </div>
          <div>
            <v-icon size="18px" class="mr-3">fa-phone</v-icon>
            + 01 234 567 88
          </div>
          <div>
            <v-icon size="18px" class="mr-3">fa-print</v-icon>
            + 01 234 567 89
          </div>
        </v-flex>
      </v-layout>
    </v-card-text>
    <v-card-actions class="grey lighten-2 justify-center">
      &copy;2018 — <strong>Vuetify</strong>
    </v-card-actions>
  </v-card>
</template>
<script>
// import fontawesome from "@fortawesome/fontawesome"
// // import webfonts from "@fortawesome/fontawesome-free-webfonts"
// // import brands from "@fortawesome/fontawesome-free-brands"

// import FontAwesomeIcon from '@fortawesome/vue-fontawesome'
// import faCoffee from '@fortawesome/fontawesome-free-solid/faCoffee'

export default {
  components: {
    // faCoffee,
    // FontAwesomeIcon
  },
  data() {
    return {
      icons: ['fab fa-facebook', 'fab fa-twitter', 'fab fa-google-plus', 'fab fa-linkedin', 'fab fa-instagram'],
      rows: [{
          title: 'Company Name',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
        },
        {
          title: 'Products',
          children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
        },
        {
          title: 'Useful Links',
          children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
        }
      ]
    }
  },
  computed: {
    socialMediaLinks: function() {
      return this.$store.state.displaySettings.social_media
    }
  },
  methods: {}
}

</script>
<style scoped>


</style>
