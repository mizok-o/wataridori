<template lang="pug">
.p-index-top__about
  h1.p-index-top__about-title 1人海外旅の魅力を伝えたい
    br
    |大学生が運営するメディア
    br
    |ワタリドリ
  a(href="/").p-index-top__about__btn-container
    button.p-index-top__about-btn

</template>
<style lang="sass">
.p-index-top__about
  width: 708px
  margin-top: -8px

.p-index-top__about-title
  font-size: 40px
  line-height: 175%
  margin-top: -80px
  padding-top: 80px

.p-index-top__about__btn-container
  position: relative
  overflow: hidden
  display: block
  width: 224px
  height: 56px
  margin-top: 32px
  &::after
    content: ""
    position: absolute
    top: 100%
    left: 0
    display: block
    width: 150%
    height: 200%
    transform-origin: top left
    transform: rotate(30deg)
    transition: 2s cubic-bezier(0.16, 1, 0.3, 1)
    background-color: #222222
  &:hover
    &::after
      transform: translateY(-100%) rotate(0)
    .p-index-top__about-btn
      &::after
        transform: translateX(12px)

.p-index-top__about-btn
  display: flex
  width: 100%
  height: 100%
  align-items: center
  background-image: url('~assets/img/top/button.svg')
  background-repeat: no-repeat
  background-size: cover
  z-index: -1
  &::before
    content: "私たちについて"
    margin: 0 12px 0 24px
    font-size: 18px
    +font-bold
    color: #ffffff
    z-index: 1
  &::after
    content: ""
    display: block
    width: 34px
    height: 9px
    transition: .6s cubic-bezier(0.85, 0, 0.15, 1)
    background-image: url('~assets/img/top/arrow-right.svg')
    background-repeat: no-repeat
    background-size: cover
    z-index: 1

</style>
