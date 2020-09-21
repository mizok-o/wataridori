<template lang="pug">
section.p-article__intro
  .p-article__intro-titlearea
    p {{ content.name }}
    a.p-article__intro-insta(:href="content.insta")
  p.p-article__intro-text {{ content.intro }}

</template>
<script>
export default {
  props: ['content']
}
</script>
<style lang="sass">
.p-article__intro
  padding: 16px
  border: 1px solid rgba(0, 0, 0, .5)
  +sp-view
    padding: 12px

.p-article__intro-titlearea
  display: flex
  align-items: center
  font-size: 18px
  +font-bold
  +sp-view
    font-size: 16px

.p-article__intro-insta
  display: inline-block
  width: 18px
  height: 18px
  margin-left: 16px
  opacity: .3
  transition: .4s
  background-image: url('~assets/img/article/intro-insta.svg')
  background-size: cover
  &:hover
    opacity: 1

.p-article__intro-text
  margin-top: 8px
  font-size: 15px
  +sp-view
    font-size: 13px
</style>
