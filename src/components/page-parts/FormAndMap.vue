<template>
  <section>
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm6>
          <v-card class="elevation-1">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">
                Fill in the following form to contact us:
              </div>
            </v-card-title>
            <v-card-text>
              <form @submit.prevent="onSubmitContactForm">
                <v-layout v-for="(field, index) in contactUsFields" :key="field.fieldName" row>
                  <v-flex xs12 sm12 offset-sm0>
                    <v-text-field name="title" :label="'Title '" v-model="field.fieldValue"></v-text-field>
                  </v-flex>
                </v-layout>
                <v-flex xs12 sm12 offset-sm0>
                  <v-btn class="primary" type="submit">Send</v-btn>
                </v-flex>
              </form>
            </v-card-text>
          </v-card>
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
          <pwb-map style="min-height: 600px;" :mapMarkers="mapMarkers" :zoom="15">
          </pwb-map>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>
<script>
import PwbMap from '@/components/PwbMap'
export default {
  components: {
    PwbMap,
  },
  props: [],
  data() {
    return {
      pendingChanges: {},
      hasPendingChanges: false,
      contactUsFields: [{
        labelTextTKey: "webContentLabels.suffixEn",
        fieldType: "simpleInput",
        fieldName: "page_title_en",
        inputType: "text",
        constraints: {
          inputValue: {}
        }
      }, {
        labelTextTKey: "webContentLabels.suffixDe",
        fieldType: "simpleInput",
        fieldName: "page_title_de",
        inputType: "text",
        constraints: {
          inputValue: {}
        }
      }],

    }
  },
  computed: {
    mapMarkers: function() {
      if (this.$store.state.agencyMapMarker.position) {
        // var lat = this.$store.state.agencyMapMarker.position.lat
        // var lng = this.$store.state.agencyMapMarker.position.lng
        return [this.$store.state.agencyMapMarker]
      } else {
        return []
      }
      // `this` points to the vm instance
    }
  },
  methods: {
    // onTitleChange(fieldName, newValue) {
    //   if (this.currentPage[fieldName] !== newValue) {
    //     this.pendingChanges[fieldName] = newValue
    //   } else {
    //     delete this.pendingChanges[fieldName]
    //   }
    //   this.hasPendingChanges = Object.keys(this.pendingChanges).length > 0
    // },
    onSubmitContactForm() {
      var that = this
      Object.keys(this.pendingChanges).forEach(function(pendingChangeKey) {
        that.currentPage[pendingChangeKey] = that.pendingChanges[pendingChangeKey]
      })
      this.$store.dispatch('updatePage')
      // TODO: ensure above is successfull before calling below:
      this.pendingChanges = {}
      this.hasPendingChanges = false
    }

  }
}

</script>
