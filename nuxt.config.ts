import { defineNuxtConfig } from 'nuxt';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    build: {
        // extend (config, ctx) {
        //   if (ctx.isDev) {
        //     config.devtool = ctx.isClient ? 'source-map' : 'inline-source-map'
        //   }
        // },
        postcss: {
            postcssOptions: {
                plugins: {
                    tailwindcss: {},
                    autoprefixer: {},
                },
            },
        },
    },
    css: [
        '@/assets/styles/coreinit/_index.scss',
    ],
    modules: [
        // '@nuxtjs/tailwindcss',
        '@vueuse/nuxt',
        '~/modules/article',
        '~/modules/topnav',
        '~/modules/footer',
        '~/modules/tv',
    ],
    typescript: {
        typeCheck: true,
    },
});
