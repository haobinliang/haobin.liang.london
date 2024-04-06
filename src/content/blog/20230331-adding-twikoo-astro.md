---
title: Adding Twikoo comment system to Astro
pubDatetime: 2023-03-31T00:43:05
modDatetime: 2024-04-06T01:30:09
tags: ["astro", "twikoo"]
description: Couldn't find out-of-the-box solution anywhere so I think it might be good to just share what I did to add Twikoo to Astro
slug: adding-twikoo-astro
locale: "en-GB"
---

I am using CloudFlare's CDN service - [https://cdnjs.com/libraries/twikoo](https://cdnjs.com/libraries/twikoo). The `integrity` will change every version.

Add below code to the page.

```js
<script>
  document.addEventListener("astro:page-load", () => {
    function loadTwikoo() {
      const commentsContainer = document.getElementById("tcomment");
      if (commentsContainer) {
        const script = document.createElement("script");
        script.src =
          "https://cdnjs.cloudflare.com/ajax/libs/twikoo/1.6.32/twikoo.all.min.js";
        script.defer = true;
        script.integrity =
          "sha512-oLwAGOCSlT4rWN1IV2lpvUWOwYPo1xhJyrIhFk6jVa+S7Vi2AKvr0rEuvHZAkVd9p3sJBTMcx2XabwK0HGxFuA==";
        script.crossOrigin = "anonymous";
        script.referrerPolicy = "no-referrer";

        script.onload = () => {
          const initScript = document.createElement("script");
          initScript.innerHTML = `
            twikoo.init({
              envId: "https://comments.haobin.liang.london",
              el: "#tcomment",
              lang: "en-GB",
            });
          `;
          document.body.appendChild(initScript);
        };
        document.body.appendChild(script);
      }
    }
    loadTwikoo();
  });
</script>
```

Place the div to trigger the comment section.

```html
<div id="tcomment"></div>
```

_Source: [Astro 添加 Twikoo 评论](https://www.iamlm.com/blog/170.Astro%20%E6%B7%BB%E5%8A%A0%20Twikoo%20%E8%AF%84%E8%AE%BA/) by [老麦](https://www.iamlm.com/)_

<hr>

**Outdated - not automatically loaded since Astro v3**

[Twikoo](https://github.com/imaegoo/twikoo) is a comment system that can be easily deployed to cloud platforms with minimal work. I particularly like that it just blends into pages with zero styling!

Also, it has all features I am want for a comment system - e.g. emoji, admin, spam filtering, image upload, markdown, Katex, syntax highlighting and more - so no complaint at all.

**Pre-requisite**

Follow the [quick start](https://twikoo.js.org/quick-start.html) guide to deploy Twikoo backend.

**Installing Twikoo package into the project**

Install Twikoo with your package management. I am using `pnpm`.

```bash
pnpm install twikoo
```

**Adding frontend JS to Astro**

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

**Declaring Twikoo module**

The Twikoo package doesn't have any type declared; so it will show as error in development.

Declare the module in main `.d.ts` file (in my case `env.d.ts`) to remove errors.

```ts
// Remove twikoo import error
declare module "twikoo";
```

**Adding the comment container placeholder**

Place below code. The code should be on the same page.

```html
<div id="tcomment"></div>
<!-- the attribute of this element to correlates to `el` in the JS  -->
```

Viola. Job done! 👏👏👏
