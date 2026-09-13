import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://philippemalo.dev",
  integrations: [react()],
  image: {
    domains: ["astro.build"],
  },
  vite: {
    server: {
      allowedHosts: [".local.cyclonicks.ca"]
    }
  }
});