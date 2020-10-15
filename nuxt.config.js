require('dotenv').config();
const { API_KEY } = process.env;

import axios from "axios"

export default {
  mode: 'universal',
  head: {
    title: "旅メディアワタリドリ",
    prefix: 'og: http://ogp.me/ns#  fb: http://ogp.me/ns/fb# article: http://ogp.me/ns/article#',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'wataridori' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://wataridori.netlify.app' },
      { hid: 'og:title', property: 'og:title', content: 'ワタリドリメディア' },
      { hid: 'og:description', property: 'og:description', content: 'ワタリドリは大学生が運営する一人旅を支援するメディアです' },
      { hid: 'og:image', property: 'og:image', content: 'https://wataridori.netlify.app/ogp.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '600' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'ワタリドリは大学生が運営する一人旅を支援するメディアです' },
      { name: 'twitter:title', content: 'ワタリドリメディア' },
      { name: 'twitter:image', content: 'https://wataridori.netlify.app/ogp.jpg' }
    ],
    link: [
      { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon-32x32.png" },
      { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon-16x16.png" },
      { name: "msapplication-TileColor", content: "#da532c" },
      { name: "theme-color", content: "#ffffff" },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;700&display=swap" }
    ],
    script: [
      { src: 'https://use.typekit.net/mzu4boj.js' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    'swiper/dist/css/swiper.min.css'
  ],
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false },
    { src: '~plugins/v-smooth-scroll', mode: 'client' }
  ],
  buildModules: [
  ],
  env: {
    API_KEY
  },
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/markdownit',
    '@nuxtjs/axios',
    'vue-scrollto/nuxt',
     ['vue-scrollto/nuxt', { duration: 300 }],
     '@nuxtjs/pwa',
     'nuxt-webfontloader',
     ['@nuxtjs/google-analytics', {id: 'UA-180340144-1'}]
  ],
  webfontloader: {
    google: {
      families: ['Noto+Sans+JP']
    }
  },
  markdownit: {
    html: true,
    injected: true,
    preset: 'default',
  },
  manifest: {
    name: "みたらし",
    title: "みたらし",
    'og:title': 'みたらし',
    description: 'きなこ',
    'og:description': 'きなこ',
    lang: 'ja',
    theme_color: "#529b58",
    background_color: "#bde0c0",
    display: "standalone",
    scope: "/",
    start_url: "/"
  },
  axios: {},
 // env: {
 //    baseUrl: baseUrl,
 //  },
 //  router: {
 //    base: baseDir,
 //  },
  generate: {
    async routes () {
      const articles = await axios.get(
        "https://wataridori.microcms.io/api/v1/top",
        { headers: { "X-API-KEY": "fcd9d6ee-fbc4-426c-b6be-54afc20ab93f" } }
      )
      return [
        ...articles.data.contents.map(article => `/${article.id}`)
      ]
    }
  },
  styleResources: {
    sass: [
      '@/assets/sass/_mixin.sass',
      '@/assets/sass/_user-style.sass',
      '@/assets/sass/_font.sass'
    ],
    stylus: [
      '@/assets/stylus/layout.styl'
    ]
  },
  build: {
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    vendor: [
      'vue-awesome-swiper'
    ]
  }
}
