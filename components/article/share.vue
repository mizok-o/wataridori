<template lang="pug">
.p-article__sharearea
  p.p-article__share-title.u-sp-view シェア
  ul.p-article__share-content
    li.p-article__share-item.share-insta
      a.p-article__share-link(href="#")
    li.p-article__share-item.share-twitter
      a.p-article__share-link(href="#")
    li.p-article__share-item.share-face
      a.p-article__share-link(href="#")
</template>
<script>
</script>
<style lang="sass">
.p-article__sharearea
  margin: 48px 0 0
  font-size: 18px
  color: #111111
  +font-bold
  +sp-view
    width: 195px
    height: auto
    margin: 32px auto 0
    text-align: center

/* .p-article__share-title */

.p-article__share-content
  display: flex

.p-article__share-item
  width: 144px
  height: 48px
  margin-right: 16px
  color: #ffffff
  border-radius: 3px
  +sp-view
    width: 48px
    height: 48px
    margin: 12px 24px 0 0
    border-radius: 24px
  &:last-child
    margin-right: 0

.p-article__share-link
  position: relative
  display: block
  width: 100%
  height: 100%

.p-article__share-link
  &::before
    content: ""
    position: absolute
    top: 12px
    left: 24px
    width: 24px
    height: 24px
  &::after
    content: "シェア"
    position: absolute
    top: 12px
    right: 24px
  +sp-view
    &::before
      content: ""
      position: absolute
      top: 14px
      left: 50%
      transform: translateX(-50%)
      width: 20px
      height: 20px
    &::after
      display: none

.share-insta
  background: linear-gradient(45deg, #EF4563, #EF6E45)
  .p-article__share-link
    &::before
      background-image: url("~assets/img/share/share-insta.svg")
      background-size: cover

.share-twitter
  background-color: #55ACEE
  .p-article__share-link
    &::before
      width: 29px
      background-image: url("~assets/img/share/share-twi.svg")
      background-size: cover
    &::after
      content: "ツイート"
    +sp-view
      &::before
        width: 23px

.share-face
  background-color: #49629D
  .p-article__share-link
    &::before
      background-image: url("~assets/img/share/share-face.svg")
      background-size: cover

</style>
