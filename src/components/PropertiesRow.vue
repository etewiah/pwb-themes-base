<template>
    <v-container fluid grid-list-md>
      <v-layout row wrap>
        <v-flex v-bind="{ [`xs${property.flex}`]: true }" v-for="property in propertiesToDisplay" :key="property.id">
          <v-card :to="{name: 'propertyDetails',
         params: { locale: 'en', 
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
                <span class="grey--text">...</span>
              </div>
            </v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
                <li class="hidden-xs"><i class="fa fa-bed"></i> <small>
                      1
                    </small></li>
                <li class="hidden-xs"><i class="fa fa-shower"></i> <small>
                      1.0
                    </small></li>
                <li class="hidden-xs"><i class="fa fa-arrows-alt"></i> <small>
                      90.0m<sup>2</sup></small></li>
                <li class="hidden-xs"></li>

              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>bookmark</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
</template>
<script>
export default {
  props: ["propertiesToDisplay", "saleOrRent"],
}

</script>
