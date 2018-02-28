<template>
  <div>
    <ContentHtml :blockContents="currentPageParts.content_html" ></ContentHtml>
    <FormAndMap></FormAndMap>
  </div>
</template>
<script>
import ContentHtml from '@/components/page-parts/ContentHtml'
import FormAndMap from '@/components/page-parts/FormAndMap'
// import PropertiesRow from '@/components/PropertiesRow'
export default {
  components: {
    // PropertiesRow,
    FormAndMap,
    ContentHtml,
  },
  watch: {
    // '$route' (to, from) {
    //   this.$store.dispatch('loadPage', to.params.pageName)
    // }
  },
  mounted: function() {
    this.$store.dispatch('loadPage', 'contact-us')
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
