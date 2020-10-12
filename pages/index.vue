<template lang="pug">
.p-index-container
  pheader
  main.p-index-top
    topBackButton
    .p-index-top__content
      topContent
      topSlider(:articles="articles")
    allArticles(:articles="articles")
  pfooter

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import topBackButton from '~/components/top/topBackButton.vue'
import allArticles from '~/components/allArticles.vue'
import topSlider from '~/components/top/topSlider.vue'
import topContent from '~/components/top/topContent.vue'
import pfooter from '~/components/layouts/pfooter.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    topBackButton,
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
      {headers: { "X-API-KEY": 'fcd9d6ee-fbc4-426c-b6be-54afc20ab93f' }}
    )
    return {
      articles: articles.data.contents
    }
  },
  mounted(){
    window.addEventListener("load", function() {
      document.body.classList.add('show-content')
    })
  }
}
</script>
<style lang="sass">
body
  opacity: 0
  transition: .8s

.show-content
  opacity: 1

.p-index-top
  margin: 112px 14% 0
  +sp-view
    margin: 32px 20px 0

.p-index-top__content
  position: relative
  display: flex
  justify-content: space-between
  width: 100%
  +pc-md-view
    display: block

</style>
