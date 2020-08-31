<template lang="pug">
.p-article__content-container
  partsInfo
  partsBody(:articles="articles")

</template>
<script>
import partsInfo from '~/components/article/parts/partsInfo.vue'
import partsBody from '~/components/article/parts/partsBody.vue'
import axios from "axios"
export default {
  props: ['articles'],
  components: {
    partsInfo,
    partsBody
  }
}
</script>
<style lang="sass">
.p-article__content-container
  margin-top: 32px
</style>
