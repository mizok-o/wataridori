<template lang="pug">
.p-index-top__articles-container
  h2.p-index-top__articles-title 記事一覧
  ul.p-index-top__articles-content
    li(v-for="article in articles")
      a.p-index-top__articles-item-link(href="/article001")
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
  margin: 120px 14% 0
  +sp-view
    margin: 96px 0 0

.p-index-top__articles-title
  font-size: 32px
  +sp-view
    font-size: 18px
    margin-bottom: 24px

.p-index-top__articles-content
  display: grid
  grid-template-columns: 256px 256px 256px
  grid-template-rows: 280px 280px
  gap: 24px 16px
  margin: 32px 0 0
  +pc-md-view
    grid-template-columns: 256px 256px
    grid-template-rows: 280px 280px
  +sp-view
    grid-template-columns: 48% 48%
    grid-template-rows: 48% 48%
    gap: 15px 15px
    margin: 0
    @media screen and (max-width: 320px)
      grid-template-columns: 132px 132px

.top__articles-item-container
  transition: .3s
  &:hover
    .top__articles-item-img
      img
        transform: scale(1.05)
  +sp-view
    width: 100%
    height: 100%

.p-index-top__articles-item-link
  +sp-view
    display: inline-block
    width: 100%
    height: 100%

.top__articles-item-img
  overflow: hidden
  img
    transition: .3s
    width: 100%
  +sp-view
    position: relative
    overflow: hidden
    width: 100%
    height: auto
    margin: 0 10px 0 0


.top__articles-item-textarea
  margin-top: 8px
  +sp-view
    display: flex
    height: 96px
    flex-direction: column
    justify-content: space-between
    margin-top: 6px

.top__articles-item-sub
  display: flex
  margin-top: 12px
  +sp-view
    display: block
    margin-top: 4px

.top__articles-date
  margin-right: 12px
  opacity: .5

.top__articles-name
  opacity: .7
  +sp-view
    display: block
    margin-top: 2px
    opacity: 1
  &:hover
    transition: .3s
    opacity: 1
</style>
