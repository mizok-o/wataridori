<template lang="pug">
  nuxt
</template>

<style lang="sass">
html
  font-size: 18px
  +font-regular
  box-sizing: border-box
  background-color: #ffffff
  color: #222222
  -ms-overflow-style: none
  scrollbar-width: none

body
  &::-webkit-scrollbar
    display: none
  #nuxt
    position: relative
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
