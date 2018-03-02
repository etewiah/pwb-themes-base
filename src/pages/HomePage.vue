<template>
  <div>
    <LandingHero :blockContents="currentPageParts.landing_hero"></LandingHero>
    <AboutUsServices :blockContents="currentPageParts.about_us_services"></AboutUsServices>
    <PropertiesRow :propertiesToDisplay="propertiesForSale" :saleOrRent="'buy'"></PropertiesRow>
    <PropertiesRow :propertiesToDisplay="propertiesForRent" :saleOrRent="'rent'" ></PropertiesRow>
    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam in aliquet odio. Aliquam eu est vitae tellus bibendum tincidunt. Suspendisse potenti.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm4 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Contact us</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. Nulla volutpat tincidunt ornare.
              </v-card-text>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>777-867-5309</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Chicago, US</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>john@vuetifyjs.com</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </div>
</template>
<script>
import LandingHero from '@/components/page-parts/LandingHero'
import AboutUsServices from '@/components/page-parts/AboutUsServices'
import PropertiesRow from '@/components/PropertiesRow'
export default {
  components: {
    PropertiesRow,
    AboutUsServices,
    LandingHero,
  },
  mounted: function() {
    this.$store.dispatch('loadPage', 'home')
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage
    },
    currentPageParts() {
      return this.$store.state.currentPageParts
    },
    propertiesForSale() {
      if (this.$store.state.properties) {
        return this.$store.state.properties.for_sale
      } else {
        return []
      }
    },
    propertiesForRent() {
      if (this.$store.state.properties) {
        return this.$store.state.properties.for_rent
      } else {
        return []
      }
    },
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
