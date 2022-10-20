# Creating VS Code Themes

Use editor tokens and scope inspector built-in VS Code to see the syntax information.

![Scope Inspector](../assets/inspect-editor-tokens-and-scopes.png)

## Additional Metadata

The TextMate grammar is defined in [extensions/vscode-vue/syntaxes/markdown-vue-html.tmLanguage.yml](https://github.com/vuedx/languagetools/blob/main/extensions/vscode-vue/syntaxes/markdown-vue-html.tmLanguage.yml). This grammar definition follows [TextMate guidelines](https://macromates.com/manual/en/language_grammars) and naming conventions. Additional metadata is provided using tokens named `meta.*.vue-html`.

![Additional metadata in Tokens](../assets/inspect-editor-tokens-and-scopes-preview.png)

## Element Metadata

- `meta.element.<tag name>.vue-html` - Element tag, e.g., `<div>...</div>`
- `meta.tag.self-closing.vue-html` - Self-closing tag, e.g., `<img />`
- `meta.tag.open.vue-html` - Opening tag, e.g., `<div>`
- `meta.tag.close.vue-html` - Closing tag, e.g., `</div>`

## Attribute Metadata

- `meta.attribute.<attribute name>.vue-html` - Attribute, e.g., `id="..."`

## Directive Metadata

- `meta.directive.<directive name>.vue-html` - Directive, e.g., `v-for="..."`
- `meta.directive.<directive name>.shorthand.vue-html` - Directive attribute, e.g., `@click="..."`, `:class="..."`, or `#default="..."`
- `meta.directive-argument.vue-html` - Directive attribute, e.g., `class` in `v-bind:class="..."`, or `eventName` in `v-on:[eventName]="..."`
- `meta.directive-modifier.vue-html` - Directive modifier, e.g., `prevent` in `v-on:click.prevent="..."`

## Interpolation Metadata

- `meta.interpolation.vue-html` - Interpolation, e.g., <span v-pre>`{{ ... }}`</span>
- `meta.embedded.source.expression.ts` - Any javascript/typescript expression

## Theme Previews

### Dark+/Light+ Theme

![Screenshot of VS Code editor using Dark+ theme](../assets/theme-preview-dark.png)
![Screenshot of VS Code editor using Light+ theme](../assets/theme-preview-light.png)

### [Night Owl Theme](https://marketplace.visualstudio.com/items?itemName=sdras.night-owl)

![Screenshot of VS Code editor using NightOwl theme](../assets/theme-preview-night-owl.png)
![Screenshot of VS Code editor using LightOwl theme](../assets/theme-preview-light-owl.png)
