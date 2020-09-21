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
    font-size: 16px
    margin-top: 32px
</style>
