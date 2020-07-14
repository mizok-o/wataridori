<template lang="pug">
.p-index
  .p-index-container
    pheader
    .p-index-top
      .p-index-top__container
        topContent

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import topContent from '~/components/top/topContent.vue'
export default {
  components: {
    pheader,
    topContent
  },
  mounted(){
    this.log()
  },
  methods: {
    log(){
    }
  }
}

</script>
<style lang="sass">
.p-index-top
  width: 100%
  margin: 120px 0 0
</style>
