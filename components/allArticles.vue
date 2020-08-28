<template lang="pug">
.p-index-top__articles#articles
  h2.p-index-top__articles-title 記事一覧
  .p-index-top__articles-img
    .p-index-top__articles-img-content
      img(src="~/assets/img/top/tabi.svg")
      img(src="~/assets/img/top/tabi.svg")
      img(src="~/assets/img/top/tabi.svg")
      img(src="~/assets/img/top/tabi.svg")
  ul.p-index-top__articles-content
    li(v-for="article in articles")
      a.p-index-top__articles-item-link(href="/article001")
        .top__articles-item-container
          .top__articles-item-img
            img(:src="article.img.url")
          .top__articles-item-textarea
            p.top__slider__type {{ article.type }}
            h3.top__slider__title {{ article.title }}
</template>
<script>
export default{
  props: ['articles']
}
</script>
<style lang="sass">
.p-index-top__articles
  position: relative
  margin: 144px 0 0
  +sp-view
    margin: 96px 0 0

.p-index-top__articles-title
  font-size: 32px
  margin-top: -80px
  padding-top: 80px
  +sp-view
    font-size: 18px
    margin-bottom: 16px

.p-index-top__articles-img
  position: absolute
  top: 320px
  left: -200px
  transform-origin: top left
  transform: rotate(10deg)
  z-index: -3

.p-index-top__articles-img-content
  display: flex
  width: 4096px
  height: 80px
  animation: automove 16s linear infinite
  img
    width: 992px
    height: 100%
    margin-right: 32px

.p-index-top__articles-content
  display: grid
  grid-template-columns: 280px 280px 280px
  grid-template-rows: 306px
  gap: 24px 16px
  margin: 32px 0 0
  +pc-md-view
    grid-template-columns: 280px 280px
    grid-template-rows: 306px 306px
  +sp-view
    grid-template-columns: 48% 48%
    grid-template-rows: 48% 48%
    gap: 15px 15px
    margin: 0
    @media screen and (max-width: 320px)
      grid-template-columns: 132px 132px

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
  width: 280px
  height: 188px
  img
    transform: scale(1)
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1)
    width: 100%
  +sp-view
    width: 100%
    height: auto
    max-height: 115px
    margin: 0 10px 0 0

.top__slider__type, .top__slider__title
  z-index: 10

.top__articles-item-textarea
  position: relative
  overflow: hidden
  height: 120px
  padding: 20px
  background-color: #ffffff
  z-index: -1
  transition: 1s cubic-bezier(0.16, 1, 0.3, 1)
  +sp-view
    height: 96px
    margin-top: 6px
  .top__slider__title
    font-size: 18px
    margin: 12px 0 0
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
    transform: translate(-50%)
  100%
    transform: translate(0)

</style>
