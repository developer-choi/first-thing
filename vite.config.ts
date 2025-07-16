import {dirname, resolve} from 'node:path';
import {fileURLToPath} from 'node:url';
import {defineConfig} from 'vite';
import {viteStaticCopy} from 'vite-plugin-static-copy';
import path from 'path';
import dts from 'vite-plugin-dts'
import preserveDirectives from 'rollup-preserve-directives';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    lib: {
      entry: {
        index: resolve(__dirname, 'src/index.ts'),
        client: resolve(__dirname, 'src/client.ts'),
      },
      formats: ['es']
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['react'],
      output: {
        globals: {
          vue: 'React',
        },
      },
    },
  },
  plugins: [
    dts({
      tsconfigPath: './tsconfig.app.json',
      rollupTypes: true
    }),
    viteStaticCopy({
      targets: [
        {
          src: "./src/styles/common.module.scss",
          dest: "./",
        },
      ],
    }),
    preserveDirectives() // https://github.com/vitejs/vite/discussions/15721
  ]
});