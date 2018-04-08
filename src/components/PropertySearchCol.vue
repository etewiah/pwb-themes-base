<template>
  <v-container>
    <v-card height="">
      <transition name="slide-fade">
        <v-card-text v-if="showTrans">
          <v-layout wrap row>
            <v-flex v-for="(fieldDetails, index) in searchFields" :key="fieldDetails.fieldName" :class="fieldDetails.classNames" offset-sm0>
              <template v-if="fieldDetails.inputType == 'select'">
                <SelectField @selectChanged="updateSearch" :fieldDetails="fieldDetails" :currentFieldValue="routeParams[fieldDetails.queryStringName]" :fieldOptions="searchFieldOptions"></SelectField>
              </template>
              <template v-else-if="fieldDetails.inputType == 'slider'">
                <SearchSlider @selectChanged="updateSearch" :fieldDetails="fieldDetails" :routeParams="routeParams" :fieldOptions="searchFieldOptions"></SearchSlider>
              </template>
            </v-flex>
          </v-layout>
        </v-card-text>
      </transition>
    </v-card>
  </v-container>
</template>
<script>
import SelectField from '@/components/form-fields/SelectField'
import SearchSlider from '@/components/form-fields/SearchSlider'
// import _ from 'lodash'
export default {
  components: {
    SearchSlider,
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
  data: () => ({
    show: false,
    showTrans: false
  }),
  mounted: function() {
    this.show = true
    var that = this
    setTimeout(function() {
      // debugger
      that.showTrans = true
    }, 2000)
  }
}

</script>
<style>
.tray-enter,
.tray-leave-to {
  opacity: 0
}

.tray-leave,
.tray-enter-to {
  opacity: 1
}

.tray-enter-active,
.tray-leave-active {
  transition: opacity 300ms
}



.slide-fade-enter-active {
  transition: all 3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: 3s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  opacity: 0;
}


</style>
