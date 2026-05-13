import { timeline } from "@/content/homepage"

export function Timeline() {
  if (timeline.length === 0) {
    return (
      <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-20">
        <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
          UPDATES
        </p>
        <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
          最近进展
        </h2>
        <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
          持续更新中...
        </p>
      </section>
    )
  }

  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-20">
      <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
        UPDATES
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
        最近进展
      </h2>
      <div className="mt-8 space-y-10">
        {timeline.map((period) => (
          <div key={period.date}>
            <p className="text-sm font-semibold text-zinc-950 dark:text-zinc-50">
              {period.date}
            </p>
            <ul className="mt-3 space-y-2">
              {period.items.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-300"
                >
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-zinc-400 dark:bg-zinc-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
