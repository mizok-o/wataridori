<template lang="pug">
.p-article__top-container
  //p.p-article__top__date {{ articles }}
  p.p-article__top__tag
  h1.p-article__top__title “幸せ”をもたらすフィンランド式のサウナ。現地で極意を学んできた。
  img(src="articles.img.url")
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
  opacity: .7

.p-article__top__tag
  font-size: 13px
  margin: 4px 0 0


.p-article__top__title
  font-size: 36px
  margin-top: 12px
  +sp-view
    font-size: 18px

</style>
