import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { Tag } from "@/components/Tag";
import { absoluteUrl, siteConfig } from "@/lib/config";
import { formatDate } from "@/lib/utils";
import { getAllPosts, getPostBySlug } from "@/lib/posts";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "文章不存在",
    };
  }

  const url = absoluteUrl(`/posts/${post.slug}`);
  const image = absoluteUrl(post.cover);

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "article",
      locale: "zh_CN",
      url,
      siteName: siteConfig.name,
      title: post.title,
      description: post.description,
      publishedTime: post.date,
      tags: post.tags,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: [image],
    },
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="mx-auto max-w-3xl px-5 py-14 sm:py-20">
      <header>
        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Tag key={tag} name={tag} />
          ))}
        </div>
        <h1 className="mt-6 text-4xl font-semibold leading-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg leading-9 text-zinc-600 dark:text-zinc-300">
          {post.description}
        </p>
        <time className="mt-6 block text-sm text-zinc-500 dark:text-zinc-400" dateTime={post.date}>
          {formatDate(post.date)}
        </time>
        <div className="relative mt-10 aspect-[1200/630] overflow-hidden rounded-md border border-zinc-200 dark:border-zinc-800">
          <Image
            src={post.cover}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 768px"
          />
        </div>
      </header>

      <div className="prose-blog mt-12">
        <MarkdownRenderer content={post.content} />
      </div>
    </article>
  );
}
