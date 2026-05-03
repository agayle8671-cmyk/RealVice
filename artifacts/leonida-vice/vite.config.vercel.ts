import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// __dirname = /vercel/path0/artifacts/leonida-vice
// ../../ = /vercel/path0  (repo root, where Vercel looks for outputDirectory)
const repoRoot = path.resolve(__dirname, "../..");

export default defineConfig({
  base: "/",
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
    dedupe: ["react", "react-dom"],
  },
  root: path.resolve(__dirname),
  build: {
    outDir: path.join(repoRoot, "dist"),
    emptyOutDir: true,
  },
});
