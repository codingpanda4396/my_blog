import Link from "next/link"
import { featuredPosts } from "@/content/homepage"
import { getPostBySlug } from "@/lib/posts"

export function FeaturedPosts() {
  if (featuredPosts.length === 0) {
    return null
  }

  const posts = featuredPosts
    .map((slug) => getPostBySlug(slug))
    .filter(Boolean)

  if (posts.length === 0) {
    return null
  }

  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-20">
      <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
        THINKING
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
        我的思考
      </h2>
      <div className="mt-8 space-y-6">
        {posts.map((post) => post && (
          <Link
            key={post.slug}
            href={`/posts/${post.slug}`}
            className="group block"
          >
            <h3 className="text-base font-semibold text-zinc-950 group-hover:underline dark:text-zinc-50">
              {post.title}
            </h3>
            <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
              {post.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
