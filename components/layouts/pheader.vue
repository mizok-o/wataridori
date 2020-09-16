<template lang="pug">
header
  .header-container
    .header-content
      .header__left
        a.header__left__top-link(href="/")
          img.header__left__logo(src="~/assets/img/header/header.svg")
        a.header__left__sub-link(href="#article")
          p 記事一覧
        //ul.header__left-container(:class="{'header__menu-active' : menuActive}")
          li.header__left-item
            a(href="#top" @click="closeMenu") トップ
          li.header__left-item
            a(href="#articles" @click="closeMenu") 記事一覧
          li.header__left-item
            a(href="#about" @click="closeMenu") 私たちについて
      .header__right
        a.header__right-sns(href="https://www.instagram.com/")
          svg.header__right-sns__icon(width='22' height='22' fill='#222222' xmlns='http://www.w3.org/2000/svg')
            path(d='M11 5.343a5.69 5.69 0 00-2.206.428 5.884 5.884 0 00-1.79 1.215A5.867 5.867 0 005.786 8.77a5.65 5.65 0 00-.43 2.2c0 .781.144 1.515.43 2.2a5.867 5.867 0 001.218 1.786c.506.505 1.103.91 1.79 1.214A5.69 5.69 0 0011 16.6a5.69 5.69 0 002.206-.429 5.883 5.883 0 001.79-1.214c.506-.505.912-1.1 1.217-1.786.287-.685.43-1.419.43-2.2 0-.78-.143-1.514-.43-2.2a5.866 5.866 0 00-1.217-1.785 5.884 5.884 0 00-1.79-1.215A5.69 5.69 0 0011 5.343zm0 9.286a3.537 3.537 0 01-2.592-1.072 3.519 3.519 0 01-1.075-2.586c0-1.01.358-1.871 1.075-2.585A3.537 3.537 0 0111 7.314c1.012 0 1.876.357 2.592 1.072a3.519 3.519 0 011.075 2.585c0 1.01-.358 1.872-1.075 2.586A3.537 3.537 0 0111 14.63zm7.19-9.515c0-.362-.129-.666-.387-.914a1.296 1.296 0 00-.93-.371c-.364 0-.674.123-.932.371a1.218 1.218 0 00-.386.914c0 .381.129.696.386.943.258.248.568.372.931.372.363 0 .674-.124.931-.372.258-.247.387-.562.387-.943zM21.427 3.8a5.56 5.56 0 00-1.275-1.957A5.639 5.639 0 0018.22.57a9.496 9.496 0 00-1.332-.357 7.237 7.237 0 00-1.361-.128 34.163 34.163 0 00-1.575-.072C13.473.004 12.49 0 11 0S8.527.005 8.05.014a34.17 34.17 0 00-1.576.072c-.458 0-.912.043-1.36.128A8.484 8.484 0 003.81.571a5.577 5.577 0 00-1.962 1.272A5.56 5.56 0 00.573 3.8C.42 4.22.3 4.652.215 5.1c-.086.448-.139.9-.158 1.357-.019.59-.033 1.12-.043 1.586C.004 8.51 0 9.486 0 10.97c0 1.486.005 2.467.014 2.943.01.476.024 1.01.043 1.6.02.457.072.905.158 1.343.086.438.205.876.358 1.314a5.42 5.42 0 001.275 1.943 5.675 5.675 0 001.962 1.257c.42.172.854.305 1.303.4.45.096.903.143 1.361.143.592.038 1.122.062 1.59.072.468.01 1.446.014 2.936.014s2.473-.005 2.95-.014c.478-.01 1.013-.034 1.605-.072.439 0 .883-.043 1.332-.128a9.491 9.491 0 001.332-.357 5.436 5.436 0 001.948-1.272 5.657 5.657 0 001.26-1.957c.172-.42.3-.852.387-1.3.086-.448.129-.9.129-1.357.019-.59.033-1.12.043-1.586.01-.466.014-1.443.014-2.928V8.07c0-.466-.02-.995-.057-1.585 0-.457-.043-.915-.13-1.372a6.726 6.726 0 00-.386-1.314zm-1.49 11.6c0 .362-.033.714-.1 1.057a7.01 7.01 0 01-.272 1 3.646 3.646 0 01-.83 1.286 3.386 3.386 0 01-1.261.8 4.636 4.636 0 01-1.003.286 9.51 9.51 0 01-1.03.114c-.593.019-1.113.033-1.562.043-.449.01-1.418.014-2.908.014s-2.458-.005-2.907-.014c-.449-.01-.97-.024-1.561-.043a5.34 5.34 0 01-1.046-.1 6.135 6.135 0 01-1.017-.3 3.386 3.386 0 01-1.26-.8 3.645 3.645 0 01-.831-1.286 7.017 7.017 0 01-.272-1 5.363 5.363 0 01-.1-1.028 23.357 23.357 0 01-.058-1.543V10.97v-2.9c0-.447.02-.966.058-1.557 0-.343.033-.685.1-1.028.067-.343.157-.686.272-1.029.19-.476.468-.895.83-1.257a3.717 3.717 0 011.261-.829A8.487 8.487 0 015.457 2.1c.334-.067.683-.1 1.046-.1.573-.02 1.088-.033 1.546-.043.459-.01 1.433-.014 2.922-.014h2.908c.449 0 .97.019 1.561.057.344 0 .688.033 1.031.1a7.07 7.07 0 011.003.271c.477.19.898.467 1.26.829.363.362.64.78.831 1.257.115.343.205.681.272 1.014.067.334.1.681.1 1.043.02.572.034 1.086.043 1.543.01.457.015 1.429.015 2.914v2.9c0 .448-.01.958-.029 1.529h-.029z')


