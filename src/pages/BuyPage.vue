<template>
  <section fluid>
    <v-container>
      <v-layout column wrap class="my-5" align-center>
        <v-flex xs8>
          <PropertiesCol :propertiesToDisplay="propertiesForSale"></PropertiesCol>
        </v-flex>
        <v-flex xs4>
          <!-- <PropertiesCol :propertiesToDisplay="propertiesForSale"></PropertiesCol> -->
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
import PropertiesCol from '@/components/PropertiesCol'
export default {
  components: {
    PropertiesCol,
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
