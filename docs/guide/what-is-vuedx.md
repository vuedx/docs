# What is VueDX?

VueDX stands for Vue Developer Experience. It is a set of tools for a better developer experience. Currently, it includes two VS Code extensions and a few aspirational projects.


## Extensions

- [Vue Syntax Highlight](https://marketplace.visualstudio.com/items?itemName=znck.vue) — provides syntax highlight
- [Vue Language Features](https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features) — provides TypeScript integration for VS Code

### Packages

- `@vuedx/compiler-sfc` — a light weight build of `@vue/compiler-sfc` (only `parse()` functionality is provided)
- `@vuedx/compiler-tsx` — a `<template>` to representational `TSX` compiler (generated TSX may not be functional but ensures type consistency)
- `@vuedx/projectconfig` — a JSON config file to define Vue project preferences: `vueconfig.json`
- `@vuedx/template-ast-types` — a collection of utility functions to work with `<template>` AST, think `@babel/types` but for Vue
- `@vuedx/typecheck` — a command line tool to check types, functionally equivalent to `tsc --noEmit` but includes .vue support
- `@vuedx/typescript-plugin-vue` — enables TypeScript language server to understand `.vue` files
- `@vuedx/vue-language-server` — Language server protocol implementation for .vue to supplement `@vuedx/typescript-plugin-vue`

## Aspirational Projects

- Preview: https://github.com/vuedx/preview
