import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col items-start px-5 py-24">
      <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
        404
      </p>
      <h1 className="mt-5 text-4xl font-semibold text-zinc-950 dark:text-zinc-50">
        这篇内容暂时不存在
      </h1>
      <p className="mt-5 leading-8 text-zinc-600 dark:text-zinc-300">
        可能是链接已经移动，也可能是文章还在草稿里。你可以回到文章列表继续阅读。
      </p>
      <Link
        href="/posts"
        className="mt-8 inline-flex rounded-md bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-zinc-50 dark:text-zinc-950 dark:hover:bg-zinc-200"
      >
        返回文章列表
      </Link>
    </div>
  );
}
