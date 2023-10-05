import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dotEnv from "vite-plugin-environment";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), dotEnv("all", { prefix: "VITE_APP_" })],
  define: {
    APP_VERSION: JSON.stringify(process.env.npm_package_version),
  },
});
