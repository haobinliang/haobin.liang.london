import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://haobin.liang.london",
  author: "Haobin Liang",
  desc: "A blog about change",
  title: "HL",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 8,
};

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
