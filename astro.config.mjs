// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Docs",
      components: {
        ThemeProvider: './src/components/ThemeProvider.astro',
        ThemeSelect: './src/components/ThemeSelect.astro'
      },
      customCss: [
        './src/styles/custom.css',
      ],
      tagline: "Open Source: Video Conferencing",
      logo: {
        light: "./src/assets/logo-docs.png",
        dark: "./src/assets/logo-docs.png",
        replacesTitle: true,
      },
      favicon: "favicon.ico",
      social: {
        github: "https://github.com/waterbustech/waterbus",
        discord: "https://discord.gg/mfrWVefU",
        twitter: "https://twitter.com/waterbustech",
      },
      expressiveCode: {
        themes: ["dark-plus", "github-light"],
      },
      sidebar: [
        {
          label: "Overview",
          link: "/",
        },
        {
          label: "Getting Started",
          link: "/getting-started",
        },
        {
          label: "Package waterbus_sdk",
          items: [
            {
              label: "Installation",
              link: "/sdk/installation",
            },
            {
              label: "API Reference",
              link: "/sdk/api-reference",
            },
            {
              label: "Screen Sharing",
              autogenerate: {
                directory: "sdk/screen-sharing",
              },
            },
            {
              label: "Picture In Picture",
              autogenerate: {
                directory: "sdk/picture-in-picture",
              },
            },
            {
              label: "Virtual Background",
              autogenerate: {
                directory: "sdk/virtual-background",
              },
            },
          ],
        },
        {
          label: "Self hosted",
          autogenerate: {
            directory: "self-hosted",
          },
        },
        {
          label: "Benchmark",
          link: "/benchmark",
        },
        {
          label: "Status",
          link: "/status",
        },
      ],
    }),
  ],
});
