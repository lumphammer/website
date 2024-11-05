import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
  vite: {
    server: {
      open: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "./src/app.css";`,
        },
      },
    },
  },
});
