<template lang="pug">
.p-index-top__container#top
  h2.p-index-top__slider-title おすすめ記事
  .p-index-top__content
    client-only
      swiper(:options="swiperOption")
        swiper-slide.swiper-content(v-for="article in articles", :key="article.id")
          a.p-index-top__slider__visual(:href="article.href")
            .top__slider__visual-img
              img(:src="article.img.url")
            .p-index-top__slider__textarea.u-pc-view
              h3.top__slider__title {{ article.title }}
              p.top__slider__text {{ article.text }}
              a.top__slider__link(:href="article.href")
            .p-index-top__slider__textarea--sp.u-sp-view
              .p-index-top__slider__textarea--sp__box
                h3.top__slider__title--sp {{ article.text }}
                .top__slider__sub
                  time {{ article.date }}
                  a(:href="article.insta" target="_blank" rel="noopener")
                    p {{ article.name }}
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
        slidesPerView: 1.5,
        centeredSlides: true,
        paginationClickable: true,
        touchRatio: 1.5,
        speed: 600,
        loop: true,
        loopedSlides: 3,
        // autoplay: {
        //   delay: 3000,
        //   disableOnInteraction: false
        // },
        pagination: {
          el: '.swiper-pagination',
      		type: 'bullets',
      		clickable: true
        },
        navigation: {
      		nextEl: '.swiper-button-next',
      		prevEl: '.swiper-button-prev'
      	},
        breakpoints: {
          1280: {
            slidesPerView: 1,
            spaceBetween: 20
          }
        }
      }
    }
  }
}
</script>
<style lang="sass">
.p-index-top__container
  margin-top: 96px

.p-index-top__slider-title
  font-size: 32px
  margin: -80px 0 0 14%
  padding-top: 80px
  +sp-view
    width: 100%
    font-size: 18px
    margin-left: 0

.p-index-top__content
  position: relative
  z-index: 2

.swiper-container
  margin-top: 32px
  overflow: visible
  +sp-view
    margin-top: 16px

.swiper-content
  +sp-view
    width: 100%

/* スライダーリンク */
.p-index-top__slider__visual
  position: relative
  display: block
  max-width: 800px
  max-height: 480px
  overflow: hidden
  margin: 0 auto
  +sp-view
    max-width: 327px
    max-height: 276px
    width: 100%
    height: auto
    border: 8px solid #ffffff
    border-radius: 4px
  &:hover
    .p-index-top__slider__textarea
      .top__slider__link
        &::after
          color: #ffffff
          transition: color 0.4s cubic-bezier(0.83, 0, 0.17, 1)
        &::before
          transform: translate(0, 0)
          transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1)

/* スライダー画像 */
.top__slider__visual-img
  width: 100%
  height: 100%
  img
    width: 800px
    height: auto
    +sp-view
      width: 100%

.p-index-top__slider__textarea
  position: absolute
  bottom: 1vw
  left: 50%
  transform: translateX(-50%)
  width: 688px
  height: 176px
  color: #ffffff

.top__slider__title
  font-size: 28px

.top__slider__text
  margin: 4px 0 0
  font-size: 18px

.top__slider__title--sp
  font-size: 15px
  +font-bold

.p-index-top__slider__textarea--sp
  display: block
  width: 100%
  height: 132px
  padding: 16px 16px

.p-index-top__slider__textarea--sp__box
  display: flex
  width: 100%
  height: 100%
  flex-direction: column
  justify-content: space-between


.top__slider__sub
  display: flex
  margin-top: 6px
  time
    margin-right: 8px
    opacity: .3

.top__slider__link
  position: relative
  display: block
  overflow: hidden
  width: 168px
  height: 48px
  margin-top: 24px
  border-radius: 30px
  background-color: #ffffff
  color: #111111
  +font-bold
  font-size: 16px
  +sp-view
    display: none
  &::after
    content: "記事を読む"
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
  &::before
    content: ""
    position: absolute
    top: 0
    left: 0
    width: 100%
    height: 100%
    transform: translate(-100%, 120%)
    border-radius: 30px
    background-color: #F88023

.swiper-slide-prev, .swiper-slide-next
  position: relative
  pointer-events: none
  .p-index-top__slider__visual
    transition: .4s
    &::before
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      background-color: rgba(256, 256, 256, .7)

/* スライド切り替え */
.swiper-pagination
  bottom: -32px
  left: 50%
  transform: translateX(-50%)
  span
    width: 10px
    height: 10px
    background-color: #ffffff
    margin-right: 16px
    &:focus
      outline: none
    &:last-child
      margin-right: 0

/* スワイパーボタン */
.swiper-button-prev
  position: absolute
  bottom: 0
  left: 14vw
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-right.svg")
  background-size: cover
  outline: inherit
  +pc-md-view
    left: 0
  +sp-view
    display: none
.swiper-button-next
  position: absolute
  bottom: 0
  right: 14vw
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-left.svg")
  background-size: cover
  outline: inherit
  +pc-md-view
    right: 0
  +sp-view
    display: none

</style>
