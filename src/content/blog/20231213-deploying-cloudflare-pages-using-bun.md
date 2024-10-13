---
title: Deploying to Cloudflare Pages using Bun
pubDatetime: 2023-12-13T22:25:05.000Z
tags:
    - bun
    - cloudflare
    - cloudfare-pages
description: Notes about deploying Cloudflare Pages using Bun
slug: deploying-cloudflare-pages-using-bun
modDatetime: 2024-10-13T14:38:42.088Z
---

## Deploying to Cloudflare Pages using Bun

Cloudflare [v2 build system](https://developers.cloudflare.com/pages/platform/language-support-and-tools/#supported-languages-and-tools) supports Bun out-of-the-box, nice!

Also, unlike v1, v2 supports any version of Node.js, Python, Go, Bun, Yarn, pnpm, you name it...

To enable v2 build system for the project, double check `Build system version` under the `Builds & deployments` section.

Build configurations:

- Build command: `bun run astro build`
- Build output directory: `/dist`
- Root directory:
- Build comments on pull requests: `Enabled`

Variables and Secrets configs:

- Add `BUN_VERSION` as `latest` to always use the latest `bun` package. Or specify a version if you want to fix it.

All configs:

![All configs](@assets/images/20231213-deploying-cloudflare-pages-using-bun-configs.png)

Note: if your page flickers, refer to my [previous post](/posts/deploying-astro-astro-paper-cloudflare-pages-pnpm/).

Viola. Happy days.
