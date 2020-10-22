<template lang="pug">
section.p-article__body
  .p-article__body-content(v-for="item in content.body", :key="'k-' + item.index ")
    .p-article__body-content(v-html="item.richEditor")
    .p-article__body-content(v-html="item.html")
</template>
<script>
export default{
  props: ['content'],
  computed: {
    filter(a){
      console.log(a);
    }
  }
}
</script>
<style lang="sass">
.p-article__body
  margin-top: 48px
  p
    line-height: 175%
    +sp-view
      font-size: 16px
  +sp-view
    margin-top: 32px

.p-article__body-content
  h2
    position: relative
    margin-top: -80px
    padding-top: 80px
    +sp-view
      font-size: 20px
      margin-top: -57px
      padding-top: 57px
    &::before
      content: ""
      position: absolute
      bottom: -4px
      left: 0
      width: 100%
      height: 1px
      opacity: .5
      background-color: #222222
  img
    width: 100%
    height: auto
</style>
