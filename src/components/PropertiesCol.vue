<template>
  <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 v-for="property in propertiesToDisplay" :key="property.id">
        <v-card hover style="margin: 9px 0px;" :to="{name: 'propertyDetails',
         params: { locale: $store.state.currentLocale, 
         propertyId: property.id,
         saleOrRent: saleOrRent}
       }">
          <v-layout row wrap>
            <v-flex style="padding: 0px;" xs6>
              <v-card>
                <v-card-media :src="property.primary_image_url" height="200px">
                  <v-container fill-height fluid>
                    <v-layout fill-height>
                      <v-flex xs12 align-end flexbox>
                        <span class="headline white--text" v-text="" />
                      </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-media>
              </v-card>
            </v-flex>
            <v-flex style="padding: 0px;" xs6>
              <v-card height="200px">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">{{ property.title }}</div>
                    <span class="grey--text"></span>
                  </div>
                </v-card-title>
                <v-card-actions style="height: 100%;" >
                  <v-layout align-end>
                    <v-flex>
                      <v-btn class="mt-1" v-if="saleOrRent == 'buy'">
                        <PriceWithCurrency :value="property.price_sale_current_cents"></PriceWithCurrency>
                      </v-btn>
                      <v-btn class="mt-1" v-if="saleOrRent == 'rent'">
                        <PriceWithCurrency :value="property.price_rental_monthly_current_cents"></PriceWithCurrency>
                      </v-btn>
                      <v-btn class="mt-1" color="">
                        <v-icon small>fa fa-shower</v-icon>
                        <v-spacer></v-spacer>
                        {{property.count_bathrooms }}
                      </v-btn>
                      <v-btn class="mt-1" color="">
                        <v-icon small>fa fa-bed</v-icon>
                        <v-spacer></v-spacer>
                        {{property.count_bedrooms }}
                      </v-btn>
                      <v-btn class="mt-1"><i class="fa fa-arrows-alt"></i>
                        <v-spacer></v-spacer>
                        {{property.constructed_area }}m<sup>2</sup>
                      </v-btn>
                    </v-flex>
                  </v-layout>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import PriceWithCurrency from '@/components/PriceWithCurrency'
export default {
  components: {
    PriceWithCurrency
  },
  props: ["propertiesToDisplay", "saleOrRent"],
}

</script>
