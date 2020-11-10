<template lang="pug">
  nuxt
</template>
<script>
export default {
  head: {
    bodyAttrs: {
      id: 'top'
    }
  },
  mounted() {
    Typekit.load({async: true})
  }
}
</script>
<style lang="sass">
html
  font-size: 18px
  line-height: 1.4
  +font-regular
  box-sizing: border-box
  background-color: rgb(256, 256, 256)
  color: #222222

body
  #__nuxt
    position: relative
    +sp-view
      overflow-x: hidden

li, a, ul, ol
  list-style: none
  padding: 0
  margin: 0
*
  box-sizing: border-box
  margin: 0
  &:before, &:after
    box-sizing: border-box
    margin: 0
a
  text-decoration: none
  color: #ffffff
//全てに適用
*,
*:before,
*:after
  +box-sizing
*,
*:focus
  outline: none

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
figure,
p,
pre
  margin: 0

a
  text-decoration: none
  color: inherit
  &:focus,
    outline: none

address
  font-style: normal

hr
  margin: 0
  border: none

main
  display: block

button
  background-color: transparent
  border: none
  cursor: pointer
  outline: none
  padding: 0
  appearance: none

</style>
