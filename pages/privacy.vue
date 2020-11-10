<template lang="pug">
.p-privacy-container
  pheader
  main.p-privacy-top
    topBackButton
    privacyText
    allArticles(:articles="articles")
  pfooter

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import topBackButton from '~/components/top/topBackButton.vue'
import allArticles from '~/components/allArticles.vue'
import privacyText from '~/components/footer/privacyText.vue'
import pfooter from '~/components/layouts/pfooter.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    topBackButton,
    allArticles,
    privacyText,
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
      {headers: { 'X-API-KEY': 'fcd9d6ee-fbc4-426c-b6be-54afc20ab93f' }}
    )
    return {
      articles: articles.data.contents
    }
  },
  mounted(){
    window.addEventListener("load", function() {
      document.body.classList.remove('dis-content')
    })
  }
}
</script>
<style lang="sass">
body
  opacity: 1
  transition: .8s

.dis-content
  opacity: 0

.p-privacy-top
  margin: 72px 14% 0
  +sp-view
    margin: 32px 20px 0

.p-privacy-top__content
  position: relative
  display: flex
  justify-content: space-between
  width: 100%
  +pc-md-view
    display: block

</style>
