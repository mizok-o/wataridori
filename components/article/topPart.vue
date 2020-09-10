<template lang="pug">
section.p-article__top-container
  .p-article__top__sub
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
.p-article__top__sub
  +sp-view
    display: flex
    align-items: center

.p-article__top__date
  font-size: 15px
  opacity: .5
  +sp-view
    font-size: 13px
    margin-right: 16px

.p-article__top__sub-title
  font-size: 18px
  +sp-view
    font-size: 13px

.p-article__top__title
  font-size: 36px
  margin-top: 16px
  +sp-view
    font-size: 20px
    margin-top: 8px

.p-article__top__view
  overflow: hidden
  width: 100%
  height: 480px
  margin-top: 32px
  img
    width: 100%
  +sp-view
    height: auto
    margin-top: 24px

</style>
