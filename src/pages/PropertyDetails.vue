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
              <v-spacer></v-spacer>
              <li class="hidden-xs"><i class="fa fa-bed"></i> <small>
                      1
                    </small></li>
              <li class="hidden-xs"><i class="fa fa-shower"></i> <small>
                      1.0
                    </small></li>
              <li class="hidden-xs"><i class="fa fa-arrows-alt"></i> <small>
                      90.0m<sup>2</sup></small></li>
              <li class="hidden-xs"></li>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4>
          <v-card class="elevation-2 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">
                Request Info:
              </div>
            </v-card-title>
            <v-card-text>
              <form @submit.prevent="onSubmitContactForm">
                <v-layout v-for="(field, index) in propertyContactFields" :key="field.fieldName" row>
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
export default {
  components: {
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
      if (this.currentProperty) {
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
      // `this` points to the vm instance
    }
  },
  data() {
    return {
      // pendingChanges: {},
      // hasPendingChanges: false,
      propertyContactFields: [{
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
}

</script>
