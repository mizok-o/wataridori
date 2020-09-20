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
  margin-top: 48px
  +sp-view
    font-size: 15px
    margin-top: 24px
</style>
