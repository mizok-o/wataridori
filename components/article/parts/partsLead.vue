<template lang="pug">
section.p-article__lead
  h2.p-article__lead-title 目次
  ol.p-article__lead-content
    li.p-article__lead-item
      a.p-article__lead-link(href="#") 一人旅したきっかけ
    li.p-article__lead-item
      a.p-article__lead-link(href="#") 大切なことを何も知らない自分を恥じた。
    li.p-article__lead-item
      a.p-article__lead-link(href="#") こうありたい理想の自分が見えた。
    li.p-article__lead-item
      a.p-article__lead-link(href="#") この世界に生まれたから俺は旅をする。
    li.p-article__lead-item
      a.p-article__lead-link(href="#") この世界に生まれたから俺は旅をする。
</template>
<script>
</script>
<style lang="sass">
.p-article__lead
  width: 100%
  margin-top: 32px
  padding: 24px
  border: 1px solid rgba(0, 0, 0, .5)
  +sp-view
    margin-top: 24px
    padding: 12px

.p-article__lead-title
  font-size: 24px
  +sp-view
    font-size: 20px

.p-article__lead-content
  margin: 12px 16px
  +sp-view
    margin: 12px 8px

.p-article__lead-item
  +font-bold
  font-size: 16px
  border-bottom: 1px solid rgba(0, 0, 0, .5)
  +sp-view
    font-size: 14px

.p-article__lead-link
  display: inline-block
  width: 100%
  padding: 16px 0
  +sp-view
    padding: 12px 0

</style>
