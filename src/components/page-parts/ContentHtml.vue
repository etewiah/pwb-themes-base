<template>
  <section v-if="blockContents">
    <span v-html="blockContents.blocks.main_content.content"></span>
  </section>
</template>
<script>
export default {
  props: ["blockContents"],
}

</script>
