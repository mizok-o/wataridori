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
  margin: 120px 14vw 0
  /* text-align: center */
  +sp-view
    margin: 72px 0 0

.p-index-top__articles-title
  font-size: 32px

.p-index-top__articles-content
  display: grid
  grid-template-columns: 256px 256px 256px
  grid-template-rows: 280px 280px
  gap: 24px 16px
  margin: 32px 0 0

.p-index-top__articles-item
  +sp-view
    border-bottom: solid 1px #B8B8B8
    padding: 10px 0
    &:first-child
      margin: 6px 0 0

.top__articles-item-container
  transition: .3s
  &:hover
    .top__articles-item-img
      img
        transform: scale(1.05)
  +sp-view
    display: flex
    width: 100%
    height: 72px

.top__articles-item-img
  overflow: hidden
  img
    transition: .3s
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
  margin: 6px 0 0
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
  &:hover
    transition: .3s
    opacity: 1
</style>
