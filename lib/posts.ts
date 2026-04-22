import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  title: string;
  description: string;
  date: string;
  tags: string[];
  cover: string;
  draft: boolean;
  slug: string;
};

export type Post = PostMeta & {
  content: string;
};

type RawFrontmatter = {
  title?: unknown;
  description?: unknown;
  date?: unknown;
  tags?: unknown;
  cover?: unknown;
  draft?: unknown;
};

function assertString(value: unknown, field: string, slug: string): string {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Post "${slug}" is missing required field "${field}".`);
  }

  return value;
}

function normalizeTags(value: unknown, slug: string): string[] {
  if (!Array.isArray(value) || value.some((tag) => typeof tag !== "string")) {
    throw new Error(`Post "${slug}" requires "tags" to be a string array.`);
  }

  return value;
}

function parsePost(fileName: string): Post {
  const slug = fileName.replace(/\.md$/, "");
  const fullPath = path.join(postsDirectory, fileName);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  const frontmatter = data as RawFrontmatter;

  return {
    slug,
    title: assertString(frontmatter.title, "title", slug),
    description: assertString(frontmatter.description, "description", slug),
    date: assertString(frontmatter.date, "date", slug),
    tags: normalizeTags(frontmatter.tags, slug),
    cover: assertString(frontmatter.cover, "cover", slug),
    draft: Boolean(frontmatter.draft),
    content,
  };
}

export function getAllPosts({ includeDrafts = false } = {}): Post[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  return fs
    .readdirSync(postsDirectory)
    .filter((fileName) => fileName.endsWith(".md"))
    .map(parsePost)
    .filter((post) => includeDrafts || !post.draft)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): Post | null {
  const fileName = `${slug}.md`;
  const fullPath = path.join(postsDirectory, fileName);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const post = parsePost(fileName);
  return post.draft ? null : post;
}

export function getAllTags() {
  const counts = new Map<string, number>();

  for (const post of getAllPosts()) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) || 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count || a.name.localeCompare(b.name, "zh-CN"));
}
