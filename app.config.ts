import { defineConfig } from "@solidjs/start/config";
import devtoolsPlugin from "solid-devtools/vite";

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
    plugins: [devtoolsPlugin() as any],
  },
  server: {
    prerender: {
      crawlLinks: true,
    },
  },
});
