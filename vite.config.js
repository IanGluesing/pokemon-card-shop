import { defineConfig } from "vite";
import fs from "fs";

export default defineConfig({
  server: {
    allowedHosts: [
      'acetated-hannelore-germinatively.ngrok-free.dev', // ngrok dev testing environment
      'https://pokemon-card-shop-omega.vercel.app', // vercel prod env
    ],
  },
  // Inject code at build time to allow crawling access from snipcart
  plugins: [
    {
      name: "inject-snipcart-html",
      transformIndexHtml(html) {
        const products = fs.readFileSync(
          "public/snipcart-products.html",
          "utf-8"
        );

        return html.replace(
          "<!-- injected at build time -->",
          products
        );
      },
    },
  ],


});
