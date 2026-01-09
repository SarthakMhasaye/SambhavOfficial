import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Ensure the base path is correct for production
  base: "/",
  server: {
    host: "::",
    port: 8080,
    allowedHosts: ["sambhavofficial-in.onrender.com"],
  },
  plugins: [
    react(),
    // Strictly only include this in development mode
    mode === "development" ? componentTagger() : null,
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add this to ensure build errors are caught
  build: {
    outDir: "dist",
    sourcemap: false,
  }
}));
