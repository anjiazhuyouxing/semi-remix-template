// vite.config.ts
import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import path from 'path';
// import semi from "@douyinfe/vite-plugin-semi";

export default defineConfig({
  resolve: {
    alias: {
      "date-fns-tz": path.resolve(
        __dirname,
        "node_modules/date-fns-tz/esm/index.js"
      ),
    },
  },
  ssr: {
    noExternal: [
      "@douyinfe/semi-ui",
      "@douyinfe/semi-foundation",
      "@douyinfe/semi-illustrations",
      "@douyinfe/semi-icons",
      "scroll-into-view-if-needed",
    ],
  },
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
    }),
    tsconfigPaths(),
    // semi({
    //   theme: "@semi-bot/semi-theme-jianying",
    // }),
  ],
});
