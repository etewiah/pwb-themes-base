<template>
  <v-toolbar-items class="hidden-sm-and-down">
    <template v-for="item in visibleLinks">
      <v-btn :key="item.slug" :to="{path: item.target_path}" exact flat>{{item.link_title}}</v-btn>
    </template>
  </v-toolbar-items>
</template>
<script>
export default {
  props: ["navLinks"],
  computed: {
    visibleLinks() {
      let visibleLinks = []
      if (this.navLinks) {
        this.navLinks.forEach(function(link) {
          if (link.slug !== "top_nav_admin") {
            visibleLinks.push(link)
          }
        })
      }
      return visibleLinks
    }
  }
}

</script>
