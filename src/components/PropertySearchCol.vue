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
          <v-layout v-for="(field, index) in searchFields" :key="field.fieldName" row>
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
  </v-container>
</template>
<script>
export default {
  props: [],
  data() {
    return {
      searchFields: [{
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
