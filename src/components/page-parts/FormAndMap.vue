<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm6>
          <ContactUsForm></ContactUsForm>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card class="elevation-2 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">Contact Information</div>
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
          <div v-if="mapMarkers">
            <pwb-map style="min-height: 600px;" :mapMarkers="mapMarkers" :zoom="15">
            </pwb-map>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
import PwbMap from '@/components/PwbMap'
import ContactUsForm from '@/components/sections/ContactUsForm'
export default {
  components: {
    PwbMap,
    ContactUsForm,
  },
  props: [],
  data() {
    return {}
  },
  computed: {
    mapMarkers: function() {
      if (this.$store.state.currentAgency.agency_map_marker) {
        return [this.$store.state.currentAgency.agency_map_marker]
      } else {
        return null
      }
    }
  },
  methods: {}
}

</script>
