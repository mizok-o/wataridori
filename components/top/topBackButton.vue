<template lang="pug">
a.p-index-top__home(:class="{'showButton': buttonActive}" href="#top" v-smooth-scroll="{ duration: 500, offset: -220 }" @click="invisible")
  .p-index-top__home-img
    img(src="~/assets/img/top/arrow_top.svg")
</template>
<script>
export default{
  data(){
    return {
      buttonActive: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.scrollWindow)
  },
  methods: {
    scrollWindow() {
      const top = 200
      this.scroll = window.scrollY
      if (top <= this.scroll) {
        this.buttonActive = true
      } else {
        this.buttonActive = false
      }
    },
    invisible(){
      this.buttonActive = false
    }
  }
}
</script>
<style lang="sass">
.p-index-top__home
  display: inline-block
  position: fixed
  bottom: 48px
  right: 14%
  width: 48px
  height: 48px
  opacity: 0
  pointer-events: none
  transition: .2s
  z-index: 12
  +pc-md-view
    right: 9%
  +sp-view
    bottom: 24px
    right: 12px


.p-index-top__home-img
  width: 100%
  height: 100%
  border: 1px solid #111111
  border-radius: 24px
  img
    width: 20px
    height: 12px
    margin: 16px 13px
  +sp-view
    width: 32px
    height: 32px
    margin: 8px
    border-radius: 16px
    img
      width: 15px
      height: 11px
      margin: 9px 8px


.showButton
  opacity: 1
  pointer-events: all
</style>
