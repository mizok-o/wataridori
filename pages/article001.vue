<template lang="pug">
.p-article-container
  pheader
  main.p-article__main
    .p-article__main-container
      .article__Top
      .p-article__content
        .p-article__heading
        .p-article__text
      share

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import share from '~/components/article/share.vue'
export default {
  components: {
    pheader,
    share
  }
}

</script>
<style lang="sass">
.p-article-container
  width: 100%
  margin: 120px 0 0
</style>
