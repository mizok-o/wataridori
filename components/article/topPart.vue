<template lang="pug">
.p-article__top-container
  p.p-article__top__date 2020/07/12
  p.p-article__top__tag #東南アジア #バックパッカー
  h1.p-article__top__title “幸せ”をもたらすフィンランド式のサウナ。現地で極意を学んできた。
</template>
<script>
export default{
  props: ['articles']
}
</script>
<style lang="sass">
.p-article__top-container
  p
    font-size: 15px
    +sp-view
      font-size: 12px

.p-article__top__date
  opacity: .5

.p-article__top__tag
  font-size: 13px
  margin: 4px 0 0


.p-article__top__title
  font-size: 32px
  margin-top: 12px
  +sp-view
    font-size: 18px

</style>
