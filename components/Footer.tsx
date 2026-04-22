import { siteConfig } from "@/lib/config";

export function Footer() {
  return (
    <footer className="border-t border-zinc-200/70 dark:border-zinc-800/80">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-10 text-sm text-zinc-500 dark:text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} {siteConfig.name}</p>
        <p>写作是把经验沉淀成可复用的判断。</p>
      </div>
    </footer>
  );
}
