<template>
  <v-card class="elevation-2">
    <v-card-title primary-title class="layout">
      <div class="headline">
        {{ $t("client.contactUs") }}:
      </div>
    </v-card-title>
    <v-card-text>
      <v-form v-model="formValid" ref="enqForm" lazy-validation @submit.prevent="onSubmitEnquiry">
        <v-layout v-for="(field) in contactUsFields" :key="field.fieldName" row>
          <v-flex xs12 sm12 offset-sm0>
            <v-text-field :multi-line="field.multiLine" :required="true" :rules="field.validationRules" name="" :label="$t(field.labelTextTKey)" v-model="enquiryContent[field.fieldName]"></v-text-field>
          </v-flex>
        </v-layout>
        <p v-if="contactUsErrors.length">
          <template v-for="error in contactUsErrors">
            <v-alert outline color="error" icon="warning" :value="true">
              {{error}}
            </v-alert>
          </template>
        </p>
        <p v-if="contactUsSuccess.length">
          <v-alert outline color="success" dismissible v-model="successModel">
            {{ contactUsSuccess }}
          </v-alert>
        </p>
        <v-flex xs12 sm12 offset-sm0>
          <template v-if="contactUsSending">
            <v-progress-linear :indeterminate="true"></v-progress-linear>
          </template>
          <v-btn class="primary" type="submit">Send</v-btn>
        </v-flex>
      </v-form>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  components: {},
  props: [],
  data() {
    return {
      successModel: true,
      // above only needed so success alert can be dismissed
      formValid: false,
      // validationErrors: [],
      contactUsFields: [{
        labelTextTKey: "client.name",
        fieldType: "simpleInput",
        fieldName: "name",
        inputType: "text",
        validationRules: [
          v => !!v || 'Name is required',
          // v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }, {
        labelTextTKey: "client.message",
        multiLine: true,
        fieldName: "message",
        inputType: "text",
        validationRules: [
          // v => !!v || 'E-mail is required',
          // v => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) || 'E-mail must be valid'
        ]
      }],
      enquiryContent: {
        name: "dfds",
        message: ""
      }
    }
  },
  computed: {
    contactUsSending() {
      return this.$store.state.formsStore.contactUsSending
    },
    contactUsSuccess() {
      return this.$store.state.formsStore.contactUsSuccess
    },
    contactUsErrors() {
      return this.$store.state.formsStore.contactUsErrors
    },
  },
  methods: {
    onSubmitEnquiry() {
      // this.enquiryContent.property_id = this.propId
      if (!this.formValid) {
        this.$refs.enqForm.validate()
        // in case nothing has been typed in, above will display error messages
        return
      }
      // var that = this

      this.$store.dispatch('sendContactMessage', this.enquiryContent)
      // TODO: ensure above is successfull before calling below:
      // this.pendingChanges = {}
      // this.hasPendingChanges = false
    }

  }
}

</script>
