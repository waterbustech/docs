// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      logo: {
        light: "./src/assets/app_name_logo.png",
        dark: "./src/assets/app_name_logo.png",
        replacesTitle: true,
      },
      social: {
        github: "https://github.com/waterbustech/waterbus",
        discord: "https://discord.gg/mfrWVefU",
        twitter: "https://twitter.com/waterbustech",
      },
	  expressiveCode: {
        themes: ['dark-plus', 'github-light'],
      },
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", slug: "guides/example" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
  ],
});
