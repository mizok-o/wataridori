<template lang="pug">
.p-article-container
  pheader
  main.p-article__main
    topPart
    mainContent
    share
    allArticles(:body="body")
    About
  pfooter

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import share from '~/components/article/share.vue'
import allArticles from '~/components/allArticles.vue'
import mainContent from '~/components/article/mainContent.vue'
import topPart from '~/components/article/topPart.vue'
import About from '~/components/About.vue'
import pfooter from '~/components/layouts/pfooter.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    share,
    allArticles,
    mainContent,
    topPart,
    About,
    pfooter
  },
  data(){
    return {
      body: []
    }
  },
  async asyncData() {
    const myHttpClient = axios.create({
      baseURL: 'https://wataridori.microcms.io/api/v1/',
      headers: {
        'X-API-KEY': 'fcd9d6ee-fbc4-426c-b6be-54afc20ab93f'
      }
    })
    const body = await Promise.all([
      myHttpClient.get('top'),
      myHttpClient.get('article')
    ])
    return body
  }
}

</script>
<style lang="sass">
.p-article-container
  max-width: 800px
  margin: 120px 14%
  color: #111111
  +sp-view
    width: auto
    margin: 112px 20px 0

.p-index-top__articles-container, .p-index-top__about-container
  margin: 80px 0 0

.p-index-top__about-button
  border: 1px solid #111111
  &::after
    color: #111111


</style>
