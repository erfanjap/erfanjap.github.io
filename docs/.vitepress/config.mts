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
    appearance: {
        initialValue: 'light'
    },
    head: [
        [
            'script',
            {async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-RBG2R583G0'}
        ],
        [
            'script',
            {},
            `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RBG2R583G0');`
        ]
    ]
})
