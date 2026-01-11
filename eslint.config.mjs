import nextVitals from "eslint-config-next/core-web-vitals"
import nextTs from "eslint-config-next/typescript"
import prettier from "eslint-config-prettier"
import { defineConfig, globalIgnores } from "eslint/config"

/**
 * eslint-config-next bao gồm:
 * @next/eslint-plugin-next
 * eslint-plugin-react
 * eslint-plugin-react-hooks
 * eslint-plugin-jsx-a11y
 */
const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  // MARK: base
  {
    files: ["app/**/*.{ts,tsx,js,jsx}"],
    rules: {
      "no-var": "error",
      "no-console": ["error"],
    },
  },

  // MARK: react
  {
    files: ["**/*.{tsx,jsx}"],
    rules: {
      "react/self-closing-comp": ["error", { component: true, html: true }],
      "react/jsx-handler-names": [
        "error",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
          checkLocalVariables: true,
          checkInlineFunction: true,
        },
      ],
      "react/jsx-closing-bracket-location": [
        "error",
        { selfClosing: "tag-aligned" },
      ],
      // khoảng cách bên trong cặp ngoặc nhọn {}
      "react/jsx-curly-spacing": ["error", { when: "never" }],
      // fix các trường hợp "chuỗi trong {}"
      "react/jsx-curly-brace-presence": [
        "error",
        { props: "never", children: "ignore" },
      ],
      "react/jsx-first-prop-new-line": ["error", "multiline-multiprop"],
      "react/jsx-max-props-per-line": [
        "error",
        {
          maximum: 1,
          when: "multiline",
        },
      ],
      "react/jsx-fragments": ["error", "element"],
      // kiểm soát khoảng cách xung quanh các thẻ đóng/mở
      "react/jsx-tag-spacing": [
        "error",
        {
          closingSlash: "never",
          beforeSelfClosing: "always",
          afterOpening: "never",
          beforeClosing: "never",
        },
      ],
      "react/jsx-newline": [
        "error",
        {
          prevent: false,
          allowMultilines: true,
        },
      ],
      "react/jsx-props-no-multi-spaces": "error",
      "react/jsx-indent": ["error", 2],
      "react/jsx-indent-props": ["error", "tab"],
      "react/jsx-one-expression-per-line": "error",
      // JSX không lồng quá 10 cấp
      "react/jsx-max-depth": ["error", { max: 10 }],
      "react/jsx-pascal-case": ["error", { allowAllCaps: true, ignore: [] }],
      "react-hooks/rules-of-hooks": "error",
    },
  },

  // MARK: typescript
  {
    files: ["**/*.{ts,tsx}"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          argsIgnorePattern: "^_", // Bỏ qua các tham số bắt đầu bằng dấu gạch dưới _
          varsIgnorePattern: "^_", // Bỏ qua các biến bắt đầu bằng dấu gạch dưới _
          caughtErrorsIgnorePattern: "^_", // Bỏ qua lỗi bắt được bắt đầu bằng dấu gạch dưới _
        },
      ],
      "@typescript-eslint/consistent-type-imports": [
        "error",
        {
          prefer: "type-imports",
          fixStyle: "inline-type-imports", // tự động sửa thành dạng bạn muốn
          // disallowTypeAnnotations: false,
        },
      ],
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/no-empty-function": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "@typescript-eslint/no-floating-promises": "off",
      "@typescript-eslint/no-misused-promises": "off",
      "@typescript-eslint/no-redundant-type-constituents": "off",
      "@typescript-eslint/no-unsafe-argument": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-unsafe-call": "off",
      "@typescript-eslint/no-unsafe-function-type": "off",
      "@typescript-eslint/no-unsafe-member-access": "off",
      "@typescript-eslint/no-unsafe-return": "off",
      "@typescript-eslint/prefer-nullish-coalescing": "off",
      "@typescript-eslint/prefer-promise-reject-errors": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
      "@typescript-eslint/unbound-method": "off",
    },
  },

  // MARK: style
  {
    files: ["**/*.{ts,tsx,js,jsx}"],
    rules: {
      "padding-line-between-statements": [
        "error",
        // 1. Luôn yêu cầu dòng trống TRƯỚC các lệnh return
        { blankLine: "always", prev: "*", next: "return" },

        // 2. Luôn yêu cầu dòng trống SAU các khối lệnh (if, for, switch, try, v.v.)
        {
          blankLine: "always",
          prev: ["multiline-block-like", "multiline-expression"],
          next: "*",
        },

        // 3. Luôn yêu cầu dòng trống SAU khi khai báo biến (const, let, var)
        // nếu dòng tiếp theo không phải là khai báo biến
        { blankLine: "always", prev: ["const", "let", "var"], next: "*" },
        {
          blankLine: "any",
          prev: ["const", "let", "var"],
          next: ["const", "let", "var"],
        },

        // 4. Luôn yêu cầu dòng trống TRƯỚC các khai báo hàm/class
        { blankLine: "always", prev: "*", next: ["function", "class"] },

        // 5. Luôn yêu cầu dòng trống SAU các khai báo hàm
        { blankLine: "always", prev: "function", next: "*" },
      ],
    },
  },

  {
    files: [
      "**/*.config.{js,mjs,cjs}",
      "**/{page,layout,not-found,default,error,loading}.tsx",
    ],
    rules: {
      "import/no-default-export": "off",
      "import/no-anonymous-default-export": "off",
    },
  },

  prettier,

  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
])

export default eslintConfig
