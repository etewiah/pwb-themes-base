<template>
  <section fluid>
    <v-container>
      <v-layout wrap class="my-5">
        <v-flex xs8>
          <PropertiesCol :propertiesToDisplay="propertiesForRent" :saleOrRent="'rent'"></PropertiesCol>
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
  watch: {
    '$route' (to, from) {
      if (to.params.locale !== from.params.locale) {
        this.loadSearch()
      }
    }
  },
  mounted: function() {
    this.loadSearch()
  },
  methods: {
    loadSearch() {
      let routeParams = JSON.parse(JSON.stringify(this.routeParams))
      routeParams['op'] = 'rent'
      this.$store.dispatch('loadSearchPage', routeParams)
    },
    updateSearch(fieldDetails) {
      let routeParams = JSON.parse(JSON.stringify(this.routeParams))
      // need to do JSON trick above as passing $route.query to 
      // $router.push does not work
      if (fieldDetails.inputType === "slider") {
        let minQueryStringName = fieldDetails.fieldName + "_min"
        let maxQueryStringName = fieldDetails.fieldName + "_max"
        routeParams[minQueryStringName] = fieldDetails.newValue[0]
        routeParams[maxQueryStringName] = fieldDetails.newValue[1]
        // routeParams[fieldDetails.queryStringName] = fieldDetails.newValue        
      } else {
        routeParams[fieldDetails.queryStringName] = fieldDetails.newValue
      }
      this.$router.push({ name: 'rentPage', query: routeParams })
      routeParams['op'] = 'rent'
      this.$store.dispatch('updateSearch', routeParams)
    }
  },
  data() {
    return {
      // searchFieldOptions: [],
      searchFields: [{
        labelTextTKey: "common.fieldLabels.propertyType",
        classNames: "sm12",
        tooltipTextTKey: "",
        fieldName: "prop_type_key",
        queryStringName: "type",
        inputType: "select",
        optionsKey: "propertyTypes",
      }, {
        labelTextTKey: "common.fieldLabels.bathrooms",
        classNames: "sm6",
        tooltipTextTKey: "",
        fieldName: "bathrooms",
        inputType: "slider",
        defaultValue: [1, 3],
        sliderOptions: {
          width: "90%",
          height: 8,
          dotSize: 16,
          min: 0,
          max: 10,
          interval: 1,
          show: true,
          // below needed so value change only occurs once dragging stops:
          lazy: true,
          tooltipDir: [
            "bottom",
            "top"
          ]
        }
      }, {
        labelTextTKey: "common.fieldLabels.bathrooms",
        classNames: "sm6",
        tooltipTextTKey: "",
        fieldName: "bedrooms",
        inputType: "slider",
        defaultValue: [2, 5],
        sliderOptions: {
          width: "90%",
          height: 8,
          dotSize: 16,
          min: 0,
          max: 20,
          interval: 1,
          show: true,
          lazy: true,
          tooltipDir: [
            "bottom",
            "top"
          ]
        }
      }, {
        labelTextTKey: "common.fieldLabels.rentalPricePerMonth",
        classNames: "sm12",
        tooltipTextTKey: "",
        fieldName: "price",
        inputType: "slider",
        defaultValue: [100, 1000],
        sliderOptions: {
          width: "100%",
          height: 8,
          dotSize: 16,
          min: 0,
          max: 10000,
          interval: 500,
          show: true,
          lazy: true,
          tooltipDir: [
            "bottom",
            "top"
          ]
        }
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
      if (this.propertiesForRent) {
        this.propertiesForRent.forEach(function(property) {
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
    propertiesForRent() {
      if (this.$store.state.propSearchResults) {
        return this.$store.state.propSearchResults
      } else {
        return []
      }
    },
  },
}

</script>
