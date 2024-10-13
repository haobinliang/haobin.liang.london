import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://haobin.liang.london/", // replace this with your deployed domain
  author: "Haobin Liang",
  desc: "This is a blog about change, life, and sometimes work.",
  title: "Haobin Liang",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
  editPost: {
    url: "https://github.com/haobinliang/haobin.liang.london/edit/main/src/content/blog",
    text: "Suggest Changes",
    appendFilePath: true,
  },
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-GB", "zh-CN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/haobinliang",
    linkTitle: `${SITE.author} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:haobin@liang.london",
    linkTitle: `Send an email to ${SITE.author}`,
    active: true,
  },
];
