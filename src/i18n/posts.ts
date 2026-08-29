import { getCollection } from "astro:content";
import { LANGS, localizePath, type Lang } from "./ui";

export type PostPaths = Record<Lang, string>;

/** Maps every post to the URL of its counterpart in each language, so switching
 *  language on a post lands on the translation instead of a 404. A post with no
 *  translation falls back to that language's blog index. */
export async function postPathsByKey(): Promise<Map<string, PostPaths>> {
  const posts = await getCollection("blog");
  const map = new Map<string, PostPaths>();

  for (const post of posts) {
    const key = post.data.translationKey;
    const entry =
      map.get(key) ??
      (Object.fromEntries(LANGS.map((l) => [l, localizePath("/blog", l)])) as PostPaths);
    entry[post.data.lang] = localizePath(`/blog/${post.slug}`, post.data.lang);
    map.set(key, entry);
  }

  return map;
}

export const postsFor = async (lang: Lang) =>
  (await getCollection("blog", ({ data }) => data.lang === lang)).sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf(),
  );
