<template>
  <section v-if="blockContents" fluid>
    <v-container>
      <v-layout column wrap class="my-1" align-center>
        <v-flex xs12>
          <span v-html="blockContents.blocks.main_content.content"></span>
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
