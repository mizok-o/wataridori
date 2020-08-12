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
  margin: 48px 0% 0
  font-size: 18px
  color: #111111
  +font-bold
  +sp-view
    width: 195px
    height: auto
    margin: 32px auto 0
    text-align: center

.p-article__share-content
  display: flex

.p-article__share-item
  width: 144px
  height: 48px
  margin-right: 16px
  +sp-view
    width: 48px
    height: 48px
    margin: 12px 24px 0 0
  &:last-child
    margin-right: 0

.p-article__share-link
  position: relative
  display: block
  width: 144px
  height: 48px
  border-radius: 3px
  transition: .4s
  &:hover
    color: #ffffff
  &::before
    content: ""
    position: absolute
    top: 50%
    transform: translateY(-50%)
    left: 20px
    width: 24px
    height: 24px
  &::after
    content: "シェア"
    position: absolute
    top: 12px
    right: 20px
  +sp-view
    border-radius: 24px
    &::before
      content: ""
      position: absolute
      left: 50%
      transform: translateX(-50%)
      width: 20px
      height: 20px
    &::after
      display: none

.share-insta
  background-image: url("~assets/img/share/border-insta.svg")
  background-size: cover
  .p-article__share-link
    &::before
      background-image: url("~assets/img/share/share-insta.svg")
      background-size: cover
    &:hover
      background: linear-gradient(45deg, #EF4563, #EF6E45)

.share-twitter
  .p-article__share-link
    border: 1px solid #55ACEE
    &:hover
      background-color: #55ACEE
    &::before
      height: 20px
      background-image: url("~assets/img/share/share-twi.svg")
      background-size: cover
    &::after
      content: "ツイート"
    +sp-view
      &::before
        height: 20px

.share-face
  .p-article__share-link
    border: 1px solid #49629D
    &:hover
      background-color: #49629D
    &::before
      background-image: url("~assets/img/share/share-face.svg")
      background-size: cover

</style>
