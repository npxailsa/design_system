import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(dirname, 'src/index.ts'),
      name: 'NpxDesignSystem',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      // Externalize peer dependencies — consumers bring their own React and MUI
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        '@mui/material',
        '@mui/icons-material',
        '@emotion/react',
        '@emotion/styled',
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MuiMaterial',
          '@mui/icons-material': 'MuiIcons',
          '@emotion/react': 'emotionReact',
          '@emotion/styled': 'emotionStyled',
        },
        // Preserve CSS module class names in the output
        assetFileNames: 'assets/[name][extname]',
      },
    },
    // Output to dist/ directory
    outDir: 'dist',
    emptyOutDir: true,
    // Generate TypeScript declaration files via tsc separately
    sourcemap: true,
  },
});
