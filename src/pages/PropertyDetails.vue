<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-0">
        <v-flex xs12 sm8>
          <v-card class="elevation-1">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">
                {{currentProperty.title}}
              </div>
            </v-card-title>
            <v-card-media :src="currentProperty.primary_image_url" height="500px">
              <v-container fill-height fluid>
                <v-layout fill-height>
                  <v-flex xs12 align-end flexbox>
                    <span class="headline white--text" v-text="" />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text>
              {{currentProperty.description}}
            </v-card-text>
            <v-card-actions>
              <li class="hidden-xs"><i class="fa fa-bed"></i> <small>
                      1
                    </small></li>
              <li class="hidden-xs"><i class="fa fa-shower"></i> <small>
                      1.0
                    </small></li>
              <li class="hidden-xs"><i class="fa fa-arrows-alt"></i> <small>
                      90.0m<sup>2</sup></small></li>
              <li class="hidden-xs"></li>
              <v-spacer></v-spacer>
              <social-sharing class="center" inline-template>
                <div class="social-icons icon-circle">
                  <network network="facebook">
                    <a>
                      <v-icon large style="color: #3C599F;"  size="20px">fab fa-facebook</v-icon>
                    </a>
                  </network>
                  <network network="googleplus">
                    <a>
                      <v-icon large style="color: #CF3D2E;"  size="20px">fab fa-google-plus</v-icon>
                    </a>
                  </network>
                  <network network="linkedin">
                    <a>
                      <v-icon large color="" style="color: #0085AE;" size="20px">fab fa-linkedin</v-icon>
                    </a>
                  </network>
                  <network network="twitter">
                    <v-btn large icon>
                      <v-icon large color="blue" size="20px">fab fa-twitter</v-icon>
                    </v-btn>
                  </network>
                </div>
              </social-sharing>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <PropertyEnquiry :propId="currentProperty.id"></PropertyEnquiry>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container fluid class="pa-0">
      <pwb-map style="min-height: 600px;" :mapMarkers="mapMarkers" :zoom="15">
      </pwb-map>
    </v-container>
  </section>
</template>
<script>
import PwbMap from '@/components/PwbMap'
import PropertyEnquiry from '@/components/sections/PropertyEnquiryForm'
export default {
  components: {
    PropertyEnquiry,
    PwbMap,
  },
  props: [],
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('loadProperty', to.params.propertyId)
    }
  },
  mounted: function() {
    this.$store.dispatch('loadProperty', this.$route.params["propertyId"])
  },
  computed: {
    currentProperty() {
      return this.$store.state.currentProperty
    },
    mapMarkers: function() {
      if (this.currentProperty && this.currentProperty.id) {
        let mapMarker = {
          id: this.currentProperty.id,
          title: this.currentProperty.title,
          image_url: this.currentProperty.primary_image_url,
          position: {
            lat: this.currentProperty.latitude,
            lng: this.currentProperty.longitude
          }
        }
        return [mapMarker]
      } else {
        return []
      }
    }
  },
  data() {
    return {}
  },
}

</script>
<style scoped>
</style>
