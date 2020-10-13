<template lang="pug">
section.p-article__top-container
  .p-article__top__sub
    time.p-article__top__date {{ content.date }}
    p.p-article__top__sub-title {{ content.tag }}
  h1.p-article__top__title {{ content.title }}
  .p-article__top__view
    .p-article__top__view-img(:style="{ backgroundImage: `url(${content.img.url})` }")
</template>
<script>
export default{
  props: ['content']
}
</script>
<style lang="sass">
.p-article__top__sub
  display: flex
  align-items: center

.p-article__top__date
  font-size: 15px
  opacity: .5
  margin-right: 24px
  +sp-view
    margin-right: 16px

.p-article__top__sub-title
  font-size: 18px
  +sp-view
    font-size: 15px

.p-article__top__title
  font-size: 36px
  margin-top: 16px
  +sp-view
    font-size: 24px
    margin-top: 8px

.p-article__top__view
  overflow: hidden
  width: 100%
  height: 480px
  margin-top: 32px
  +sp-view
    height: auto
    margin-top: 16px

.p-article__top__view-img
  height: 0
  padding-top: 60%
  background-size: cover
  background-position: center center
  background-repeat: no-repeat

</style>
