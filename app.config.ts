import { defineConfig } from "@solidjs/start/config";
import { postcss } from "tailwindcss";

export default defineConfig({
  vite: {
    server: {
      open: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "./src/app.css";`,
        },
        postcss: undefined,
      },
    },
  },
});
