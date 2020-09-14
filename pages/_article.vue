<template lang="pug">
.p-article-container#top
  pheader
  main.p-article__main
    topBackButton
    .p-article__main-content
      topPart(:content="content")
      mainContent(:content="content")
      allArticles(:articles="articles")
    share(:content="content")
  pfooter
</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import topBackButton from '~/components/top/topBackButton.vue'
import share from '~/components/article/share.vue'
import allArticles from '~/components/allArticles.vue'
import mainContent from '~/components/article/mainContent.vue'
import topPart from '~/components/article/topPart.vue'
import pfooter from '~/components/layouts/pfooter.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    topBackButton,
    share,
    allArticles,
    mainContent,
    topPart,
    pfooter
  },
  data(){
    return {
      content: '',
      article: ''
    }
  },
  async asyncData({ env, params }) {
    const entries = await axios.get(
      "https://wataridori.microcms.io/api/v1/top",
      { headers: { "X-API-KEY": "fcd9d6ee-fbc4-426c-b6be-54afc20ab93f" } }
    )
    const articleNext = await axios.get(
      "https://wataridori.microcms.io/api/v1/top?filters=id[not_equals]nijuqimrr",
      { headers: { "X-API-KEY": "fcd9d6ee-fbc4-426c-b6be-54afc20ab93f" } }
    )
    const content = entries.data.contents.find(article => article.id === params.article)
    const articles = entries.data.contents.filter(article => article !== content)
    return {
      content: content,
      articles: articles
    }
  }
}

</script>
<style lang="sass">
.p-article__main
  display: flex
  max-width: 800px
  margin: 112px 14%
  color: #111111
  +sp-view
    display: block
    width: auto
    margin: 32px 20px 0
  .p-index-top__articles
    +sp-view
      margin-top: 32px

.p-index-top__articles-container, .p-index-top__about-container
  margin: 80px 0 0

.p-index-top__about-button
  border: 1px solid #111111
  &::after
    color: #111111
</style>
