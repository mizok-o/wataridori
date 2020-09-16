<template lang="pug">
.p-article__sharearea
  ul.p-article__share-content
    li.p-article__share-item.share-twitter
      a.p-article__share-link(:href='twitterUrl' target="_blank")
        svg(width='22' height='18' fill='#222222' xmlns='http://www.w3.org/2000/svg')
          path(d='M19.745 4.458v.603c0 1.486-.28 2.99-.84 4.51a13.003 13.003 0 01-2.464 4.13c-1.084 1.232-2.421 2.233-4.012 3.002-1.59.787-3.426 1.18-5.506 1.18-1.277 0-2.5-.179-3.672-.537A12.837 12.837 0 010 15.838c.192.035.376.052.55.052h.551c1.05 0 2.05-.166 3.003-.498a8.734 8.734 0 002.583-1.416 4.35 4.35 0 01-2.623-.905 4.536 4.536 0 01-1.6-2.215l.433.052a3.7 3.7 0 00.433.026c.21 0 .411-.017.603-.052l.577-.105A4.447 4.447 0 011.927 9.23C1.237 8.408.892 7.447.892 6.346v-.053c.314.158.642.289.983.394.34.104.695.166 1.062.183a4.461 4.461 0 01-1.469-1.6 4.374 4.374 0 01-.55-2.15c0-.42.057-.821.17-1.206.114-.384.267-.743.46-1.075.558.682 1.18 1.302 1.86 1.862.683.56 1.417 1.04 2.203 1.442a13.18 13.18 0 002.518.97c.874.245 1.774.394 2.7.446a5.42 5.42 0 01-.104-1.049c0-1.241.437-2.303 1.31-3.186C12.91.441 13.977 0 15.236 0c.647 0 1.254.131 1.822.393a4.533 4.533 0 011.456 1.05 9.371 9.371 0 001.507-.433c.481-.184.931-.407 1.35-.67-.157.525-.406 1.002-.747 1.43-.34.428-.747.782-1.219 1.062.455-.052.9-.14 1.337-.262A9.74 9.74 0 0022 2.124c-.315.454-.66.878-1.036 1.272a8.77 8.77 0 01-1.22 1.062z')
    //li.p-article__share-item.share-face
      a.p-article__share-link(:href='facebookUrl', target="_blank")
        svg(width='12' height='22' fill='#222222' xmlns='http://www.w3.org/2000/svg')
          path(d='M7.42 22V11.974h3.38l.486-3.925H7.42V5.557c0-.573.12-1.036.358-1.389.24-.353.76-.53 1.562-.53H11.4V.143a74.505 74.505 0 00-1.504-.1A26.608 26.608 0 008.393 0c-1.49 0-2.702.444-3.638 1.332-.936.888-1.403 2.172-1.403 3.853v2.864H0v3.925h3.352V22h4.067z')


</template>
<script>
export default{
  props: ['content'],
  data() {
    return {
      twitterUrl: `http://twitter.com/share?url=https://wataridori.netlify.app/${this.content.id}&hashtags=一人旅メディアワタリドリ`,
      facebookUrl: 'http://www.facebook.com/share.php?u=https://wataridori.netlify.app'
    }
  }
}
</script>
<style lang="sass">
.p-article__sharearea
  margin: 156px 0 0 48px
  +pc-md-view
    position: fixed
    bottom: 48px
    left: 9%
    width: 100%
    margin: 32px 0 0
  +sp-view
    bottom: 32px
    left: 20px

.p-article__share-content
  position: -webkit-sticky
  position: sticky
  top: 160px
  +pc-md-view
    display: flex

.p-article__share-item
  width: 48px
  height: 48px

.p-article__share-link
  position: relative
  display: block
  width: 48px
  height: 48px
  font-size: 15px
  border-radius: 24px
  transition: .2s
  color: #ffffff
  svg
    transition: .4s
    fill: #222222
    +pc-md-view
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      width: 20px

.share-twitter
  .p-article__share-link
    padding: 15px 13px 0
    border: 1px solid #222222
    &:hover
      background-color: #55ACEE
      border: 1px solid #55ACEE
      svg
        fill: #ffffff
    +pc-md-view
      border: 1px solid #55ACEE
      svg
        fill: #55ACEE

/* .share-face
  .p-article__share-link
    padding: 13px 17px
    border: 1px solid #222222
    svg
      width: 24px
    &:hover
      background-color: #49629D
      border: 1px solid #fcfbf9 */

</style>
