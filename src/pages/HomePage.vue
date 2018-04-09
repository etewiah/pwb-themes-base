<template>
  <div>
    <LandingHero :blockContents="currentPageParts.landing_hero"></LandingHero>
    <AboutUsServices :blockContents="currentPageParts.about_us_services"></AboutUsServices>
    <PropertiesRow :propertiesToDisplay="propertiesForSale" :saleOrRent="'buy'"></PropertiesRow>
    <!-- <PropertiesRow :propertiesToDisplay="propertiesForRent" :saleOrRent="'rent'" ></PropertiesRow> -->
    <section style="display:none;">
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Company info</div>
              </v-card-title>
              <v-card-text>
                Cras facilisis mi vitae nunc lobortis pharetra. 
              </v-card-text>
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
  watch: {
    '$route' (to, from) {
      if (to.params.locale !== from.params.locale) {
        this.$store.dispatch('loadPage', 'home')
      }
    }
  },
  mounted: function() {
    this.$store.dispatch('loadPage', 'home')
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage
    },
    currentPageParts() {
      return this.$store.state.currentPageParts || {}
    },
    propertiesForSale() {
      if (this.$store.state.summaryProperties) {
        return this.$store.state.summaryProperties.for_sale
      } else {
        return []
      }
    },
    propertiesForRent() {
      if (this.$store.state.summaryProperties) {
        return this.$store.state.summaryProperties.for_rent
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
