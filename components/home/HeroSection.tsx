import { hero, socialLinks } from "@/content/homepage"

export function HeroSection() {
  return (
    <section className="pb-16 pt-24 sm:pb-24 sm:pt-32">
      <div className="max-w-2xl">
        <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
          {hero.tagline}
        </p>
        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-7xl">
          {hero.name}
        </h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {hero.bio}
        </p>

        <div className="mt-8">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
            目前进行中
          </p>
          <ul className="mt-3 space-y-2">
            {hero.doingNow.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-zinc-700 dark:text-zinc-200"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target={link.url.startsWith("http") ? "_blank" : undefined}
              rel={link.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-sm text-zinc-500 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
              title={link.hint}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
