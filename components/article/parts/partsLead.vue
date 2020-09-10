<template lang="pug">
section.p-article__lead
  h2.p-article__lead-title 目次
  ol.p-article__lead-content
    li.p-article__lead-item(v-for="item in lead", :key="item.id")
      n-link.p-article__lead-link(v-scroll-to="`#${item.id}`" to) {{ item.text }}
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
  margin-top: 32px
  padding: 24px
  border: 1px solid rgba(0, 0, 0, .5)
  +sp-view
    margin-top: 24px
    padding: 16px

.p-article__lead-title
  font-size: 20px
  +sp-view
    font-size: 18px

.p-article__lead-content
  margin: 24px 16px 12px
  +sp-view
    margin: 12px 8px

.p-article__lead-item
  +font-bold
  font-size: 15px
  border-bottom: 1px solid rgba(0, 0, 0, .5)
  +sp-view
    font-size: 14px
  &:first-child
    border-top: 1px solid rgba(0, 0, 0, .5)

.p-article__lead-link
  display: inline-block
  width: 100%
  padding: 8px 0

</style>
