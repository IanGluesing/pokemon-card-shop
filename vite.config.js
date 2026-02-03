import { defineConfig } from "vite";
import fs from "fs";

export default defineConfig({
  server: {
    host: true, // allows LAN access
    port: 5173,
    allowedHosts: [
      'https://pokemon-card-shop-omega.vercel.app', // add your ngrok host
    ],
    // https: {
    //   key: fs.readFileSync("./cert/vite.key"),   // your private key
    //   cert: fs.readFileSync("./cert/vite.crt"),  // your certificate
    // }
  }
});
