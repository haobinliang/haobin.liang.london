---
title: Deploying Astro & AstroPaper to Cloudflare Pages using PNPM
pubDatetime: 2023-03-29T23:22:05
tags: ["astro", "cloudflare", "cloudfare-pages"]
description: Notes about deploying Astro to Cloudflare Pages using PNPM and fixing AstroPaper background flashing when loading pages due to Rocket Loader
slug: deploying-astro-astro-paper-cloudflare-pages-pnpm
locale: "en-GB"
---

I use PNPM as the package management in my local machine. However, Cloudflare doesn't support it out of the box ([here is the list](https://developers.cloudflare.com/pages/platform/build-configuration/#language-support-and-tools)).

Here's how I get around it.

- Build command: `npx pnpm i --store=node_modules/.pnpm-store && npx pnpm run build`
- Production variables:
  - `NODE_VERSION`: `16.19.1`
  - `NPM_FLAGS`: `--version`
  - `PYTHON_VERSION`: `3.7`

Build command uses `npx` to run `pnpm i` and store package cache separately from `npm`. Then use `npx` to run `pnpm run build` to build the side. I left the build output directory as `/dist`.

Node 16 is the latest LTS version that Cloudflare Pages supports. Node 17 is supported by CF; but somehow [it is no longer LTS](https://nodejs.org/en/download/releases). I am still trying to dig out why it is short-lived 🤣 - looks like Node versions are made LTS every two version.

`NPM_FLAGS`: `--version` disables `npm` to run.

`PYTHON_VERSION`: `3.7`, just because I want to. Well, more that it's because the out-of-the-box version is 2.7 😱. The latest supported version is 3.7 and exactly 3.7.

This is what I got when trying Python 3.7.16.

```bash
/opt/build/bin/run-build-functions.sh: line 168: /opt/buildhome/python3.7.16/bin/activate: No such file or directory
```

🤦‍♂️

## Flashing dark/light mode

Once I deployed it Cloudflare Pages, the background flashed when navigating between pages. So were the font faces and styles.

<div style="position: relative; padding-bottom: 86.53846153846155%; height: 0;"><iframe src="https://www.loom.com/embed/7de818d8091c4ff48a18d563dc89ff0b" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"></iframe></div>

I tried so many fixes. But long story short, it's because of the infamous [Rocket Loader](https://developers.cloudflare.com/fundamentals/speed/rocket-loader/), which defers 'the loading of all of your JavaScript until after rendering' to achieve 'much faster loading experience'.

Better for the speed(?); worse for the my eyes 😎.

The fix is to set an attribute `data-cfasync="false"` for `/public/toggle-theme.js` so [Rocket Loader will not defer ](https://developers.cloudflare.com/fundamentals/speed/rocket-loader/ignore-javascripts/) loading the switch. `data-cfasync` attribute must be put before `src`.

```js
<script data-cfasync="false" is:inline src="/toggle-theme.js"></script>
```

Viola. Happy days.
