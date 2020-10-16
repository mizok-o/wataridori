<template lang="pug">
.p-index-top__about
  h1.p-index-top__about-title 1人海外旅の魅力を伝えたい
    br
    |大学生が運営するメディア
    br
    |ワタリドリ
  a(href="/about").p-index-top__about__btn-link
    .p-index-top__about__btn-container
      button.p-index-top__about-btn

</template>
<style lang="sass">
.p-index-top__about
  width: 708px
  margin-top: -8px
  +pc-sm-view
    display: block
  +sp-view
    max-width: 320px
    width: auto
    margin: 0

.p-index-top__about-title
  font-size: 40px
  line-height: 175%
  +pc-lg-view
    font-size: 36px
  +pc-md-view
    font-size: 32px
  +sp-view
    font-size: 24px
  @media screen and (max-width: 358px)
    font-size: 21px

.p-index-top__about__btn-link
  position: relative
  overflow: hidden
  display: block
  width: 224px
  height: 56px
  margin-top: 28px
  +sp-view
    width: 184px
    height: 48px
    margin-top: 16px

.p-index-top__about__btn-container
  position: relative
  width: 200%
  height: 100%
  background-color: #222222
  &::before
    content: "私たちについて"
    position: absolute
    top: 50%
    left: 16px
    transform: translateY(-50%)
    font-size: 18px
    +font-bold
    color: #ffffff
    z-index: 1
  &::after
    content: ""
    position: absolute
    top: 50%
    left: 160px
    transform: translateY(-50%)
    display: block
    width: 34px
    height: 9px
    transition: .6s cubic-bezier(0.85, 0, 0.15, 1)
    background-image: url('~assets/img/arrow-right.svg')
    background-repeat: no-repeat
    background-size: cover
    z-index: 1
  &:hover
    &::after
      left: 168px
    .p-index-top__about-btn
      &::after
        transform: translateY(50%) rotate(0)
  +sp-view
    pointer-events: none
    &::before
      font-size: 14px
    &::after
      left: 128px

.p-index-top__about-btn
  &::after
    content: ""
    position: absolute
    top: -300%
    left: 0
    width: 100%
    height: 400%
    transform-origin: top left
    transform: rotate(30deg)
    background-image: url('~assets/img/back.svg')
    background-repeat: no-repeat
    background-size: cover
    transition: 1s cubic-bezier(0.85, 0, 0.15, 1)

</style>
