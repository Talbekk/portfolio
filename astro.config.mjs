import { defineConfig } from 'astro/config';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
    site: "https://www.codingnomad.co.uk/",
    output: "server",
    adapter: vercel()
});