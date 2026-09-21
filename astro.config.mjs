import { defineConfig } from 'astro/config';
// import { satteri } from '@astrojs/markdown-satteri';
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // fonts: [{
  //   provider: fontProviders.local(),
  //   name: 'JetBrainsMono',
  //   cssVariable: '--font-jetbrains-mono',
  //   options: {
  //     variants: [{
  //       weight: 'normal',
  //       style: 'normal',
  //       src: ['./src/styles/webfonts/JetBrainsMono-Regular.woff2']
  //     }],
  //   },
  // }],
  // i18n: {
  //   locales: ["fr","en"],
  //   defaultLocale: "fr",
  //   routing: {
  //     prefixDefaultLocale: false,
  //   }
  // },
  image: {
    domains: ["astro.build"],
  },
  integrations: [react(), sitemap()],
  // markdown: {
  //   processor: satteri({
  //     features: {
  //       rawHtml: true,
  //       smartPunctuation: true,
  //     },
  //   })
  // },
  site: "https://philippemalo.dev",
  vite: {
    server: {
      allowedHosts: [".local.cyclonicks.ca"]
    }
  }
});