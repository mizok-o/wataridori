<template lang="pug">
.p-index-top__container
  h2.p-index-top__slider-title おすすめ記事
  .p-index-top__content
    client-only
      swiper(:options="swiperOption")
        swiper-slide.swiper-content(v-for="item in items", :key="item.id")
          .p-index-top__slider__visual
            .top__slider__visual-img
              img(:src="item.img.url")
            .p-index-top__slider__textarea.u-pc-view
              h3.top__slider__title {{ item.title }}
              p.top__slider__text {{ item.text }}
              a.top__slider__link(:href="item.href")
            a.p-index-top__slider__textarea--sp.u-sp-view(:href="item.href")
              .p-index-top__slider__textarea--sp__box
                h3.top__slider__title--sp {{ item.text }}
                .top__slider__sub
                  time {{ item.date }}
                  a(:href="item.insta" target="_blank" rel="noopener")
                    p {{ item.name }}
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
</template>
<script>
import axios from "axios"
export default{
  props: ['items'],
  data() {
    return {
      swiperOption: {
        slidesPerView: 1.75,
        centeredSlides: true,
        paginationClickable: true,
        touchRatio: 1.5,
        speed: 800,
        loop: true,
        loopedSlides: 3,
        autoplay: {delay: 3000},
        // offsetPxAfter: 20,
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
          1200: {
            slidesPerView: 1
          }
        }
      }
    }
  }
}
</script>
<style lang="sass">
.p-index-top__content
  position: relative

.p-index-top__slider-title
  text-align: center
  font-size: 32px
  +sp-view
    text-align: left
    font-size: 18px

.swiper-container
  margin-top: 32px
  overflow: visible

.swiper-content
  width: 100%
  margin: 0 auto

/* スライダーリンク */
.p-index-top__slider__visual
  position: relative
  width: 100%
  height: 100%
  +sp-view
    max-width: 343px
    width: 100%
    height: 424px
    margin: 0 auto
    border: 8px solid #111111
    border-radius: 4px

/* スライダー画像 */
.top__slider__visual-img
  max-width: 800px
  max-height: 480px
  overflow: hidden
  margin: 0 auto
  +sp-view
    height: 276px
  img
    width: 800px
    height: auto
    +sp-view
      height: 100%

.p-index-top__slider__textarea
  position: absolute
  bottom: 1vw
  left: 10vw
  width: 688px
  height: 176px
  color: #ffffff

.top__slider__title
  font-size: 28px

.top__slider__text
  margin: 4px 0 0
  font-size: 18px

.top__slider__title--sp
  color: #111111
  font-size: 15px
  +font-bold

.p-index-top__slider__textarea--sp
  display: block
  width: 100%
  height: 132px
  padding: 16px 16px
  background-color: #ffffff

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
  &:hover
    &::after
      color: #ffffff
      transition: color 0.4s cubic-bezier(0.83, 0, 0.17, 1)
    &::before
      transform: translate(0, 0)
      transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1)

.swiper-slide-prev, .swiper-slide-next
  pointer-events: none

/* スライド切り替え */
.swiper-pagination
  bottom: -32px
  left: 50%
  transform: translateX(-50%)
  span
    width: 10px
    height: 10px
    background-color: #111111
    margin-right: 16px
    &:focus
      outline: none
    &:last-child
      margin-right: 0

/* スワイパーボタン */
.swiper-button-prev
  position: absolute
  bottom: 0
  left: 20vw
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-right.svg")
  background-size: cover
  outline: inherit
  +pc-sm-view
    left: 2%
  +sp-view
    left: 0
    width: 40px
    height: 40px
.swiper-button-next
  position: absolute
  bottom: 0
  right: 20vw
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-left.svg")
  background-size: cover
  outline: inherit
  +pc-sm-view
    right: 2%
  +sp-view
    right: 0
    width: 40px
    height: 40px

</style>
