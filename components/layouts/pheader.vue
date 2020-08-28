<template lang="pug">
header
  .header-container
    .header-content
      .header__left(@click="openMenu")
        .header__left__menu-container(:class="{'header__menu-active' : menuActive}")
          .header__menu-item
      .header__main
        a.header__main__link(href="/")
          img.header__main__logo(src="~/assets/img/header/header.svg")
        //ul.header__main-container(:class="{'header__menu-active' : menuActive}")
          li.header__main-item
            a(href="#top" @click="closeMenu") トップ
          li.header__main-item
            a(href="#articles" @click="closeMenu") 記事一覧
          li.header__main-item
            a(href="#about" @click="closeMenu") 私たちについて
      .header__right
        .header__right-sns
          p Follow us
          a.header__right-sns__link(href="https://www.instagram.com/")
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
  width: 100%
  height: 92px
  z-index: 2

.header-container
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 92px
  color: #222222
  background-color: #ffffff

.header-content
  display: flex
  width: 100%
  height: 100%
  justify-content: space-between
  align-items: center
  +sp-view
    padding: 0 0 0 16px

.header__left
  width: 200px
  height: 100%
  &:hover
    .header__left__menu-container
      .header__menu-item
        &::after
          top: 5px
        &::before
          top: -5px

.header__left
  &:hover
    .header__menu-active
      .header__menu-item
        &::after
          top: 0
        &::before
          top: 0

.header__left__menu-container
  position: relative
  width: 100%
  height: 100%
  cursor: pointer
  &::before
    content: "menu"
    position: absolute
    top: 32px
    left: 96px
    display: block
    transition: .4s

.header__menu-item
  position: absolute
  top: 46px
  left: 56px
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
  &::before
    opacity: 0
  .header__menu-item
    position: absolute
    top: 46px
    left: 56px
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

.header__main
  width: 120px
  height: 100%

.header__main__link
  display: block
  width: 100%
  height: 100%

.header__main__logo
  margin: 25px 0


/* .header__main
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
  z-index: -1 */


.header__right
  width: auto
  height: 100%
  margin-right: 56px

.header__right-sns
  display: flex
  align-items: center
  padding: 35px 0
  p
    opacity: .3
    +font-en-bold
    font-size: 11px
    margin-right: 12px

.header__right-sns__link
  display: inline-block
  width: 20px
  height: 20px
  background-image: url("~assets/img/header/insta-icon.svg")
  background-size: cover

.header__menu-active
  pointer-events: all
  opacity: 1

.header__right__list-item
  margin-right: 40px
  &:last-child
    margin-right: 0
    .header__list-item__link
      display: flex
      align-items: center

</style>
