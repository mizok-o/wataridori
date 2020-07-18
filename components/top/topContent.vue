<template lang="pug">
.p-index-top__content
  client-only
    swiper(:options="swiperOption")
      swiper-slide.swiper-content(v-for="item in items")
        .p-index-top__slider__visual
          img.top__slider__visual-img(:src="item.src")
          .p-index-top__slider__textarea
            h2.top__slider__title {{ item.title }}
            p.top__slider__text {{ item.text }}
            a.top__slider__link(:href="item.link")
    .swiper-filter-left
    .swiper-filter-right
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
          grabCursor: true,
          touchRatio: 1.5,
          speed: 800,
          loop: true,
          loopAdditionalSlides: 0,
          autoplay: {delay: 3000},
          nextButton: '.swiper-button-next',
          prevButton: '.swiper-button-prev',
          navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          751: {
            slidesPerView: 1.2,
            spaceBetween: 24
          }
        }
      },
      items: [
        {
          link: '/article',
          src: require('~/assets/img/top/slider_01.jpg'),
          title: "標高8000メートル登山一人旅",
          text: "ワタリドリは若者の一人旅のサポートに特化したwebメディアです。"
        },
        {
          link: '/article',
          src: require('~/assets/img/top/slider_02.jpg'),
          title: "標高8000メートル登山一人旅",
          text: "ワタリドリは若者の一人旅のサポートに特化したwebメディアです。"
        },
        {
          link: '/article',
          src: require('~/assets/img/top/slider_02.jpg'),
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
  margin: 0

/* .swiper-content
  min-width: 720px
  min-height: 320px */

/* スライダーリンク */
.p-index-top__slider__visual
  position: relative
  width: 80%
  height: 100%
  margin: 0 10%

/* スライダー画像 */
.top__slider__visual-img
  width: 100%
  height: 100%
  border-radius: 3px

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
      transition: color 0.4s cubic-bezier(0.83, 0, 0.17, 1)
    &::before
      transform: translate(0, 0)
      transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1)

.swiper-slide
  transition: .6s

.swiper-slide-next, .swiper-slide-prev
  opacity: .1
  pointer-events: none

/* スワイパーボタン */
.swiper-button-prev
  position: absolute
  bottom: 0
  left: 8.5vw
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-right.svg")
  background-size: cover
  outline: inherit
.swiper-button-next
  position: absolute
  bottom: 0
  right: 8.5vw
  width: 48px
  height: 48px
  background-image: url("~assets/img/top/slider-btn-left.svg")
  background-size: cover
  outline: inherit
</style>
