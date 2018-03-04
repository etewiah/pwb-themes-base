<template>
  <v-container>
    <v-card height="800px">
      <v-card-title primary-title>
        <div>
          <div class="headline">Search</div>
          <span class="grey--text">...</span>
        </div>
      </v-card-title>
      <v-card-text>
        <form @submit.prevent="onSubmitContactForm">
          <v-layout v-for="(fieldDetails, index) in searchFields" :key="fieldDetails.fieldName" row>
            <v-flex xs12 sm12 offset-sm0>
            <template v-if="fieldDetails.inputType == 'select'">
              <SelectField :fieldDetails="fieldDetails"  :fieldOptions="fieldOptions" ></SelectField>
            </template>
            <template v-else>
              <v-text-field name="title" :label="'Title '" v-model="fieldDetails.fieldValue"></v-text-field>
            </template>
            </v-flex>
          </v-layout>
          <v-flex xs12 sm12 offset-sm0>
            <v-btn class="primary" type="submit">Send</v-btn>
          </v-flex>
        </form>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import SelectField from '@/components/form-fields/SelectField'
// import { required, minLength } from 'vuelidate/lib/validators'
// import _ from 'lodash'
export default {
  components: {
    SelectField
  },
  props: [],
  data() {
    return {
      fieldOptions: [],
      searchFields: [{
        labelTextTKey: "fieldLabels.tipo",
        tooltipTextTKey: "",
        fieldName: "prop_type_key",
        inputType: "select",
        optionsKey: "property-types",
      }, {
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
