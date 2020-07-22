<template lang="pug">
.p-index-top__articles-container
  h2.p-index-top__articles-title 記事一覧
  ul(v-for="article in articles").p-index-top__articles-content
    li.p-index-top__articles-item
      a(href="/article001")
        .top__articles-item-container
          .top__articles-item-img
            img(:src="article.img.url")
          .top__articles-item-textarea
            .top__articles-item-tag
              p {{ article.tag }}
            .top__articles-item-title
              h3 {{ article.title }}
            .top__articles-item-sub
            time {{ article.date }}
            a(:href="article.insta" target="_blank" rel="noopener")
              p {{ article.name }}
</template>
<script>
export default{
  data() {
    return{
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
    console.log(1);
    return {
      article: data.contents
    }
  }
}
</script>
<style lang="sass">
.p-index-top__articles-container
  margin: 72px 0 0 16px


</style>
