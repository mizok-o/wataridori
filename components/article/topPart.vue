<template lang="pug">
section.p-article__top-container
  time.p-article__top__date {{ content.date }}
  p.p-article__top__sub-title {{ content.tag }}
  h1.p-article__top__title {{ content.title }}
  .p-article__top__view
    img(:src="content.img.url")
</template>
<script>
export default{
  props: ['content']
}
</script>
<style lang="sass">

.p-article__top__date
  font-size: 15px
  +sp-view
    font-size: 12px

.p-article__top__sub-title
  font-size: 18px
  opacity: .5

.p-article__top__title
  font-size: 36px
  margin-top: 16px
  +sp-view
    font-size: 20px

.p-article__top__view
  overflow: hidden
  width: 100%
  height: 480px
  margin-top: 32px
  img
    width: 100%

</style>
