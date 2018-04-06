<template>
  <section v-if="blockContents">
    <v-container grid-list-xl>
      <v-layout row wrap justify-center class="my-5">
        <v-flex xs12 sm4>
          <v-card class="elevation-0 transparent">
            <v-card-title primary-title class="layout justify-center">
              <div class="headline">
                <span v-html="blockContents.blocks.title_a.content"></span>
              </div>
            </v-card-title>
            <v-card-text>
              <span v-html="blockContents.blocks.content_a.content"></span>
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs12 sm4 offset-sm1>
          <v-card class="elevation-0 transparent">
            <v-card-media :src="blockContents.blocks.our_agency_img.content" height="300px">
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
      </v-layout>
    </v-container>
  </section>
</template>
<script>
export default {
  props: ["blockContents"],
}

</script>
