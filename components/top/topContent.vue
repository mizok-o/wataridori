<template lang="pug">
.p-index-top__content
  client-only
    swiper(:options="swiperOption")
      swiper-slide.swiper-content(v-for="item in items")
        .p-index-top__slider__visual
          .top__slider__visual-img
        .p-index-top__slider__textarea
          h2.top__slider__title {{ item.title }}
          p.top__slider__text {{ item.text }}
          a.top__slider__link(:href="item.link")
    .swiper-button-prev
    .swiper-button-next
</template>
<script>
export default{
data() {
      return {
        swiperOption: {
          slidesPerView: 1.5,
          centeredSlides: true,
          paginationClickable: true,
          loopAdditionalSlides: 2,
          speed: 1000,
          // autoplay: {delay: 3000},
          loop: true,
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }
        // breakpoints: {
        //   751: {
        //     slidesPerView: 1.2,
        //     spaceBetween: 24
        //   }
        // }
      },
      items: [
      {
        link: '/',
        src: require('~/assets/img/top/slider_01.jpg'),
        title: "標高8000メートル登山一人旅",
        text: "ワタリドリは若者の一人旅のサポートに特化したwebメディアです。"
      },
      {
        link: '/',
        src: require('~/assets/img/top/slider_02.jpg'),
        title: "標高8000メートル登山一人旅",
        text: "ワタリドリは若者の一人旅のサポートに特化したwebメディアです。"
      },
      {
        link: '/',
        src: require('~/assets/img/top/slider_03.jpg'),
        title: "標高8000メートル登山一人旅",
        text: "ワタリドリは若者の一人旅のサポートに特化したwebメディアです。"
      }
    ]
    }
  }
}
</script>
<style lang="sass">
.p-index-top__content
  position: relative
  width: auto
  height: 560px
  margin: 0 0 0

.top__slider__visual-link
  display: block
  width: 800px
  height: 560px
  margin: 0 auto 0

.top__slider__visual-img
  width: 100%
  height: 100%
  background-image: url("~assets/img/top/slider_01.jpg")
  background-size: auto
  background-position: center
  background-repeat: no-repeat

.p-index-top__slider__textarea
  position: absolute
  bottom: 40px
  left: 56px
  width: 688px
  height: 176px
  color: #ffffff

.top__slider__title
  font-size: 32px

.top__slider__text
  margin: 4px 0 0
  font-size: 18px

.top__slider__link
  position: relative
  display: block
  overflow: hidden
  width: 168px
  height: 48px
  margin-top: 40px
  border-radius: 30px
  background-color: #ffffff
  &::after
    content: "記事を読む"
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    font-size: 16px
    font-weight: bold
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
      transition: color 0.6s cubic-bezier(0.83, 0, 0.17, 1)
    &::before
      transform: translate(0, 0)
      transition: transform 0.6s cubic-bezier(0.83, 0, 0.17, 1)

.swiper-content
  transition: 1s

.swiper-slide-next, .swiper-slide-prev
  opacity: .1
  pointer-events: none

/* スワイパーボタン */
.swiper-button-prev
  position: absolute
  bottom: 0
  left: 15%
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-right.svg")
  background-size: cover
  outline: inherit
.swiper-button-next
  position: absolute
  bottom: 0
  right: 15%
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-left.svg")
  background-size: cover
  outline: inherit
</style>
