<template lang="pug">
footer.footer
  .footer__container
    .footer__main-content
      .footer__left
        .footer__main-logo
          h2 WATARIDORI
        ul.footer__sns
          li.footer__sns__item
            a.footer__sns__link(href="/")
          li.footer__sns__item
            a.footer__sns__link(href="/")
          li.footer__sns__item
            a.footer__sns__link(href="/")
      .footer__right
        h2.footer__info__title このサイトについて
        ul.footer__info__content
          li.footer__info__item
            a(href="https://forms.gle/QvBFE1ZXqEZrC2rb8" target="blank") お問い合わせ
          li.footer__info__item
            a(href="/") メンバー募集
          li.footer__info__item
            a(href="/privacy") プライバシーボリシー
          li.footer__info__item
            a(href="/") 利用規約
    p.footer__copy-text All copyright deserved by Kotaro Mizoguchi
</template>
<style lang="sass">
/* 入れ物 */
.footer
  width: 100%
  height: auto
  margin: 112px 0 0
  background-color: #f5f5f5
  +sp-view
    margin-top: 56px

.footer__container
  padding: 32px 0

/* メインコンテンツの入れ物 */
.footer__main-content
  display: flex
  justify-content: space-between
  margin: 0 200px

/* ロゴとSNS */
.footer__sns
  display: flex
  margin-top: 24px

.footer__sns__item
  width: 44px
  height: 44px
  margin-right: 24px

.footer__sns__link
  display: block
  width: 100%
  height: 100%
  border: 1px solid #333333
  border-radius: 22px

.footer__main__item
  margin: 8px 12px 0 0

/* このサイトについて */
.footer__right
  margin-top: 8px

.footer__info__title
  font-size: 20px

.footer__info__content
  display: flex
  margin-top: 24px

.footer__info__item
  margin-right: 24px
  transition: .2s all
  &:hover
    opacity: .3

/* コピーライトのテキスト */
.footer__copy-text
  margin-top: 24px
  font-size: 10px
  opacity: .5
  text-align: center
  white-space: nowrap
</style>
