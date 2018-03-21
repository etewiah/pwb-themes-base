<template>
  <section v-if="blockContents" fluid>
    <v-layout column wrap class="my-5" align-center>
      <v-flex xs12 sm4 class="my-3">
        <div class="text-xs-center">
          <h2 class="headline"></h2>
          <span class="subheading">
              </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <v-container grid-list-xl>
          <v-layout row wrap align-center>
            <v-flex xs12 md4>
              <v-card class="elevation-5 transparent">
                <v-card-text class="text-xs-center pt-4">
                  <v-icon x-large class="accent--text">fa fa-home icon-service</v-icon>
                </v-card-text>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">{{blockContents.blocks.title_a.content}}</div>
                </v-card-title>
                <v-card-text>
                  <span v-html="blockContents.blocks.content_a.content"></span> </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-5 transparent">
                <v-card-text class="text-xs-center pt-4">
                  <v-icon x-large class="accent--text">fa fa-user icon-service</v-icon>
                </v-card-text>
<!--                 <v-card-text class="text-xs-center">
                  <v-btn fab dark large color="purple">
                    <v-icon small class="">fa fa-user</v-icon>
                  </v-btn>
                </v-card-text> -->
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">{{blockContents.blocks.title_b.content}}</div>
                </v-card-title>
                <v-card-text>
                  <span v-html="blockContents.blocks.content_b.content"></span> </v-card-text>
              </v-card>
            </v-flex>
            <v-flex xs12 md4>
              <v-card class="elevation-5 transparent">
                <div class="text-xs-center pt-4">
                  <v-icon x-large class="accent--text">fa fa-money-bill-alt icon-service</v-icon>
                </div>
                <v-card-title primary-title class="layout justify-center">
                  <div class="headline text-xs-center">{{blockContents.blocks.title_c.content}}</div>
                </v-card-title>
                <v-card-text>
                  <span v-html="blockContents.blocks.content_c.content"></span> </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-flex>
    </v-layout>
  </section>
</template>
<script>
export default {
  props: ["blockContents"],
}

</script>
