<template lang="pug">
.p-article__intro
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
  width: 100%
  margin: 16px 0 32px
  padding: 16px 16px
  border: 1px solid rgba(0, 0, 0, .5)

.p-article__intro-titlearea
  position: relative
  height: 24px
  +font-bold
  font-size: 18px

.p-article__intro-insta
  position: absolute
  top: 50%
  left: 88px
  width: 24px
  height: 24px
  transform: translateY(-50%)
  background-image: url('~assets/img/article/intro-insta.svg')

.p-article__intro-text
  margin-top: 8px
  font-size: 15px
</style>
