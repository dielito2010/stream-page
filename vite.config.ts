import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/stream-page",
  plugins: [react()],
  // server: {
  //   port: 3355,
  // },
});
