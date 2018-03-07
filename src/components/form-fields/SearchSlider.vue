<template>
  <div class="mt-5">
    <v-subheader class="mb-5 subheading text-xs-left">
      {{$t(fieldDetails.labelTextTKey) }}:
    </v-subheader>
    <vue-slider ref="slider" v-model="value" v-bind="fieldDetails.sliderOptions" @callback="fieldChangeHandler">
      <template v-if="fieldDetails.fieldName == 'price'" slot="tooltip" slot-scope="{ value }">
        <span class="vue-slider-tooltip" :style="">
          <PriceWithCurrency :value="value"></PriceWithCurrency>
        </span>
      </template>
    </vue-slider>
    <!--     <v-select :items="selectItems" v-model="localFieldValue" :label="$t(fieldDetails.labelTextTKey)" @change="fieldChangeHandler" item-text="name" single-line bottom></v-select>
 -->
  </div>
</template>
<script>
import vueSlider from 'vue-slider-component'
import PriceWithCurrency from '@/components/PriceWithCurrency'
export default {
  components: {
    vueSlider,
    PriceWithCurrency
  },
  props: ["fieldDetails", "routeParams", "cancelPendingChanges", "fieldOptions"],
  data() {
    return {
      localFieldValue: "",
      originalValue: "",
      value: [],
      // sliderOptions: {
      //   width: "100%",
      //   height: 8,
      //   dotSize: 16,
      //   min: 0,
      //   max: 1000000,
      //   interval: 1000,
      //   disabled: false,
      //   show: true,
      //   // below needed so value change only occurs once dragging stops:
      //   lazy: true
      // }
    }
  },
  computed: {

  },
  mounted: function() {
    // this.$refs.slider.setValue([23, 44])
    // this.value
    // debugger
  },
  watch: {
    // 'fieldDetails' (newValue, oldValue) {
    //   debugger
    // },
    routeParams: {
      handler(newRoutParams, oldVal) {
        let minQueryStringName = this.fieldDetails.fieldName + "_min"
        let maxQueryStringName = this.fieldDetails.fieldName + "_max"
        let minVal = newRoutParams[minQueryStringName] || this.fieldDetails.defaultValue[0]
        let maxVal = newRoutParams[maxQueryStringName] || this.fieldDetails.defaultValue[1]
        if (minVal && maxVal) {
          this.value = [minVal, maxVal]
          // this.$refs.slider.setValue([minVal, maxVal])
        }
        // debugger
        // this.$refs.slider.setValue([2, 33])
        // this.localFieldValue = newValue
        // this.originalValue = newValue
      },
      // deep: true,
      immediate: true,
    },
  },
  methods: {
    fieldChangeHandler(newValue) {
      // debugger
      // let newValue = event.currentTarget.value
      this.fieldDetails.newValue = newValue
      this.$emit('selectChanged', this.fieldDetails)
    }
  }
}

</script>
