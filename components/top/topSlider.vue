<template lang="pug">
.p-index-top__slider
  h2.p-index-top__slider-title おすすめ記事
  .p-index-top__slider-content
    client-only
      swiper(:options="swiperOption" ref="myswiper")
        swiper-slide.swiper-content(v-for="article in articles", :key="article.id")
          a.p-index-top__slider__visual(:href="article.id")
            .p-index-top__slider__visual-container(@mouseover="stopSwiper" ,@mouseleave="startSwiper")
              .top__slider__visual-img
                img(:src="article.img.url")
              .p-index-top__slider__textarea
                p.top__slider__type {{ article.type }}
                h3.top__slider__title {{ article.title }}
      .swiper-pagination
      .swiper-button-prev
      .swiper-button-next
</template>
<script>
import axios from "axios"
export default {
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
          delay: 2500,
          disableOnInteraction: false
        },
        disableOnInteraction: false,
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
  },
  methods: {
    stopSwiper: function (){
      this.$refs.myswiper.swiper.autoplay.stop()
    },
    startSwiper(){
      this.$refs.myswiper.swiper.autoplay.start()
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
    margin: 56px auto 0

.p-index-top__slider-title
  font-size: 24px
  +sp-view
    font-size: 20px

.p-index-top__slider-content
  position: relative
  width: 332px
  margin: 32px auto 0
  +sp-view
    margin-top: 16px

.p-index-top__slider__visual-container
  position: relative
  &:hover
    .top__slider__visual-img
      img
        transform: scale(1.1)
        +sp-view
          transform: scale(1)
    .p-index-top__slider__textarea
      color: #ffffff
      &::after
        transform: translateY(-100%) rotate(0)
  +sp-view
    pointer-events: none

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

.p-index-top__slider__textarea
  position: relative
  overflow: hidden
  height: 152px
  padding: 20px
  background-color: #ffffff
  width: 332px
  z-index: -1
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
    transition: .6s cubic-bezier(0.85, 0, 0.15, 1)
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
    transition: .6s cubic-bezier(0.85, 0, 0.15, 1)
  +sp-view
    display: none
  &:hover
    &::after
      transform: translateX(4px)

</style>
