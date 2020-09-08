import axios from "axios"

export default {
  mode: 'universal',
  head: {
    title: "wataridori",
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
      { hid: 'og:image', property: 'og:image', content: 'https://wataridori.netlify.app/assets/img/top/ogp.jpg' },
      { hid: 'og:image:width', property: 'og:image:width', content: '1200' },
      { hid: 'og:image:height', property: 'og:image:height', content: '600' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:description', content: 'ワタリドリは大学生が運営する一人旅を支援するメディアです' },
      { name: 'twitter:title', content: 'ワタリドリメディア' },
      { name: 'twitter:image', content: 'https://wataridori.netlify.app/assets/img/top/ogp.jpg' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"stylesheet", href:"https://use.typekit.net/ita8kbu.css"}
    ],
    script: [
      { src: 'https://use.typekit.net/tiv6nbi.js' }
    ]
  },
  loading: { color: '#fff' },

  css: [
    'swiper/dist/css/swiper.min.css'
  ],
  plugins: [
    { src: '~plugins/vue-awesome-swiper', ssr: false }
  ],
  buildModules: [
  ],
  modules: [
  '@nuxtjs/style-resources',
  '@nuxtjs/markdownit',
  '@nuxtjs/axios',
  'vue-scrollto/nuxt',
   ['vue-scrollto/nuxt', { duration: 300 }]
 ],
 markdownit: {
  html: true,
  injected: true,
  preset: 'default',
 },
 axios: {},
 env: {
    baseUrl: baseUrl,
  },
  router: {
    base: baseDir,
  },
 generate: {
   async routes () {
     const articles = await axios.get(
       "https://wataridori.microcms.io/api/v1/top",
       { headers: { "X-API-KEY": "fcd9d6ee-fbc4-426c-b6be-54afc20ab93f" } }
     )
     return [
       ...articles.data.contents.map(article => `/${article.id}`)
     ]
   },
   dir: 'dist'
 },
 styleResources: {
  sass: [
   '@/assets/sass/_mixin.sass',
   '@/assets/sass/_user-style.sass',
   '@/assets/sass/_font.sass'
  ],
  scss: [
   '@/assets/scss/_variable.scss',
   '@/assets/scss/_mixin.scss'
  ],
  stylus: [
   '@/assets/stylus/layout.styl'
  ]
},
  build: {
     extend(config, ctx) {},
    vendor: [
      'vue-awesome-swiper'
    ]
  }
}
