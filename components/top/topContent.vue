<template lang="pug">
.p-index-top__content
  client-only
    swiper(:options="swiperOption")
      swiper-slide.swiper-content(v-for="item in items")
        .p-index-top__slider__visual
          a.top__slider__visual-link(:href="item.link")
            .top__slider__visual-img
        .p-index-top__slider__textarea
          .top__slider__title
          .top__slider__text
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
          autoplay: {delay: 3000},
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
        link: '/'
      },
      {
        link: '/'
      },
      {
        link: '/'
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
