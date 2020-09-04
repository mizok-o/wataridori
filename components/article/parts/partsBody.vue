<template lang="pug">
section.p-article__body
  article.p-article__body-content(v-html="content.body")
</template>
<script>
export default{
  props: ['content']
}
</script>
<style lang="sass">
.p-article__body
  margin-top: 64px
  p
    line-height: 175%
  +sp-view
    margin-top: 24px

.p-article__body-content
  h2
    position: relative
    margin-top: -80px
    padding-top: 80px
    &::before
      content: ""
      position: absolute
      bottom: -4px
      left: 0
      width: 100%
      height: 1px
      opacity: .5
      background-color: #222222
</style>
