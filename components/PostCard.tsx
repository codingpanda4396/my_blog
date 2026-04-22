import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import { Tag } from "@/components/Tag";

type PostCardProps = {
  post: PostMeta;
};

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="group border-b border-zinc-200 py-8 last:border-b-0 dark:border-zinc-800">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div className="max-w-2xl">
          <time className="text-sm text-zinc-500 dark:text-zinc-400" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <h2 className="mt-3 text-2xl font-semibold leading-snug text-zinc-950 dark:text-zinc-50">
            <Link href={`/posts/${post.slug}`} className="underline-offset-4 group-hover:underline">
              {post.title}
            </Link>
          </h2>
          <p className="mt-3 leading-8 text-zinc-600 dark:text-zinc-300">
            {post.description}
          </p>
        </div>
        <Link
          href={`/posts/${post.slug}`}
          className="text-sm font-medium text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
        >
          阅读
        </Link>
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Tag key={tag} name={tag} />
        ))}
      </div>
    </article>
  );
}
