# yetjoshua.com

My personal website — Vue 3 + Vite + UnoCSS, statically generated with vite-ssg.

Site engine based on [antfu/antfu.me](https://github.com/antfu/antfu.me) (MIT).

## Stack

- Vue 3 + Vite + [vite-ssg](https://github.com/antfu/vite-ssg)
- File-based routing: `pages/*.md` / `*.vue` via `vue-router/vite`
- Markdown pages via `unplugin-vue-markdown` (frontmatter-driven)
- UnoCSS (attributify + icons + local web fonts)
- OG images auto-generated at build (`sharp` + `scripts/og-template.svg`)

## Develop

```bash
pnpm i
pnpm dev
```

## Build

```bash
pnpm build
```

Outputs static site to `dist/`, deployed on Vercel.

## License

Code is licensed under [MIT](./LICENSE).
Words and images are my own — all rights reserved.
