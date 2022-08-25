import { defineConfig } from "vite";
import { resolve } from "path";
import { ghPages } from "vite-plugin-gh-pages";

const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({

    plugins: [ghPages()],

    base: "/pokedex-vite/",
    root: root,
    build: {
        outDir: outDir,
        emptyOutDir: true,
        rollupOptions: {
            input: {
                index: resolve(root, "index.html")
            }
        }
    },

    publicDir: "../public"
});