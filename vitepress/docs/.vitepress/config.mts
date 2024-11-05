import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Erfan Jap",
    description: "Erfan Jap Resume",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Skills', link: '/skills'}
        ],
    },
    base: '/resume/'
})
