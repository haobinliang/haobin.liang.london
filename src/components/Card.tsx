import Datetime from "./Datetime";
import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"blog">["data"];
  secHeading?: boolean;
  showDescription?: boolean;
}

export default function Card({
  href,
  frontmatter,
  secHeading = true,
  showDescription,
}: Props) {
  const {
    title,
    pubDatetime,
    description,
    locale,
    postSlug,
    tags,
    isTranslated,
  } = frontmatter;

  const headerProps = {
    style: {
      viewTransitionName: postSlug ? postSlug : slugifyStr(title),
    },
    className:
      "text-lg font-medium decoration-dashed group-hover:underline text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0",
  };

  return (
    <li className="my-6">
      <a href={href} className="group flex items-center gap-2">
        {secHeading ? (
          <h2 {...headerProps}>{title}</h2>
        ) : (
          <h3 {...headerProps}>{title}</h3>
        )}
        {tags.includes("snippet") && (
          <span className="rounded-md border bg-skin-accent p-1 text-xs uppercase text-skin-inverted group-hover:border-dashed">
            {"</>"}
          </span>
        )}
        {locale === "zh-CN" && (
          <span className="rounded-md border bg-skin-accent p-1 text-xs uppercase text-skin-inverted group-hover:border-dashed">
            中
          </span>
        )}
      </a>
      {isTranslated && (
        <div className="inline-flex gap-2 text-skin-accent">
          <span className="select-none">·</span>
          <a
            className="rounded-md border p-1 text-xs uppercase hover:border-dashed"
            href={
              locale === "en-GB" ? href + "-zhcn" : href.replace("-zhcn", "")
            }
          >
            {locale === "en-GB" ? "中" : "EN"}
          </a>
        </div>
      )}
      <Datetime datetime={pubDatetime} slug={`${postSlug}-time`} />
      {showDescription ? <p>{description}</p> : ""}
    </li>
  );
}
