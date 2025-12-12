import path from "node:path"
import { fileURLToPath } from "node:url"
import globals from "globals"
import js from "@eslint/js"
import tseslint from "typescript-eslint"

const __dirname = path.dirname(fileURLToPath(import.meta.url))
export default tseslint.config({
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ["**/*.ts"],
    ignores: ["**/*.js", "**/node_modules/**", "**/dist/**"],
    rules: {
        "no-console": "warn",
        "@typescript-eslint/no-explicit-any": "warn",
        "@typescript-eslint/no-unused-vars": "off",
    },
    languageOptions: {
        parser: tseslint.parser,
        globals: {
            ...globals.node,
        },
        parserOptions: {
            // project,哪些子包
            // tsConfigRootDir,tsconfig.json的根目录
            tsconfigRootDir: import.meta.dirname,
        },
    },
})
