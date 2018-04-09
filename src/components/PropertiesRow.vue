<template>
  <v-container v-scroll="onScroll" pb-5 grid-list-md>
    <v-layout row wrap>
      <v-flex xs6 sm4 v-for="property in propertiesToDisplay" :key="property.id">
        <PropertiesRowItem :showTransition="showTransition" :property="property" :saleOrRent="saleOrRent"></PropertiesRowItem>
        <!-- 
        <v-card hover :to="{name: 'propertyDetails',
         params: { locale: $store.state.currentLocale, 
         propertyId: property.id,
         saleOrRent: saleOrRent}
       }">
          <v-card-media :src="property.primary_image_url" height="300px">
            <v-container fill-height fluid>
              <v-layout fill-height>
                <v-flex xs12 align-end flexbox>
                  <span class="headline white--text" v-text="" />
                </v-flex>
              </v-layout>
            </v-container>
          </v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ property.title }}</div>
              <span class="grey--text"></span>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn>
              <PriceWithCurrency :value="property.price_sale_current_cents"></PriceWithCurrency>
            </v-btn>
            <v-btn color="">
              <v-icon small>fa fa-shower</v-icon>
              <v-spacer></v-spacer>
              {{property.count_bathrooms }}
            </v-btn>
            <v-btn class="hidden-sm-and-down">
              <v-icon small>fa fa-bed</v-icon>
              <v-spacer></v-spacer>
              {{property.count_bedrooms }}
            </v-btn>
            <v-btn class="hidden-md-and-down"><i class="fa fa-arrows-alt"></i>
              <v-spacer></v-spacer>
              {{property.constructed_area }}m<sup>2</sup>
            </v-btn>
          </v-card-actions>
        </v-card> -->
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
      console.log(window.innerHeight || document.documentElement.clientHeight)
      console.log(e.target.scrollTop)
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
