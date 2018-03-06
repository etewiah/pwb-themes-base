<template>
  <section fluid>
    <v-container>
      <v-layout wrap class="my-5">
        <v-flex xs8>
          <PropertiesCol :propertiesToDisplay="propertiesForSale" :saleOrRent="'rent'"></PropertiesCol>
        </v-flex>
        <v-flex xs4>
          <PropertySearchCol :routeParams="routeParams" :searchFields="searchFields" @updateSearch="updateSearch"></PropertySearchCol>
        </v-flex>
      </v-layout>
    </v-container>
    <v-flex xs12>
      <pwb-map style="min-height: 600px;" :mapMarkers="mapMarkers" :zoom="15">
      </pwb-map>
    </v-flex>
  </section>
</template>
<script>
import PropertiesCol from '@/components/PropertiesCol'
import PropertySearchCol from '@/components/PropertySearchCol'
import PwbMap from '@/components/PwbMap'
export default {
  components: {
    PwbMap,
    PropertiesCol,
    PropertySearchCol,
  },
  mounted: function() {
    let routeParams = JSON.parse(JSON.stringify(this.routeParams))
    // need to do JSON trick above as passing $route.query to 
    // $router.push does not work
    routeParams['op'] = 'rent'
// debugger
    this.$store.dispatch('loadSearchPage', routeParams)
  },
  methods: {
    updateSearch(fieldDetails) {
      let routeParams = JSON.parse(JSON.stringify(this.routeParams))
      // need to do JSON trick above as passing $route.query to 
      // $router.push does not work
      routeParams[fieldDetails.queryStringName] = fieldDetails.newValue
      // debugger
      this.$router.push({ name: 'rentPage', query: routeParams })
      routeParams['op'] = 'rent'
      this.$store.dispatch('updateSearch', routeParams)
    }
  },
  data() {
    return {
      // searchFieldOptions: [],
      searchFields: [{
        labelTextTKey: "fieldLabels.tipo",
        tooltipTextTKey: "",
        fieldName: "prop_type_key",
        queryStringName: "type",
        inputType: "select",
        optionsKey: "property_types",
      }, {
        labelTextTKey: "simple_form.labels.search.for_rent_price_from",
        tooltipTextTKey: "",
        fieldName: "rent_price_from",
        queryStringName: "price_from",
        inputType: "slider",
        optionsKey: "rent_prices_from",
      }, {
        labelTextTKey: "simple_form.labels.search.for_rent_price_till",
        tooltipTextTKey: "",
        fieldName: "rent_price_till",
        queryStringName: "price_till",
        inputType: "select",
        optionsKey: "rent_prices_till",
      }],

    }
  },
  computed: {
    routeParams() {
      // let routeParams = {
      //   rent_price_from: "50,000"
      // }
      // if (this.$route.query.price_till) {
      //   routeParams.rent_price_till = this.$route.query.price_till
      // }
      return this.$route.query
    },
    mapMarkers() {
      let mapMarkers = []
      if (this.propertiesForSale) {
        this.propertiesForSale.forEach(function(property) {
          mapMarkers.push({
            id: property.id,
            title: property.title,
            image_url: property.primary_image_url,
            position: {
              lat: property.latitude,
              lng: property.longitude
            }
          })
        })
      }
      return mapMarkers
    },
    propertiesForSale() {
      if (this.$store.state.properties) {
        return this.$store.state.propSearchResults
      } else {
        return []
      }
    },
  },
}

</script>
