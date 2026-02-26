import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://matejikj.github.io",
  base: "/marconi/",
  integrations: [tailwind()],
});
