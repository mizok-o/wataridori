<template lang="pug">
.p-index-top__articles-container
  h2.p-index-top__articles-title 記事一覧
  ul.p-index-top__articles-content
    li(v-for="article in articles").p-index-top__articles-item
      a(href="/article001")
        .top__articles-item-container
          .top__articles-item-img
            img(:src="article.img.url")
          .top__articles-item-textarea
            .top__articles-item-tag
              span # {{ article.tag }}
            .top__articles-item-title
              h3 {{ article.title }}
            .top__articles-item-sub
              time.top__articles-date {{ article.date }}
              a.top__articles-name(:href="article.insta" target="_blank" rel="noopener")
                p {{ article.name }}
</template>
<script>
export default{
  props: ['articles']
}
</script>
<style lang="sass">
.p-index-top__articles-container
  margin: 72px 16px 0

.p-index-top__articles-item
  border-bottom: solid 1px #B8B8B8
  padding: 10px 0
  &:first-child
    margin: 6px 0 0

.top__articles-item-container
  display: flex

.top__articles-item-img
  position: relative
  overflow: hidden
  width: 88px
  height: 88px
  margin: 0 10px 0 0
  img
    width: auto
    height: auto
    max-height: 88px

.top__articles-item-textarea
  margin: 2px 0 0

.top__articles-item-tag

.top__articles-item-title
  margin: 6px 0 0

.top__articles-item-sub
  display: flex
  margin: 18px 0 0

.top__articles-date
  margin: 0 12px 0 0
  opacity: .3

.top__articles-name
  opacity: .7
</style>
