import { defineConfig } from 'vitest/config';


export default defineConfig({
  test: {
    environment: 'jsdom', // Necesario para React
    coverage: {
      provider: 'v8', // Por defecto
      reporter: ['text', 'html'],
      include: [
        'src/components/**/*.tsx'
      ],
      exclude: [
        'src/main.tsx',
        'src/App.tsx',
        'src/types/**',
        'src/components/icons/**',
        '**/*.test.*'
      ]
    },
    globals: true, // para no tener que importar describe/it/expect
    setupFiles: './src/setupTests.ts'
    },
});
