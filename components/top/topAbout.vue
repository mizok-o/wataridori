<template lang="pug">
.p-index-top__about-container#about
  h2.p-index-top__about-title 一人旅支援メディア「ワタリドリ」
  .p-index-top__about-textarea
    p.p-index-top__about-text(:class="{'about-text-show': isAbout}") ワタリドリは若者の海外一人旅のためのメディアです。
      br
      br
      |私たち自身も一人旅に行き様々なことを経験しました。
      br
      |そんな私たちだからこそ一人旅の魅力や初心者の知っておくべき情報がわかります。
      |一人旅に特化したメディアとなることでより詳しく・正確にピンポイントの情報を伝えることができます。
      br
      br
      |そこで、私たちは初心者の知りたい情報を旅人経験者の目線から発信する
      br
      |一人旅特化型メディアワタリドリを立ち上げることにしました。
      br
      br
      |ワタリドリでは、皆さんの意見や記事を読んでみた感想などを目安箱で募集しています。
      |頂いた質問にはスタッフ一同真摯に回答させていただきます。
    .p-index-top__about__button-area
      button.p-index-top__about-button(@click="textShow")
</template>
<script>
export default{
  data() {
    return {
      isAbout: false
    }
  },
  methods: {
    textShow(){
      this.isAbout = true
    }
  }
}
</script>
<style lang="sass">
.p-index-top__about-container
  margin: 80px 14% 0
  +sp-view
    margin: 40px 0 0

.p-index-top__about-title
  font-size: 32px
  padding-top: 80px
  margin-top: -80px
  +sp-view
    font-size: 18px

.p-index-top__about-textarea
  margin: 24px 0 0
  +sp-view
    margin: 16px 0 0

.p-index-top__about-text
  position: relative
  overflow: hidden
  line-height: 1.75
  font-size: 18px
  +sp-view
    height: 23px
    width: 100%
    font-size: 15px
    &::before
      content: "..."
      position: absolute
      display: inline-block
      bottom: 0
      left: 332px
      height: 23px
      width: 1em
      font-size: 15px
    @media screen and (max-width: 445px)
      height: 1.5em
      &::before
        left: inherit
        right: 0px

.about-text-show
  overflow: inherit
  height: auto
  &::before
    opacity: 0
    transition: .4s

.about-text-show + .p-index-top__about__button-area
  display: none

.p-index-top__about__button-area
  text-align: center

.p-index-top__about-button
  +sp-view
    position: relative
    overflow: hidden
    width: 120px
    height: 40px
    margin: 32px 0 0
    border: 1px solid #ffffff
    border-radius: 50px
    &::after
      content: "もっと読む"
      position: absolute
      top: 48%
      left: 50%
      width: 100%
      color: #ffffff
      font-size: 14px
      transform: translate(-50%, -48%)
    &::before
      content: ""
      position: absolute
      top: 0
      left: 0
      width: 100%
      height: 100%
      transform: translate(-100%, 120%)
      border-radius: 50px
      background-color: #111111
    &:hover
      &::after
        color: #ffffff
        transition: color 0.4s cubic-bezier(0.83, 0, 0.17, 1)
      &::before
        transform: translate(0, 0)
        transition: transform 0.4s cubic-bezier(0.83, 0, 0.17, 1)

@keyframes buttonText
  0%
    display: block
    opacity: 1
  100%
    display: none
    opacity: 0
</style>
