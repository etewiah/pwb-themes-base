<template>
  <v-card class="elevation-2 transparent">
    <v-card-title primary-title class="layout justify-center">
      <div class="headline">
        {{ $t("client.requestPropertyInfo") }}:
      </div>
    </v-card-title>
    <v-card-text>
      <form @submit.prevent="onSubmitEnquiry">
        <v-layout v-for="(field, index) in propertyEnquiryFields" :key="field.fieldName" row>
          <v-flex xs12 sm12 offset-sm0>
            <v-text-field name="" :label="$t(field.labelTextTKey)" v-model="enquiryContent[field.fieldName]"></v-text-field>
          </v-flex>
        </v-layout>
        <v-flex xs12 sm12 offset-sm0>
          <v-btn class="primary" type="submit">Send</v-btn>
        </v-flex>
      </form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  components: {
  },
  props: [],
  data() {
    return {
      propertyEnquiryFields: [{
        labelTextTKey: "client.name",
        fieldType: "simpleInput",
        fieldName: "name",
        inputType: "text",
        constraints: {
          inputValue: {}
        }
      }, {
        labelTextTKey: "client.message",
        fieldType: "simpleInput",
        fieldName: "message",
        inputType: "text",
        constraints: {
          inputValue: {}
        }
      }],
      enquiryContent: {
        property_id: "1",
        name: "rr",
        message: "ss"
      }
    }
  },
  computed: {
  },
  methods: {
    onSubmitEnquiry() {
      // var that = this

      this.$store.dispatch('sendPropertyEnquiry', this.enquiryContent)
      // TODO: ensure above is successfull before calling below:
      // this.pendingChanges = {}
      // this.hasPendingChanges = false
    }

  }
}

</script>
