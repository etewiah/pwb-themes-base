<template>
  <section fluid>
    <v-container>
      <v-layout wrap class="my-3" align-top>
        <v-flex xs8>
          <PropertiesCol :propertiesToDisplay="propertiesForRent" :saleOrRent="'rent'"></PropertiesCol>
        </v-flex>
        <v-flex xs4>
          <PropertySearchCol></PropertySearchCol>
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
    this.$store.dispatch('loadPage', 'home')
  },
  computed: {
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
      if (this.$store.state.properties) {
        return this.$store.state.properties.for_rent
      } else {
        return []
      }
    },
  },
}

</script>
