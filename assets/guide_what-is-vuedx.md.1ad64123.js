import{_ as e,c as t,o as a,a as o}from"./app.6138536a.js";const v=JSON.parse('{"title":"What is VueDX?","description":"","frontmatter":{},"headers":[],"relativePath":"guide/what-is-vuedx.md","lastUpdated":1666251108000}'),i={name:"guide/what-is-vuedx.md"},r=o('<h1 id="what-is-vuedx" tabindex="-1">What is VueDX? <a class="header-anchor" href="#what-is-vuedx" aria-hidden="true">#</a></h1><p>VueDX stands for Vue Developer Experience. It is a set of tools for a better developer experience. Currently, it includes two VS Code extensions and a few aspirational projects.</p><h2 id="extensions" tabindex="-1">Extensions <a class="header-anchor" href="#extensions" aria-hidden="true">#</a></h2><ul><li><a href="https://marketplace.visualstudio.com/items?itemName=znck.vue" target="_blank" rel="noreferrer">Vue Syntax Highlight</a> \u2014 provides syntax highlight</li><li><a href="https://marketplace.visualstudio.com/items?itemName=znck.vue-language-features" target="_blank" rel="noreferrer">Vue Language Features</a> \u2014 provides TypeScript integration for VS Code</li></ul><h3 id="packages" tabindex="-1">Packages <a class="header-anchor" href="#packages" aria-hidden="true">#</a></h3><ul><li><code>@vuedx/compiler-sfc</code> \u2014 a light weight build of <code>@vue/compiler-sfc</code> (only <code>parse()</code> functionality is provided)</li><li><code>@vuedx/compiler-tsx</code> \u2014 a <code>&lt;template&gt;</code> to representational <code>TSX</code> compiler (generated TSX may not be functional but ensures type consistency)</li><li><code>@vuedx/projectconfig</code> \u2014 a JSON config file to define Vue project preferences: <code>vueconfig.json</code></li><li><code>@vuedx/template-ast-types</code> \u2014 a collection of utility functions to work with <code>&lt;template&gt;</code> AST, think <code>@babel/types</code> but for Vue</li><li><code>@vuedx/typecheck</code> \u2014 a command line tool to check types, functionally equivalent to <code>tsc --noEmit</code> but includes .vue support</li><li><code>@vuedx/typescript-plugin-vue</code> \u2014 enables TypeScript language server to understand <code>.vue</code> files</li><li><code>@vuedx/vue-language-server</code> \u2014 Language server protocol implementation for .vue to supplement <code>@vuedx/typescript-plugin-vue</code></li></ul><h2 id="aspirational-projects" tabindex="-1">Aspirational Projects <a class="header-anchor" href="#aspirational-projects" aria-hidden="true">#</a></h2><ul><li>Preview: <a href="https://github.com/vuedx/preview" target="_blank" rel="noreferrer">https://github.com/vuedx/preview</a></li></ul>',8),c=[r];function s(d,n,l,u,p,h){return a(),t("div",null,c)}const g=e(i,[["render",s]]);export{v as __pageData,g as default};
