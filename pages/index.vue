<template lang="pug">
.p-index
  .p-index-container
    pheader
    .p-index-top
      .p-index-top__content
        topContent
        topSlider(:articles="articles")
      allArticles(:articles="articles")
    pfooter

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import allArticles from '~/components/allArticles.vue'
import topSlider from '~/components/top/topSlider.vue'
import topContent from '~/components/top/topContent.vue'
import pfooter from '~/components/layouts/pfooter.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    topSlider,
    topContent,
    allArticles,
    pfooter
  },
  data(){
    return {
      articles: []
    }
  },
  async asyncData() {
    const articles = await axios.get(
      "https://wataridori.microcms.io/api/v1/top",
      {
        headers: { "X-API-KEY": "fcd9d6ee-fbc4-426c-b6be-54afc20ab93f" }
      }
    )
    console.log(articles);
    return {
      articles: articles.data.contents
    }
  }
}
</script>
<style lang="sass">

.p-index-top
  margin: 112px 240px 0
  +pc-lg-view
    margin: 112px 200px 0
  +pc-md-view
    margin: 112px 168px 0
  +pc-sm-view
    margin: 112px 112px 0
  +sp-view
    margin: 56px 20px 0

.p-index-top__content
  position: relative
  display: flex
  justify-content: space-between
  width: 100%
  +pc-md-view
    display: block

</style>
