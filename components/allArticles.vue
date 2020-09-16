<template lang="pug">
.p-index-top__articles#articles
  h2.p-index-top__articles-title 記事一覧
  .p-index-top__articles-content
    ul
      li(v-for="article in articles")
        a.p-index-top__articles-item-link(:href="article.id")
          .top__articles-item-container
            .top__articles-item-img
              img(:src="article.img.url")
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
  +pc-md-view
    font-size: 24px
  +sp-view
    font-size: 20px
    margin-bottom: 16px

.p-index-top__articles-content
  margin: 0 auto
  ul
    display: grid
    grid-template-columns: 256px 256px 256px
    grid-template-rows: 306px
    gap: 20px 16px
    margin-top: 32px
    +pc-md-view
      grid-template-columns: 256px 256px
      grid-template-rows: 306px 306px
    +sp-view
      grid-template-columns: 47.4% 47.4%
      grid-template-rows: 48% 48%
      gap: 15px
      margin: 0

.top__articles-item-container
  &:hover
    .top__articles-item-img
      img
        transform: scale(1.1)
    .top__articles-item-textarea
      color: #ffffff
      &::after
        transform: translateY(-100%) rotate(0)
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
  width: 256px
  height: 188px
  img
    transform: scale(1)
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1)
    width: 100%
  +sp-view
    width: 100%
    height: auto
    max-height: 194px

.top__articles__type, .top__articles__title
  z-index: 10

.top__articles__type
  opacity: .5
  font-size: 15px
  +font-en
  letter-spacing: 2px
  +sp-view
    font-size: 12px

.top__articles__title
  font-size: 18px
  margin: 4px 0 0
  +sp-view
    font-size: 14px

.top__articles-item-textarea
  position: relative
  overflow: hidden
  height: 120px
  padding: 20px
  background-color: #ffffff
  z-index: -1
  transition: 1s cubic-bezier(0.16, 1, 0.3, 1)
  +sp-view
    height: 88px
    padding: 12px
    margin-top: -6px
  &::after
    content: ""
    position: absolute
    top: 100%
    left: 0
    display: block
    width: 120%
    height: 200%
    transform-origin: top left
    transform: rotate(30deg)
    transition: 2s cubic-bezier(0.16, 1, 0.3, 1)
    background-color: #222222
    z-index: -1

@keyframes automove
  0%
    transform: translate(0)
  100%
    transform: translate(-50%)

</style>
