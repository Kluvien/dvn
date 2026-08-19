import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://altiora.my.id",

  vite: {
    plugins: [tailwindcss()],
  },
});
