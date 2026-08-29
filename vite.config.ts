import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

// https://vite.dev/config/
export default defineConfig({
  base: "/task-flow/",
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  server: {
    open: true,
    port: 3000,
  },
});
