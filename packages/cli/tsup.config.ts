import { defineConfig } from "tsup";
export default defineConfig({
  dts: true,
  entry: ["./index.ts"],
  format: ["cjs"],
  outDir: "dist",
});
