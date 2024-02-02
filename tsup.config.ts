import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['prettier/index.ts'],
  minify: true,
  format: ['cjs', 'esm'],
  clean: true,
})
