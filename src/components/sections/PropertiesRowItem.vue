<template>
  <transition name="slide-fade">
    <v-card v-if="showTransition" hover :to="{name: 'propertyDetails',
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
    </v-card>
  </transition>
</template>
<script>
import PriceWithCurrency from '@/components/PriceWithCurrency'
export default {
  components: {
    PriceWithCurrency,
  },
  props: ["property", "saleOrRent", "showTransition"],
  data: () => ({
    // showTrans: false
  }),
  mounted: function() {
    // var that = this
    // setTimeout(function() {
    //   // debugger
    //   that.showTrans = true
    // }, 3000)
  }
}

</script>
