import { type Options } from "rehype-pretty-code";
import codeTheme from "./moonlight-ii.json";

export const rehypePrettyCodeOptions: Partial<Options> = {
  // or import a custom theme
  theme: JSON.parse(codeTheme),
};
