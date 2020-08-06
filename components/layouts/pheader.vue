<template lang="pug">
header
  .header-container
    .header-content
      .header__left
        a(href="/")
          img.header__left__logo(src="~/assets/img/header/header-logo.svg")
        .header__main--sp.u-sp-view(:class="{'header__menu-active' : menuActive}")
          ul.header__main--sp-container
            li.header__main--sp-item
              a(href="#top" @click="closeMenu") トップ
            li.header__main--sp-item
              a(href="#articles" @click="closeMenu") 記事一覧
            li.header__main--sp-item
              a(href="#about" @click="closeMenu") 私たちについて
          .header__main--sp-sns
            p Follow us
            a.header__main--sp-sns__link(href="https://www.instagram.com/" @click="openMenu")
      .header__right--sp.u-sp-view(@click="openMenu")
        .header__right__menu-container(:class="{'header__menu-active' : menuActive}")
          .header__menu-item
      .header__right.u-pc-view
        ul
          li.header__right__list-item
            a.header__list-item__link(href="#top") トップ
          li.header__right__list-item
            a.header__list-item__link(href="#articles") 記事一覧
          li.header__right__list-item
            a.header__list-item__link(href="#about") ワタリドリについて
</template>
<script>
export default {
  data(){
    return{
      menuActive: false
    }
  },
  methods: {
    openMenu(){
      this.menuActive = !this.menuActive
    },
    closeMenu(){
      this.menuActive = !this.menuActive
    }
  }
}
</script>
<style lang="sass">
header
  position: relative
  z-index: 5

.header-container
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 56px
  color: #111111
  background-color: #ffffff
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.2)

.header-content
  display: flex
  justify-content: space-between
  align-items: center
  padding: 14px 56px
  +sp-view
    padding: 0 0 0 16px

.header__left__logo
  height: 24px
  +sp-view
    height: 20px

.header__main--sp
  position: absolute
  top: 56px
  left: 0
  width: 100vw
  height: 320px
  padding: 40px 20px 80px
  +font-bold
  pointer-events: none
  opacity: 0
  background-color: #ffffff
  transition: .4s
  z-index: -1

.header__main--sp-container
  font-size: 18px

.header__main--sp-item
  padding: 16px 0
  a
    display: inline-block
    width: 100%
    height: 100%

.header__main--sp-sns
  display: flex
  align-items: center
  padding: 16px 0
  p
    opacity: .3
    +font-en-bold
    font-size: 11px
    margin-right: 12px

.header__main--sp-sns__link
  display: inline-block
  width: 24px
  height: 24px
  background-image: url("~assets/img/header/insta-icon.svg")

.header__menu-active
  pointer-events: all
  opacity: 1

.header__right
  ul
    display: flex

.header__right__menu-container
  position: relative
  width: 56px
  height: 56px

.header__menu-item
  position: absolute
  top: 27px
  right: 13px
  width: 30px
  height: 1px
  background-color: #111111
  transition: .4s
  &::before
    content: ""
    position: absolute
    top: -8px
    right: 0
    width: 30px
    height: 1px
    background-color: #111111
    transition: .4s
  &::after
    content: ""
    position: absolute
    top: 8px
    left: 0
    width: 30px
    height: 1px
    background-color: #111111
    transition: .4s

.header__menu-active
  .header__menu-item
    position: absolute
    top: 28px
    right: 12px
    background-color: #ffffff
    &::before
      content: ""
      top: 0
      right: 0
      transform: rotate(45deg)
    &::after
      content: ""
      top: 0
      right: 0
      transform: rotate(-45deg)

.header__right__list-item
  margin-right: 40px
  &:last-child
    margin-right: 0
    .header__list-item__link
      display: flex
      align-items: center

</style>
