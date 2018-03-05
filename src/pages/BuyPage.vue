<template>
  <section fluid>
    <v-container>
      <v-layout wrap class="my-5">
        <v-flex xs8>
          <PropertiesCol :propertiesToDisplay="propertiesForSale" :saleOrRent="'buy'"></PropertiesCol>
        </v-flex>
        <v-flex xs4>
          <PropertySearchCol :searchFields="searchFields" @updateSearch="updateSearch"></PropertySearchCol>
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
    this.$store.dispatch('loadSearchPage', 'buy')
  },
  methods: {
    updateSearch(fieldDetails) {
      this.$store.dispatch('updateSearch', 'buy')
    }
  },
  data() {
    return {
      // searchFieldOptions: [],
      searchFields: [{
        labelTextTKey: "fieldLabels.tipo",
        tooltipTextTKey: "",
        fieldName: "prop_type_key",
        inputType: "select",
        optionsKey: "property_types",
      }, {
        labelTextTKey: "simple_form.labels.search.for_rent_price_from",
        tooltipTextTKey: "",
        fieldName: "sale_prices_from",
        inputType: "select",
        optionsKey: "sale_prices_from",
      }, {
        labelTextTKey: "simple_form.labels.search.for_rent_price_till",
        tooltipTextTKey: "",
        fieldName: "sale_prices_till",
        inputType: "select",
        optionsKey: "sale_prices_till",
      }],

    }
  },
  computed: {
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
