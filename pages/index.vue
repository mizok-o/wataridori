<template lang="pug">
.p-index
  .p-index-container
    pheader
    .p-index-top
      .p-index-top__content
        h2.p-index-top__slider-title おすすめ記事
        client-only
          swiper(:options="swiperOption")
            swiper-slide.swiper-content(v-for="item in items", :key="item.id")
              .p-index-top__slider__visual
                img.top__slider__visual-img(:src="item.img.url")
                .p-index-top__slider__textarea.u-pc-view
                  h3.top__slider__title {{ item.title }}
                  p.top__slider__text {{ item.text }}
                  a.top__slider__link(:href="item.href")
                a.p-index-top__slider__textarea--sp.u-sp-view(:href="item.href")
                  h3.top__slider__title--sp {{ item.text }}
                  .top__slider__sub
                    time {{ item.date }}
                    a(:href="item.insta" target="_blank" rel="noopener")
                      p {{ item.name }}
          .swiper-button-prev
          .swiper-button-next
        topArticles

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import axios from "axios"
export default {
  components: {
    pheader
  },
  data() {
      return {
        swiperOption: {
          slidesPerView: 1.5,
          centeredSlides: true,
          paginationClickable: true,
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
          1200: {
            slidesPerView: 1
          }
        }
      },
      items: []
    }
  },
  async asyncData() {
    const { data } = await axios.get(
      "https://wataridori.microcms.io/api/v1/top",
      {
        headers: { "X-API-KEY": "fcd9d6ee-fbc4-426c-b6be-54afc20ab93f" }
      }
    )
    return {
      items: data.contents
    }
  }
}

</script>
<style lang="sass">
.p-index-top
  width: 100%
  margin: 120px 0 0

.p-index-top__content
  position: relative
  margin: 0

.swiper-container
  overflow: visible

/* スライダーリンク
.p-index-top__slider__visual
  position: relative
  width: 80%
  height: 100%
  margin: 0 10%
  +pc-sm-view
    width: 90%
    margin: 0 5%
  +sp-view
    width: 100%
    margin: 0

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

.top__slider__title--sp
  color: #111111
  font-size: 15px
  +font-bold

.p-index-top__slider__textarea--sp
  position: absolute
  bottom: -56px
  left: 0
  width: 88%
  padding: 12px 16px
  height: auto
  background-color: #ffffff

.top__slider__sub
  display: flex
  margin-top: 6px
  opacity: .3
  time
    margin-right: 8px

.top__slider__link
  position: relative
  display: block
  overflow: hidden
  width: 168px
  height: 48px
  margin-top: 40px
  border-radius: 30px
  background-color: #ffffff
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

.swiper-slide
  transition: .8s

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
  +pc-sm-view
    left: 2%
  +sp-view
    left: 0
    width: 40px
    height: 40px
.swiper-button-next
  position: absolute
  bottom: 0
  right: 8.5vw
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
