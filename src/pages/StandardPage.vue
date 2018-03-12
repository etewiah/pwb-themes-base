<template>
  <v-container grid-list-xl>
    <v-layout row wrap justify-center class="my-0">
      <ContentHtml :blockContents="currentPageParts.content_html"></ContentHtml>
      <OurAgency :blockContents="currentPageParts.our_agency"></OurAgency>
    </v-layout>
  </v-container>
</template>
<script>
import ContentHtml from '@/components/page-parts/ContentHtml'
import OurAgency from '@/components/page-parts/OurAgency'
// import PropertiesRow from '@/components/PropertiesRow'
export default {
  components: {
    // PropertiesRow,
    OurAgency,
    ContentHtml,
  },
  watch: {
    '$route' (to, from) {
      this.$store.dispatch('loadPage', to.params.pageName)
    }
  },
  mounted: function() {
    this.$store.dispatch('loadPage', this.$route.params["pageName"])
  },
  computed: {
    // currentPage() {
    //   return this.$store.state.currentPage
    // },
    currentPageParts() {
      return this.$store.state.currentPageParts
    }
  },
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

</style>
