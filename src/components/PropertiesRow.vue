<template>
  <v-container v-scroll="onScroll" pb-5 grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 sm4 v-for="(property, index) in propertiesToDisplay" :key="property.id">
        <PropertiesRowItem :showTransition="showTransition" :property="property" :saleOrRent="saleOrRent" :index="index"></PropertiesRowItem>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PriceWithCurrency from '@/components/PriceWithCurrency'
import PropertiesRowItem from '@/components/sections/PropertiesRowItem'
export default {
  components: {
    PriceWithCurrency,
    PropertiesRowItem
  },
  props: ["propertiesToDisplay", "saleOrRent"],
  data: () => ({
    show: false,
    showTransition: false,
    scrollWatchReady: false,
    inView: false
  }),
  methods: {
    onScroll(e) {
      // console.log(window.innerHeight || document.documentElement.clientHeight)
      // console.log(e.target.scrollTop)
      let rect = this.$el.getBoundingClientRect()
      this.inView = (

        rect.bottom > 0 &&
        rect.right > 0 &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight) &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth)

        // rect.width > 0 &&
        // rect.height > 0 &&
        // rect.top >= 0 &&
        // rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      )

      if (this.inView && this.scrollWatchReady) {
        this.showTransition = true
        // debugger
        // el.classList.add(binding.value)
        // window.removeEventListener('scroll', f)
      }

      // this.offsetTop = e.target.scrollTop
    }
  },
  watch: {
    'propertiesToDisplay' (newVal, oldVal) {
      if (newVal) {
        this.scrollWatchReady = true
        // if (this.inView) {
        //   debugger
        // }
      }
    }
  },

  mounted: function() {
    // this.$nextTick(() => {
    //   debugger
    //   this.scrollWatchReady = true
    //   console.log(this.$el.clientHeight)
    // })
  }
}

</script>
