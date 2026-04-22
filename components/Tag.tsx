import Link from "next/link";

type TagProps = {
  name: string;
  count?: number;
  href?: string;
};

export function Tag({ name, count, href }: TagProps) {
  return (
    <Link
      href={href || `/posts?tag=${encodeURIComponent(name)}`}
      className="inline-flex items-center rounded-full border border-zinc-200 px-3 py-1 text-xs text-zinc-600 hover:border-zinc-400 hover:text-zinc-950 dark:border-zinc-800 dark:text-zinc-300 dark:hover:border-zinc-600 dark:hover:text-zinc-50"
    >
      {name}
      {typeof count === "number" ? (
        <span className="ml-1 text-zinc-400 dark:text-zinc-500">{count}</span>
      ) : null}
    </Link>
  );
}
