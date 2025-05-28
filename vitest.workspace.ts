import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  "./apps/mathly/vite.config.mts",
  "./libs/client/utils/vite.config.ts",
  "./libs/client/api-config/vite.config.mts",
  "./libs/client/repository/vite.config.ts",
  "./libs/client/ui/vite.config.mts",
  "./libs/shared/dto/vite.config.ts",
  "./libs/client/features/login/vite.config.mts",
  "./libs/client/features/user/vite.config.mts",
  "./libs/client/features/runner/vite.config.mts",
  "./libs/client/features/gallery/vite.config.mts",
  "./libs/client/features/auth/vite.config.mts",
  "./libs/client/features/layout/vite.config.mts",
  "./libs/client/features/home/vite.config.mts",
  "./libs/client/features/landing/vite.config.mts",
  "./libs/client/features/generators/additive/vite.config.ts"
])
