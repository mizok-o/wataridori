<template lang="pug">
.p-form
  pheader
  form
    .p-form-active(v-if="isForm")
      p
        label
          input.form-control(v-model="form.name" type="text" placeholder="名前")
      .btn-container
        input.p-form-send(type="button" value="送信", :disabled="!isValid" @click="send")
    .p-form-disactive(v-else)
      p 回答ありがとう！
  .ontent
    button.button
      span.button__text
        span.button__text-inner Send
  pfooter

</template>
<script>
import pheader from '~/components/layouts/pheader.vue'
import pfooter from '~/components/layouts/pfooter.vue'
export default {
  components: {
    pheader,
    pfooter
  },
  data() {
    return {
      form: {
        name: '',
        tel: '',
        email: ''
      },
      isForm: true
    }
  },
  computed: {
    isValid(){
      return this.form.name.length <= 15 && this.form.name
    }
  },
  methods: {
    send(){
      console.log(this.form.name);
      this.isForm = false
    }
  }
}
</script>
<style lang="sass">
.p-form
  overflow-x: hidden
  width: 400px
  margin: 136px auto 0
  color: #111111
  text-align: center

.ontent
  margin: 120px 0 0

body
  --button-border-radius:7px
  --button-bg:#d8d4cf
  --button-stroke:#d8d4cf
  --button-stroke-width:1px
  --button-text:#000
  --button-bg-hover:#d8d4cf
  --button-stroke-hover:#000
  --button-stroke-width-hover:2px
  --button-text-hover:#000
  --cursor-stroke:#000
  --cursor-fill:#000
  --cursor-stroke-width:1px

.button
  cursor: pointer
  -moz-appearance: none
  -webkit-appearance: none
  border-width: var(--button-stroke-width)
  border-color: var(--button-stroke)
  border-style: solid
  color: var(--button-text)
  background: var(--button-bg)
  border-radius: var(--button-border-radius)
  min-width: 12rem
  height: 5rem
  padding: 0
  margin: 1rem
  font-family: inherit
  font-size: 1.5rem
  overflow: hidden
  display: flex
  align-items: center
  justify-content: center
  transition: border-color 0.2s ease

  &:focus
    outline: none
    border-width: var(--button-stroke-width-hover)
    border-color: var(--button-stroke-hover)
    color: var(--button-text-hover)
    background: var(--button-bg-hover)

.button--hover
  outline: none
  border-width: var(--button-stroke-width-hover)
  border-color: var(--button-stroke-hover)
  color: var(--button-text-hover)
  background: var(--button-bg-hover)

.button__text, .button__text-inner
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  height: 100%

/* デフォルト */
*
  box-sizing: border-box

  &::after, &::before
    box-sizing: border-box

\:root
  font-size: 12px

body
  margin: 0
  --color-text:#111
  --color-bg:#e5e3df
  --color-link:#000
  --color-link-hover:#000
  color: var(--color-text)
  background-color: var(--color-bg)
  font-family: tenon, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif

.button
  position: relative

.active
  cursor: pointer

/* Fade effect

.js
  body
    opacity: 0
    transition: opacity 0.3s

    &.render
      opacity: 1

  .loading
    &::before, &::after
      content: ''
      position: fixed
      z-index: 1000

    &::before
      top: 0
      left: 0
      width: 100%
      height: 100%
      background: var(--color-bg)

    &::after
      top: 50%
      left: 50%
      width: 60px
      height: 60px
      margin: -30px 0 0 -30px
      border-radius: 50%
      opacity: 0.4
      background: var(--color-link)
      animation: loaderAnim 0.7s linear infinite alternate forwards

/* Page Loader

@keyframes loaderAnim
  to
    opacity: 1
    transform: scale3d(0.5, 0.5, 1)

a
  text-decoration: underline
  color: var(--color-link)
  outline: none

  &:hover, &:focus
    color: var(--color-link-hover)
    outline: none
    text-decoration: none

main
  background-color: inherit
  display: grid
  height: 100vh
  width: 100%
  padding: 3rem
  align-content: space-between
  grid-column-gap: 5vw
  grid-template-columns: 1fr
  grid-template-rows: auto auto auto
  grid-template-areas: 'header' 'content' 'demos'

.header
  grid-area: header
  display: flex
  flex-wrap: wrap
  text-transform: uppercase

.header__title
  font-size: 1rem
  margin: 0 7vw 1rem 0
  font-weight: normal
  text-transform: uppercase

.header__links a:not(:last-child)
  margin-right: 1rem

.demos
  grid-area: demos
  justify-self: center
  position: relative
  text-align: center
  display: flex

.demo
  display: block
  width: 14px
  height: 14px
  margin: 0 4px
  border-radius: 50%
  border: 2px solid var(--color-link)
  background: var(--color-link)

.demo--current
  border-color: var(--color-link-hover)
  background: none
  pointer-events: none

.demo
  &:hover, &:focus
    opacity: 0.5

.content
  grid-area: content
  display: flex
  flex-direction: column
  align-items: center
  -webkit-touch-callout: none
  -webkit-user-select: none
  -moz-user-select: none
  -ms-user-select: none
  user-select: none

.cursor
  display: none

@media (any-pointer: fine)
  .cursor
    position: fixed
    top: 0
    left: 0
    display: block
    pointer-events: none

  .cursor__inner
    fill: var(--cursor-fill)
    stroke: var(--cursor-stroke)
    stroke-width: var(--cursor-stroke-width)

  .credits
    padding-left: 25vw
</style>
