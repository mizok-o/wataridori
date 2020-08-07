<template lang="pug">
.p-article__content-container
  partsIntro
  partsHeading
  partsLead
  .p-article__content

</template>
<script>
import partsIntro from '~/components/article/parts/partsIntro.vue'
import partsHeading from '~/components/article/parts/partsHeading.vue'
import partsLead from '~/components/article/parts/partsLead.vue'
export default {
  components: {
    partsIntro,
    partsHeading,
    partsLead
  }
}
</script>
<style lang="sass">

</style>
