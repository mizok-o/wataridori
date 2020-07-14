<template lang="pug">
header.header-container
  .header-content
    .header__left
      a(href="/")
        img.header__left__logo(src="~/assets/img/header/header-logo.svg")
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
.header-container
  position: fixed
  top: 32px
  left: 56px
  right: 112px
  width: auto
  height: 48px

.header-content
  display: flex
  justify-content: space-between
  align-items: center

.header__left__logo
  height: 24px

.header__right
  display: flex

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
