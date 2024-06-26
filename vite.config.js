import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/js/Portfolio.jsx', 'resources/js/app.js', 'resources/scss/App.scss'],
            refresh: true,
        }),
        react()
    ],
});
