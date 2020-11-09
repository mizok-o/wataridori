<template lang="pug">
footer.footer
  .footer__container
    .footer__main-content
      ul.footer__left
        li.footer__main-item
          a(href="/") プライバシーボリシー
        li.footer__main-item
          a(href="/") プライバシーボリシー
        li.footer__main-item
          a(href="/") プライバシーボリシー
        li.footer__main-item
          a(href="/") プライバシーボリシー
      ul.footer__right
        li.footer__main-item
          a(href="/") プライバシーボリシー
        li.footer__main-item
          a(href="/") プライバシーボリシー
        li.footer__main-item
          a(href="/") プライバシーボリシー
        li.footer__main-item
          a(href="/") プライバシーボリシー
    p.footer__copy-text All copyright deserved by Kotaro Mizoguchi
</template>
<style lang="sass">
.footer
  width: 100%
  height: 200px
  margin: 112px 0 0
  background-color: #eeeeee
  +sp-view
    margin-top: 56px

.footer__container
  padding: 32px 0

.footer__main-content
  display: flex
  justify-content: center
  margin: 0 auto
  background-color: #ccccff

.footer__main-item
  margin-top: 12px
  &:first-child
    margin: 0

.footer__copy-text
  margin-top: 24px
  font-size: 10px
  opacity: .5
  text-align: center
  white-space: nowrap
  background-color: #aaaaaa
</style>
