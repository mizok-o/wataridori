<template lang="pug">
section.p-article__body
  partsHeading
  partsLead
</template>
<script>
import partsHeading from '~/components/article/parts/partsHeading.vue'
import partsLead from '~/components/article/parts/partsLead.vue'

export default{
  props: ['articles'],
  components: {
    partsHeading,
    partsLead
  }
}
</script>
<style lang="sass">

</style>
