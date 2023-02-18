import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ErrorOverlay } from "vite-plugin-error-overlay";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ErrorOverlay({
      overlay: true,
      query: true, // enable showing error in the browser's address bar
      sockHost: "custom-hostname", // set the hostname for WebSocket connection (default is 'localhost')
      sockPath: "/custom-path", // set the path for WebSocket connection (default is '/_hmr')
    }),
  ],
});
