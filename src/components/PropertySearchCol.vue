<template>
  <v-container>
    <v-card height="">
      <v-card-title primary-title>
        <div>
          <div class="headline">Search</div>
          <span class="grey--text"></span>
        </div>
      </v-card-title>
      <v-card-text>
        <!-- <form @submit.prevent="onSubmitContactForm"> -->
        <v-layout wrap row>
          <v-flex  v-for="(fieldDetails, index) in searchFields" :key="fieldDetails.fieldName"  :class="fieldDetails.classNames" offset-sm0>
            <template v-if="fieldDetails.inputType == 'select'">
              <SelectField @selectChanged="updateSearch" :fieldDetails="fieldDetails" :currentFieldValue="routeParams[fieldDetails.queryStringName]" :fieldOptions="searchFieldOptions"></SelectField>
            </template>
            <template v-else-if="fieldDetails.inputType == 'slider'">
              <SearchSlider @selectChanged="updateSearch"  :fieldDetails="fieldDetails" :routeParams="routeParams" :fieldOptions="searchFieldOptions"></SearchSlider>
            </template>
            <!--               <template v-else>
                <v-text-field name="title" :label="'Title '" v-model="fieldDetails.fieldValue"></v-text-field>
              </template>
 -->
          </v-flex>
        </v-layout>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script>
import SelectField from '@/components/form-fields/SelectField'
import SearchSlider from '@/components/form-fields/SearchSlider'
// import { required, minLength } from 'vuelidate/lib/validators'
import _ from 'lodash'
// import vueSlider from 'vue-slider-component'

export default {
  components: {
    SearchSlider,
    // vueSlider,
    SelectField
  },
  props: ["searchFields", "routeParams"],
  methods: {
    updateSearch(fieldDetails) {
      this.$emit('updateSearch', fieldDetails)
    }
  },
  computed: {
    searchFieldOptions() {
      return this.$store.state.searchFieldOptions
    },
  },
  data() {
    return {
    }
  },
}

</script>
