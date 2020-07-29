<template lang="pug">
header
  .header-container
    .header-content
      .header__left
        a(href="/")
          img.header__left__logo(src="~/assets/img/header/header-logo.svg")
      .header__right--sp.u-sp-view
        .header__right-container
          .header__right__menu
            .header__right__menu-container(@click="")
              .header__menu-item
              .header__menu-item
      .u-pc-view
        ul.header__right
          li.header__right__list-item
            a.header__list-item__link(href="/") トップ
          li.header__right__list-item
            a.header__list-item__link(href="/") 記事一覧
          li.header__right__list-item
            a.header__list-item__link(href="/") 私たちについて
          li.header__right__list-item
            a.header__list-item__link(href="/") タグ
</template>
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
  padding: 4px 16px


.header__left__logo
  height: 24px
  +sp-view
    height: 20px

.header__right
  display: flex


.header__right__menu-container
  position: relative
  width: 48px
  height: 48px

.header__menu-item
  position: absolute
  top: 20px
  left: 50%
  width: 24px
  height: 1px
  background-color: #111111
  transform: translateX(-50%)
  &:last-child
    top: 28px


.header__right__list-item
  margin-right: 32px
  &:last-child
    margin-right: 0
    .header__list-item__link
      display: flex
      align-items: center
      &::after
        content: ""
        display: block
        width: 0
        height: 0
        margin:  2px 0 0 6px
        border-top: 7px solid #111111
        border-left: 5px solid transparent
        border-right: 5px solid transparent

.header__list-item__link
  color: #111

</style>
