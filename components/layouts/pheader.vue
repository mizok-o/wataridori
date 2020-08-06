<template lang="pug">
header
  .header-container
    .header-content
      .header__left
        a(href="/")
          img.header__left__logo(src="~/assets/img/header/header-logo.svg")
        .header__main(:class="{'header__menu-active' : menuActive}")
      .header__right--sp.u-sp-view(@click="openMenu")
        .header__right__menu-container(:class="{'header__menu-active' : menuActive}")
          .header__menu-item
      .u-pc-view
        ul.header__right
          li.header__right__list-item
            a.header__list-item__link(href="#top") トップ
          li.header__right__list-item
            a.header__list-item__link(href="#articles") 記事一覧
          li.header__right__list-item
            a.header__list-item__link(href="#about") 私たちについて
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

.header__main
  position: absolute
  top: 56px
  left: 0
  width: 100vw
  height: 320px
  background-color: #ffffff
  transform: translateY(-100%)
  transition: .4s
  z-index: -1

.header__menu-active
  transform: translateY(0)

.header__right
  display: flex

.header__right--sp

.header__right__menu-container
  position: relative
  width: 56px
  height: 56px

.header__menu-item
  position: absolute
  top: 19px
  right: 13px
  width: 30px
  height: 1px
  background-color: #111111
  &::before
    content: ""
    position: absolute
    top: 8px
    right: 0
    width: 30px
    height: 1px
    background-color: #111111
  &::after
    content: ""
    position: absolute
    top: 16px
    left: 0
    width: 30px
    height: 1px
    background-color: #111111

.header__menu-active
  .header__menu-item
    position: absolute
    top: 28px
    right: 12px
    transform: rotate(45deg)
    transition: .4s
    &::before
      content: none
    &::after
      content: ""
      position: absolute
      top: 0
      right: 0
      transform: rotate(90deg)


.header__right__list-item
  margin-right: 40px
  &:last-child
    margin-right: 0
    .header__list-item__link
      display: flex
      align-items: center
      /* &::after
        content: ""
        display: block
        width: 0
        height: 0
        margin:  2px 0 0 6px
        border-top: 7px solid #111111
        border-left: 5px solid transparent
        border-right: 5px solid transparent */

.header__list-item__link
  color: #111

</style>
