<template lang="pug">
section.p-article__heading
  article(v-html="content.heading")
</template>
<script>
export default {
  props: ['content']
}
</script>
<style lang="sass">
.p-article__heading
  font-size: 18px
  margin-top: 32px
</style>
