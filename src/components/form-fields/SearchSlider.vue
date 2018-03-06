<template>
  <div>
    <div class="text-xs-left">
      {{$t(fieldDetails.labelTextTKey) }}:
    </div>
    <vue-slider ref="slider" v-model="value" v-bind="fieldDetails.sliderOptions" @callback="fieldChangeHandler"></vue-slider>
    <!--     <v-select :items="selectItems" v-model="localFieldValue" :label="$t(fieldDetails.labelTextTKey)" @change="fieldChangeHandler" item-text="name" single-line bottom></v-select>
 -->
  </div>
</template>
<script>
import vueSlider from 'vue-slider-component'

export default {
  components: {
    vueSlider,
  },
  props: ["fieldDetails", "routeParams", "cancelPendingChanges", "fieldOptions"],
  data() {
    return {
      localFieldValue: "",
      originalValue: "",
      value: [0, 555],
      sliderOptions: {
        width: "100%",
        height: 8,
        dotSize: 16,
        min: 0,
        max: 1000000,
        interval: 1000,
        disabled: false,
        show: true,
        // below needed so value change only occurs once dragging stops:
        lazy: true
      }
    }
  },
  computed: {
    // value() {
    //   let selectRange = [2, 20]
    //   // let untranslated = this.fieldOptions[this.fieldDetails.optionsKey] || null
    //   // let selectItems = [{ name: "", value: "" }]
    //   // let i18n = this.$i18n
    //   // let fieldName = this.fieldDetails.fieldName
    //   // if (untranslated) {
    //   //   untranslated.forEach(function(optionKey) {
    //   //     let name = i18n.t(optionKey)
    //   //     if (fieldName === "currency") {
    //   //       optionKey = optionKey.toUpperCase()
    //   //     }
    //   //     selectItems.push({
    //   //       name: name,
    //   //       value: optionKey
    //   //     })
    //   //   })
    //   // }
    //   return selectRange
    // },
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
