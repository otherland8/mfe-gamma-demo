import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssCodeSplit: false,
  },
  plugins: [
    vue(),
    federation({
      name: "gammaModule",
      filename: "gammaModule.js",
      exposes: {
        "./App": "./src/main",
      },
    }),
  ],
});
