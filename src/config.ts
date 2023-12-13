import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://haobin.liang.london/", // replace this with your deployed domain
  author: "Haobin Liang",
  desc: "This is a blog about change, life, and sometimes work.",
  title: "Haobin Liang",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOCALE = ["en-GB", "zh-CN"]; // set to [] to use the environment default

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
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:haobin@liang.london",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
