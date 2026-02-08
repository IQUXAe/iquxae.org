import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                contact: resolve(__dirname, 'contact.html'),
                donate: resolve(__dirname, 'donate.html'),
                // Projects
                'projects/android-kernel': resolve(__dirname, 'projects/android-kernel.html'),
                'projects/carriername': resolve(__dirname, 'projects/carriername.html'),
                'projects/daily-crypto': resolve(__dirname, 'projects/daily-crypto.html'),
                'projects/iquxae-website': resolve(__dirname, 'projects/iquxae-website.html'),
                'projects/monochat': resolve(__dirname, 'projects/monochat.html'),
            },
        },
    },
})

