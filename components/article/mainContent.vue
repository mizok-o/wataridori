<template lang="pug">
.p-article__content-container
  partsIntro
  partsHeading
  partsLead
  partsArticle

</template>
<script>
import partsIntro from '~/components/article/parts/partsIntro.vue'
import partsHeading from '~/components/article/parts/partsHeading.vue'
import partsLead from '~/components/article/parts/partsLead.vue'
import partsArticle from '~/components/article/parts/partsArticle.vue'
export default {
  components: {
    partsIntro,
    partsHeading,
    partsLead,
    partsArticle
  }
}
</script>
<style lang="sass">

</style>
