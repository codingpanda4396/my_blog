import type { Metadata } from "next";
import Link from "next/link";
import { PostCard } from "@/components/PostCard";
import { Tag } from "@/components/Tag";
import { siteConfig } from "@/lib/config";
import { getAllPosts, getAllTags } from "@/lib/posts";

export const metadata: Metadata = {
  title: "首页",
  description: siteConfig.description,
};

export default function HomePage() {
  const posts = getAllPosts();
  const latestPosts = posts.slice(0, 3);
  const tags = getAllTags();

  return (
    <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
      <section className="max-w-3xl">
        <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
          THINKING / LEARNING / BUILDING
        </p>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50 sm:text-6xl">
          把学习、产品和工程经验，写成可以反复使用的判断。
        </h1>
        <p className="mt-6 text-lg leading-9 text-zinc-600 dark:text-zinc-300">
          这里记录 AI 学习、个人知识系统、项目复盘、产品思维和技术实践。文章不追热点，
          更关注那些能在长期工作中持续复利的方法。
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/posts"
            className="inline-flex rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
          >
            阅读文章
          </Link>
          <Link
            href="/about"
            className="inline-flex rounded-md border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-800 hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-100 dark:hover:border-zinc-500"
          >
            关于本站
          </Link>
        </div>
      </section>

      <section className="mt-20">
        <div className="flex items-end justify-between gap-4 border-b border-zinc-200 pb-5 dark:border-zinc-800">
          <div>
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Latest</p>
            <h2 className="mt-1 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
              最新文章
            </h2>
          </div>
          <Link
            href="/posts"
            className="text-sm font-medium text-zinc-600 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-300 dark:hover:text-zinc-50"
          >
            全部文章
          </Link>
        </div>
        <div>
          {latestPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-xl font-semibold text-zinc-950 dark:text-zinc-50">主题标签</h2>
        <div className="mt-5 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag.name} name={tag.name} count={tag.count} />
          ))}
        </div>
      </section>
    </div>
  );
}
