<template lang="pug">
.p-article__content-container
  partsInfo(:content="content")
  partsHeading(:content="content")
  partsLead(:content="content")
  partsBody(:content="content")
</template>
<script>
import partsInfo from '~/components/article/parts/partsInfo.vue'
import partsBody from '~/components/article/parts/partsBody.vue'
import partsHeading from '~/components/article/parts/partsHeading.vue'
import partsLead from '~/components/article/parts/partsLead.vue'
import axios from "axios"
export default {
  props: ['content'],
  components: {
    partsInfo,
    partsBody,
    partsHeading,
    partsLead
  }
}
</script>
<style lang="sass">
.p-article__content-container
  margin-top: 48px
  +sp-view
    margin-top: 24px
</style>
