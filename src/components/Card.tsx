import Datetime from "./Datetime";
import type { BlogFrontmatter } from "@content/_schemas";

export interface Props {
  href?: string;
  frontmatter: BlogFrontmatter;
  secHeading?: boolean;
}

export default function Card({ href, frontmatter, secHeading = true }: Props) {
  const { title, pubDatetime, isSnippet, locale, isTranslated, tags } =
    frontmatter;
  return (
    <li className="my-6">
      <div className="inline-flex gap-2">
        <a
          href={href}
          className="group inline-flex items-center gap-2 text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
        >
          {secHeading ? (
            <h2 className="text-lg font-medium decoration-dashed group-hover:underline">
              {title}
            </h2>
          ) : (
            <h3 className="text-lg font-medium decoration-dashed group-hover:underline">
              {title}
            </h3>
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
      </div>

      <Datetime datetime={pubDatetime} />
      {/* <p>{description}</p> */}
    </li>
  );
}
