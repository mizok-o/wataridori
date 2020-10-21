<template lang="pug">
.p-index-top__articles#articles
  h2.p-index-top__articles-title 記事一覧
  .p-index-top__articles-content
    ul
      li.p-index-top__articles-item(v-for="article in articles")
        a.p-index-top__articles-item-link(:href="'/' + article.id")
          .top__articles-item-container
            .top__articles-item
              .top__articles-item-img(:style="{ backgroundImage: `url(${article.img.url})` }")
            .top__articles-item-textarea
              p.top__articles__type {{ article.type }}
              h3.top__articles__title {{ article.title }}
</template>
<script>
export default{
  props: ['articles']
}
</script>
<style lang="sass">
.p-index-top__articles
  margin-top: 112px
  +pc-md-view
    width: 576px
    margin: 132px 0 0
  +sp-view
    width: 100%
    margin: 96px 0 0

.p-index-top__articles-title
  font-size: 32px
  margin-top: -136px
  padding-top: 136px
  +sp-view
    font-size: 24px
    margin-top: -80px
    padding-top: 80px

.p-index-top__articles-content
  margin: 0 auto
  +sp-view
    margin: 16px 0
  ul
    display: grid
    grid-template-columns: 282px 282px 282px
    grid-template-rows: 306px
    gap: 24px 16px
    margin-top: 32px
    +pc-md-view
      grid-template-columns: 282px 282px
      grid-template-rows: 306px 306px
    +sp-view
      grid-template-columns: 48% 48%
      grid-template-rows: 200px 200px
      gap: 4%
      margin: 0
    @media screen and (max-width: 325px)
      grid-template-rows: 178px 178px

.p-index-top__articles-item
  position: relative
  &::before
    content: ""
    position: absolute
    bottom: 0
    right: 0
    display: block
    width: 88%
    height: 88%
    z-index: -1
    opacity: .1
    filter: blur(24px)
    background-color: #222222

.p-index-top__articles-item-link
  +sp-view
    display: inline-block
    width: 100%
    height: 100%

.top__articles-item-container
  &:hover
    .top__articles-item
      .top__articles-item-img
        transform: scale(1.08)
  +sp-view
    width: 100%
    height: 100%
    pointer-events: none

.top__articles-item
  overflow: hidden
  width: 282px
  height: 188px
  +sp-view
    width: 100%
    height: 104px
    @media screen and (max-width: 325px)
      height: 90px

.top__articles-item-img
  height: 0
  padding-top: 67.75%
  background-size: cover
  background-position: center center
  background-repeat: no-repeat
  transform: scale(1)
  transition: 1s cubic-bezier(0.16, 1, 0.3, 1)

.top__articles__type, .top__articles__title
  z-index: 10

.top__articles__type
  opacity: .5
  font-size: 15px
  +font-en
  letter-spacing: 2px
  +sp-view
    font-size: 11px

.top__articles__title
  font-size: 18px
  margin: 4px 0 0
  +sp-view
    font-size: 14px
  @media screen and (max-width: 374px)
    font-size: 13px
  @media screen and (max-width: 325px)
    font-size: 12px

.top__articles-item-textarea
  height: 120px
  padding: 20px
  background-color: #ffffff
  +sp-view
    height: 96px
    padding: 8px
    @media screen and (max-width: 325px)
      height: 88px

</style>
