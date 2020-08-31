<template lang="pug">
section.p-article__intro
  .p-article__intro-titlearea
    p 椎野暁斗
    a.p-article__intro-insta(href="https://www.instagram.com/akiiin1021/")
  p.p-article__intro-text 慶應義塾大学３年生。
    br
    |大学生で行った東南アジア旅をきっかけに旅が好きになり、
    |2019年に約7ヶ月間の世界一周旅へ。

</template>
<script>
</script>
<style lang="sass">
.p-article__intro
  padding: 24px
  border: 1px solid rgba(0, 0, 0, .5)

.p-article__intro-titlearea
  position: relative
  font-size: 20px
  +font-bold

.p-article__intro-insta
  position: absolute
  top: 50%
  left: 96px
  width: 20px
  height: 20px
  transform: translateY(-50%)
  opacity: .3
  transition: .4s
  background-image: url('~assets/img/article/intro-insta.svg')
  background-size: cover
  &:hover
    opacity: 1

.p-article__intro-text
  margin-top: 12px
  font-size: 16px
</style>
