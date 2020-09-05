import axios from "axios"
export default {
  mode: 'universal',
  head: {
    title: "wataridori",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
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
