---
title: Adding Twikoo comment system to Astro
pubDatetime: 2023-03-31T00:43:05
tags: ["astro", "twikoo"]
description: Couldn't find out-of-the-box solution anywhere so I think it might be good to just share what I did to add Twikoo to Astro
postSlug: adding-twikoo-astro
---

[Twikoo](https://github.com/imaegoo/twikoo) is a comment system that can be easily deployed to cloud platforms with minimal work. I particularly like that it just blend into pages with zero styling!

Also, it has all features I am want for a comment system - e.g. emoji, admin, spam filtering, image upload, markdown, Katex, syntax highlighting and more - so no complaint at all.

## Pre-requisite

Follow the [quick start](https://twikoo.js.org/quick-start.html) guide to deploy Twikoo backend.

## Installing Twikoo package into the project

I am using `pnpm`; but you install with your package management.

```bash
pnpm install twikoo
```

## Adding frontend JS to Astro

Add below code to the bottom of pages you want to show.

```js
<script>
  import twikoo from "twikoo";
  twikoo({
    envId: "https://YOUR_TWIKOO_URL", // your environment ID or url
    el: "#tcomment", // the container ID which will show the comment
    lang: "en-GB", // language for the comment template. for the full list, refer to https://github.com/imaegoo/twikoo/blob/main/src/client/utils/i18n/index.js
  }).then(() => {
    console.log("comment loading success");
  });
</script>
```

For example, I want to show comments on each post and about page. The layout is defined in [`/src/layouts/PostDetails.astro`](https://github.com/haobinliang/haobin.liang.london/blob/main/src/layouts/PostDetails.astro) and [`/src/layouts/AboutLayout.astro`](https://github.com/haobinliang/haobin.liang.london/blob/main/src/layouts/AboutLayout.astro).

## Add the comment container placeholder

Place below code at the place you want the comment to show up. The code should be on the same page.

```html
<div id="tcomment"></div>
```

Viola. Job done! 👏👏👏
