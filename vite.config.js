import { defineConfig } from "vite";
import { resolve } from "path";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import { viteStaticCopy } from "vite-plugin-static-copy";
// import { ViteMinifyPlugin } from 'vite-plugin-minify';

/** @type {import('vite').UserConfig} */
export default {
  plugins: [
    VitePluginSvgSpritemap("source/img/sprite/*.svg", {
      styles: false,
      injectSVGOnDev: true,
    }),
    // input https://www.npmjs.com/package/html-minifier-terser options
    // ViteMinifyPlugin({}),
    ViteImageOptimizer({
      test: /\.(jpe?g|png|svg)$/i,
      includePublic: false,
      logStats: true,
      ansiColors: true,
      svg: {
        multipass: true,
        plugins: [
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: false,
                convertPathData: {
                  floatPrecision: 2,
                  forceAbsolutePath: false,
                  utilizeAbsolute: false,
                },
                removeViewBox: false, // https://github.com/svg/svgo/issues/1128
                cleanupIds: false,
              },
            },
          },
          "removeDimensions",
        ],
      },
      png: {
        // https://sharp.pixelplumbing.com/api-output#png
        quality: 80,
        palette: true,
      },
      jpeg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true,
      },
      jpg: {
        // https://sharp.pixelplumbing.com/api-output#jpeg
        quality: 80,
        progressive: true,
      },

      // Cache assets in cacheLocation. When enabled, reads and writes asset files with their hash suffix from the specified path.
      cache: true,
      cacheLocation: "./.cache",
    }),
    viteStaticCopy({
      targets: [
        {
          src: "./img/*.webp",
          dest: "img",
        },
        {
          src: "./js/*.js", // копирование JavaScript файлов
          dest: "js", // папка назначения
        },
      ],
    }),
  ],
  css: {
    devSourcemap: true,
  },
  publicDir: "public",
  root: "./source",
  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "./source/index.html"),
        about: resolve(__dirname, "./source/about.html"),
        household: resolve(__dirname, "./source/household.html"),
        office: resolve(__dirname, "./source/office.html"),
        pc: resolve(__dirname, "./source/pc.html"),
        refill: resolve(__dirname, "./source/refill.html"),
        tel: resolve(__dirname, "./source/tel.html"),
        tv: resolve(__dirname, "./source/tv.html"),
      },
    },
  },
  base: "./",
  server: {
    port: 3000,
  },
};
