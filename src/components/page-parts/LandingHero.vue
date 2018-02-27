<template>
  <section v-if="blockContents">
    <v-parallax :src="blockContents.blocks.landing_img.content" height="600">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-1 text-xs-center">{{blockContents.blocks.landing_title_a.content }}</h1>
        <h2><span v-html="blockContents.blocks.landing_content_a.content"></span>
          </h2>
        <div class="subheading mb-3 text-xs-center">..</div>
      </v-layout>
    </v-parallax>
  </section>
</template>
<script>
export default {
  props: ["blockContents"],
}

</script>
