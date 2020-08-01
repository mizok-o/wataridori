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
  margin: 96px 14vw 0
  +sp-view
    margin: 72px 0 0

.p-index-top__articles-title
  font-size: 32px

.p-index-top__articles-content
  display: grid
  grid-template-columns: 240px 240px 240px
  grid-template-rows: 224px 224px
  gap: 24px 16px

.p-index-top__articles-item
  +sp-view
    border-bottom: solid 1px #B8B8B8
    padding: 10px 0
    &:first-child
      margin: 6px 0 0

.top__articles-item-container
  +sp-view
    display: flex
    width: 100%
    height: 72px

.top__articles-item-img
  img
    width: 100%
  +sp-view
    position: relative
    overflow: hidden
    width: 96px
    height: 100%
    margin: 0 10px 0 0
    img
      width: auto
      height: auto
      max-height: 88px

.top__articles-item-textarea
  +sp-view
    display: flex
    height: 100%
    flex-direction: column
    justify-content: space-between

.top__articles-item-sub
  display: flex
  margin-top: 12px

.top__articles-date
  margin-right: 12px
  opacity: .3

.top__articles-name
  opacity: .7
</style>
