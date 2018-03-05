<template>
  <v-container>
    <v-card height="">
      <v-card-title primary-title>
        <div>
          <div class="headline">Search</div>
          <span class="grey--text">...</span>
        </div>
      </v-card-title>
      <v-card-text>
        <!-- <form @submit.prevent="onSubmitContactForm"> -->
        <v-layout v-for="(fieldDetails, index) in searchFields" :key="fieldDetails.fieldName" row>
          <v-flex xs12 sm12 offset-sm0>
            <template v-if="fieldDetails.inputType == 'select'">
              <SelectField @selectChanged="updateSearch" :fieldDetails="fieldDetails" :fieldOptions="searchFieldOptions"></SelectField>
            </template>
            <!--               <template v-else>
                <v-text-field name="title" :label="'Title '" v-model="fieldDetails.fieldValue"></v-text-field>
              </template>
 -->
          </v-flex>
        </v-layout>
        <!--           <v-flex xs12 sm12 offset-sm0>
            <v-btn class="primary" type="submit">Send</v-btn>
          </v-flex>
        </form> -->
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
  props: ["searchFields"],
  methods: {
    updateSearch(fieldDetails) {
      this.$emit('updateSearch', fieldDetails)
    }
  },
  computed: {
    searchFieldOptions() {
      return this.$store.state.searchFieldOptions
    }
  },
  // data() {
  // },
}

</script>
