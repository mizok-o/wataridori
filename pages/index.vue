<template lang="pug">
.p-index
  .p-index-container
    pheader
    .p-index-top
      topSlider(:items="items")
      topArticles(:articles="articles")
      topAbout
      pfooter

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import topArticles from '~/components/top/topArticles.vue'
import topSlider from '~/components/top/topSlider.vue'
import topAbout from '~/components/top/topAbout.vue'
import pfooter from '~/components/layouts/pfooter.vue'
import axios from "axios"
export default {
  components: {
    pheader,
    topSlider,
    topArticles,
    topAbout,
    pfooter
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
body
  background-image: url('~assets/img/top/background.png')
  background-repeat: no-repeat
  background-size: cover
  +sp-view
    background-image: url('~assets/img/top/background--sp.png')

.p-index
  overflow-x: hidden
  width: 100%
  height: 100%
.p-index-top
  width: 100%
  margin: 136px 0 0
  +sp-view
    width: auto
    margin: 96px 20px 0

</style>
