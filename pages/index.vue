<template lang="pug">
.p-index
  .p-index-container
    pheader
    .p-index-top
      topContent(:items="items")
      topArticles(:articles="articles")

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import topArticles from '~/components/top/topArticles.vue'
import topContent from '~/components/top/topContent.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    topContent,
    topArticles
  },
  data(){
    return {
      items: [],
      articles: []
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://wataridori.microcms.io/api/v1/top",
      {
        headers: { "X-API-KEY": "fcd9d6ee-fbc4-426c-b6be-54afc20ab93f" }
      }
    )
    return {
      items: data.contents,
      articles: data.contents
    }
  }
}
</script>
<style lang="sass">
.p-index-top
  width: 100%
  margin: 120px 0 0

</style>
