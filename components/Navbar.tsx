import Link from "next/link";
import { siteConfig } from "@/lib/config";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/posts", label: "文章" },
  { href: "/about", label: "关于" },
];

export function Navbar() {
  return (
    <header className="border-b border-zinc-200/70 bg-stone-50/80 backdrop-blur dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-5 py-5">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.18em] text-zinc-950 dark:text-zinc-50"
        >
          {siteConfig.name}
        </Link>
        <div className="flex items-center gap-5 text-sm text-zinc-600 dark:text-zinc-300">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="underline-offset-4 hover:text-zinc-950 hover:underline dark:hover:text-zinc-50"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
