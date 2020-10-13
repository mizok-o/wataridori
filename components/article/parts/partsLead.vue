<template lang="pug">
section.p-article__lead(v-if="lead.length > 3")
  h2.p-article__lead-title 目次
  ol.p-article__lead-content
    li.p-article__lead-item(v-for="item in lead", :key="item.id")
      nuxt-link.p-article__lead-link(v-scroll-to="`#${item.id}`" to) {{ item.text }}
</template>
<script>
export default {
  props: ['content'],
  computed: {
    lead(){
      const cheerio = require('cheerio')
      const $ = cheerio.load(this.content.lead);
      const leadings = $('a').toArray();
      const leadList = leadings.map(data => ({
        text: data.children[0].data,
        id: data.attribs.href,
        name: data.name
      }));
      return leadList
    }
  }
}
</script>
<style lang="sass">
.p-article__lead
  width: 100%
  margin-top: 48px
  padding: 16px
  border: 1px solid rgba(0, 0, 0, .5)
  +sp-view
    margin-top: 32px
    padding: 12px

.p-article__lead-title
  font-size: 24px
  +sp-view
    font-size: 20px

.p-article__lead-content
  margin: 20px 16px
  +sp-view
    margin: 12px

.p-article__lead-item
  +font-bold
  font-size: 16px
  border-bottom: 1px solid rgba(0, 0, 0, .5)
  +sp-view
    font-size: 14px
  &:first-child
    border-top: 1px solid rgba(0, 0, 0, .5)

.p-article__lead-link
  display: inline-block
  width: 100%
  padding: 12px 0
  +sp-view
    padding: 10px 0

</style>
