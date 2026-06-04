import { copyFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

/** GitHub Pages project site: https://<user>.github.io/<repo>/ */
const githubPagesBase = '/oswald-leao-demo/';

export default defineConfig({
    base: githubPagesBase,
    plugins: [
        tailwindcss(),
        react(),
        {
            name: 'github-pages-spa-fallback',
            closeBundle() {
                const outDir = resolve(__dirname, 'docs');
                copyFileSync(resolve(outDir, 'index.html'), resolve(outDir, '404.html'));
            },
        },
    ],
    build: {
        outDir: 'docs',
    },
    server: {
        host: true,
        port: 3000,
    },
});
