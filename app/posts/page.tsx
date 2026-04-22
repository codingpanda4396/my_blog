import type { Metadata } from "next";
import { PostCard } from "@/components/PostCard";
import { Tag } from "@/components/Tag";
import { getAllPosts, getAllTags } from "@/lib/posts";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "文章",
  description: `阅读 ${siteConfig.name} 的所有文章，包含学习方法、AI、产品思维与项目记录。`,
};

type PostsPageProps = {
  searchParams: Promise<{
    tag?: string;
  }>;
};

export default async function PostsPage({ searchParams }: PostsPageProps) {
  const params = await searchParams;
  const selectedTag = params.tag;
  const posts = getAllPosts();
  const tags = getAllTags();
  const visiblePosts = selectedTag
    ? posts.filter((post) => post.tags.includes(selectedTag))
    : posts;

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-20">
      <div className="max-w-3xl">
        <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
          POSTS
        </p>
        <h1 className="mt-5 text-4xl font-semibold text-zinc-950 dark:text-zinc-50">
          文章
        </h1>
        <p className="mt-5 text-lg leading-9 text-zinc-600 dark:text-zinc-300">
          围绕学习系统、AI 使用、产品判断与工程实践的长期记录。
        </p>
      </div>

      <div className="mt-10 flex flex-wrap gap-2">
        <Tag name="全部" count={posts.length} href="/posts" />
        {tags.map((tag) => (
          <Tag key={tag.name} name={tag.name} count={tag.count} />
        ))}
      </div>

      {selectedTag ? (
        <p className="mt-8 text-sm text-zinc-500 dark:text-zinc-400">
          当前标签：{selectedTag}
        </p>
      ) : null}

      <div className="mt-6">
        {visiblePosts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
