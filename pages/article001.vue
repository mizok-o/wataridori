<template lang="pug">
.p-article-container
  pheader
  main.p-article__main
    .p-article__main-container
      .article__top
      .p-article__content
        .p-article__heading
        .p-article__text
      share
      otherArticles(:articles="articles")
      About
  pfooter

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import share from '~/components/article/share.vue'
import otherArticles from '~/components/article/otherArticles.vue'
import About from '~/components/About.vue'
import pfooter from '~/components/layouts/pfooter.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    share,
    otherArticles,
    About,
    pfooter
  },
  data(){
    return {
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
      articles: data.contents
    }
  }
}

</script>
<style lang="sass">
.p-article-container
  width: 100%
  margin: 120px 0 0
  color: #111111
  +sp-view
    width: auto
    margin: 112px 20px 0

.p-index-top__about-button
  border: 1px solid #111111
  &::after
    color: #111111


</style>
