/// <reference types="vitest" />
import { defineConfig, defineWorkspace } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineWorkspace([
  '**/*.test.*{js,ts,mts}',
  defineConfig({
    plugins: [tsconfigPaths()],
    test: {
      name: 'unit',
      environment: 'node',
      include: ['tests/Context/**/**/*.test.*{js,ts,mts}'],
      exclude: ['dist/**'],
      testTimeout: 10_000,
      hookTimeout: 10_000,
      globals: true,
      poolOptions: {
        threads: {
          singleThread: true
        }
      }
    }
  }),
  defineConfig({
    plugins: [tsconfigPaths()],
    test: {
      name: 'features',
      environment: 'node',
      include: ['tests/apps/**/features/**/*.test.*{js,ts,mts}'],
      exclude: ['dist/**'],
      setupFiles: ['tests/apps/backoffice/features/setup.ts'],
      testTimeout: 10_000,
      hookTimeout: 10_000,
      globals: true,
      poolOptions: {
        threads: {
          singleThread: true
        }
      }
    }
  })
])