</template>
<script>
export default {
  data(){
    return{
      menuActive: false
    }
  }
  // methods: {
  //   openMenu(){
  //     this.menuActive = !this.menuActive
  //   },
  //   closeMenu(){
  //     this.menuActive = !this.menuActive
  //   }
  // }
}
</script>
<style lang="sass">
header
  position: relative
  width: 100%
  height: 48px
  padding-top: 48px
  z-index: 2
  +sp-view
    padding-top: 20px

.header-container
  width: 100%
  height: 48px
  color: #222222

.header-content
  display: flex
  height: 100%
  margin: 0 14%
  justify-content: space-between
  align-items: center
  +pc-md-view
    margin: 0 9%
  +sp-view
    margin: 0 20px

/* .header__left
  width: 200px
  height: 100%
  &:hover
    .header__left__menu-container
      .header__menu-item
        &::after
          top: 5px
        &::before
          top: -5px */

/* .header__left
  &:hover
    .header__menu-active
      .header__menu-item
        &::after
          top: 0
        &::before
          top: 0
 */
/* .header__left__menu-container
  position: relative
  width: 100%
  height: 100%
  cursor: pointer
  &::before
    content: "menu"
    position: absolute
    top: 25px
    left: 96px
    display: block
    transition: .4s */

/* .header__menu-item
  position: absolute
  top: 40px
  left: 56px
  width: 30px
  height: 1px
  background-color: #111111
  transition: .4s
  &::before
    content: ""
    position: absolute
    top: -8px
    right: 0
    width: 30px
    height: 1px
    background-color: #111111
    transition: .4s
  &::after
    content: ""
    position: absolute
    top: 8px
    left: 0
    width: 30px
    height: 1px
    background-color: #111111
    transition: .4s */

/* .header__menu-active
  &::before
    opacity: 0
  .header__menu-item
    position: absolute
    top: 40px
    left: 56px
    background-color: #ffffff
    &::before
      content: ""
      top: 0
      right: 0
      transform: rotate(45deg)
    &::after
      content: ""
      top: 0
      right: 0
      transform: rotate(-45deg) */

.header__left
  display: flex
  align-items: center
  height: 48px
  +sp-view
    width: auto

.header__left__top-link
  display: block
  height: 100%
  margin-right: 120px
  +sp-view
    margin-right: 48px

.header__left__logo
  width: 112px
  margin: 4px 0
  +sp-view
    width: 104px

.header__left__sub-link
  position: relative
  display: block
  &::after
    content: ""
    position: absolute
    bottom: 0
    left: 0
    width: 100%
    height: 1px
    background-color: #222222
    transform: scale(0, 1)
    transform-origin: top left
    transition: .2s
  &:hover
    &::after
      transform-origin: top right
      transform: scale(1, 1)


/* .header__left
  position: absolute
  top: 56px
  left: 0
  width: 100vw
  height: 320px
  padding: 40px 20px 80px
  +font-bold
  pointer-events: none
  opacity: 0
  background-color: #ffffff
  transition: .4s
  z-index: -1 */

.header__right
  width: 48px
  height: 48px
  margin: 8px 0
  +sp-view
    margin: 0

.header__right-sns
  position: relative
  display: block
  width: 100%
  height: 100%
  border-radius: 24px
  border: 1px solid #222222
  transition: .4s
  svg
    transition: .4s
  &:hover
    background: linear-gradient(90deg, #EF4563, #EF6E45)
    border: 1px solid #fcfbf9
    .header__right-sns__icon
      fill: #ffffff
/*   +sp-view
  background: linear-gradient(90deg, #EF4563, #EF6E45)
  border: none
  svg
    fill: #ffffff */


.header__right-sns__icon
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  width: 22px
  height: 22px

/* .header__menu-active
  pointer-events: all
  opacity: 1 */

/* .header__right__list-item
  margin-right: 40px
  &:last-child
    margin-right: 0
    .header__list-item__link
      display: flex
      align-items: center */

</style>
