<template lang="pug">
.p-index-top__slider#top
  h2.p-index-top__slider-title おすすめ記事
  .p-index-top__slider-content
    client-only
      swiper(:options="swiperOption")
        swiper-slide.swiper-content(v-for="article in articles", :key="article.id")
          a.p-index-top__slider__visual(:href="article.href")
            .top__slider__visual-img
              img(:src="article.img.url")
            p.top__slider__visual-tag 世界一周
            .p-index-top__slider__textarea
              p.top__slider__type {{ article.type }}
              h3.top__slider__title {{ article.title }}
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
</template>
<script>
import axios from "axios"
export default{
  props: ['articles'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        centeredSlides: true,
        paginationClickable: true,
        touchRatio: 1.5,
        speed: 600,
        loop: true,
        loopedSlides: 3,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false
        },
        pagination: {
          el: '.swiper-pagination',
      		type: 'bullets',
      		clickable: true
        },
        navigation: {
      		nextEl: '.swiper-button-next',
      		prevEl: '.swiper-button-prev'
      	}
      }
    }
  }
}
</script>
<style lang="sass">
.p-index-top__slider
  margin-right: 120px
  +pc-lg-view
    margin: 0
  +pc-md-view
    margin: 104px 0 0
    width: 100%
  +sp-view
    margin-top: 56px

.p-index-top__slider-title
  font-size: 24px
  +sp-view
    font-size: 20px

.p-index-top__slider-content
  position: relative
  width: 332px
  margin: 32px auto 0
  +sp-view
    width: 100%
    margin: 16px 0 0

.p-index-top__slider__visual
  position: relative
  &:hover
    .top__slider__visual-img
      img
        transform: scale(1.1)
        opacity: .7
        +sp-view
          transform: scale(1)
          opacity: 1
    .top__slider__visual-tag
      opacity: 1
      transition: 1s cubic-bezier(0.16, 1, 0.3, 1)

.top__slider__visual-img
  position: relative
  overflow: hidden
  width: 332px
  height: 272px
  background-color: #222222
  img
    min-width: 332px
    height: 272px
    transition: 1s cubic-bezier(0.16, 1, 0.3, 1)
    +sp-view
      width: 100%

.top__slider__visual-tag
  position: absolute
  top: 16px
  left: 20px
  width: 78px
  font-size: 15px
  color: #ffffff
  padding: 0px 8px
  border: 1px solid #ffffff
  border-radius: 30px
  opacity: 0
  +sp-view
    opacity: 1

.p-index-top__slider__textarea
  height: 152px
  padding: 20px
  background-color: #ffffff

.top__slider__type
  opacity: .7
  font-size: 15px
  +font-en
  letter-spacing: 2px

.top__slider__title
  font-size: 18px
  margin: 8px 0

/* スライド切り替え */
.swiper-pagination
  bottom: -32px
  left: 50%
  transform: translateX(-50%)
  z-index: 1
  span
    width: 10px
    height: 10px
    background-color: #222222
    margin-right: 24px
    &:focus
      outline: none
    &:last-child
      margin-right: 0

/* スワイパーボタン */
.swiper-button-prev
  position: absolute
  bottom: 0
  left: -64px
  width: 48px
  height: 48px
  background-image: none
  outline: inherit
  z-index: auto
  &::after
    content: ""
    position: absolute
    bottom: 19px
    left: 7px
    width: 34px
    height: 9px
    background-image: url("~assets/img/top/slider-btn-left.svg")
    background-size: auto
    background-repeat: no-repeat
    transition: .3s
  +sp-view
    display: none
  &:hover
    &::after
      transform: translateX(-4px)


.swiper-button-next
  position: absolute
  bottom: 0
  right: -64px
  width: 48px
  height: 48px
  background-image: none
  outline: inherit
  z-index: auto
  &::after
    content: ""
    position: absolute
    bottom: 19px
    left: 7px
    width: 34px
    height: 9px
    background-image: url("~assets/img/top/slider-btn-right.svg")
    background-size: auto
    background-repeat: no-repeat
    transition: .3s
  +sp-view
    display: none
  &:hover
    &::after
      transform: translateX(4px)

</style>
