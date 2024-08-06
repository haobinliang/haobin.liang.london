import { slugifyStr } from "@utils/slugify";
import Datetime from "./Datetime";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const {
    title,
    pubDatetime,
    modDatetime,
    // description,
    isTranslated,
    tags,
    locale,
  } = frontmatter;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className: "text-lg font-medium decoration-dashed hover:underline",
  };

  return (
    <li className="my-6">
      <a
        href={href}
        className="group inline-flex gap-3 text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        // className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        {tags.includes("snippet") && (
          <span
            className="content-center  rounded-md border border-skin-accent bg-skin-accent p-1 text-xs uppercase text-skin-inverted
          group-hover:border group-hover:border-dashed group-hover:border-skin-line"
          >
            {"</>"}
          </span>
        )}
        {locale === "zh-CN" && (
          <span
            className="content-center  rounded-md border border-skin-accent bg-skin-accent p-1 text-xs uppercase text-skin-inverted
          group-hover:border group-hover:border-dashed group-hover:border-skin-line"
          >
            中
          </span>
        )}
      </a>
      {isTranslated && (
        <div className="inline-flex gap-2 text-skin-accent">
          <span className="select-none">·</span>
          <a
            className="content-center  rounded-md border border-skin-accent bg-skin-accent p-1 text-xs uppercase text-skin-inverted
          group-hover:border group-hover:border-dashed group-hover:border-skin-line"
            href={
              locale === "en-GB" ? href + "-zhcn" : href.replace("-zhcn", "")
            }
          >
            {locale === "en-GB" ? "中" : "EN"}
          </a>
        </div>
      )}
      <Datetime pubDatetime={pubDatetime} modDatetime={modDatetime} />
      {/* <p>{description}</p> */}
    </li>
  );
}
