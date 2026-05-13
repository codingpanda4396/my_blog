import { projects } from "@/content/homepage"

const defaultProjects = [
  {
    name: "校园本地生活项目",
    description: "帮助西北大学周边商家获得学生用户，探索校园本地生活增长模型。",
    link: undefined as string | undefined,
  },
  {
    name: "AI 学习工作流",
    description: "探索大模型时代的人机协同学习，构建个人 AI 学习系统。",
    link: undefined as string | undefined,
  },
  {
    name: "NovelOps",
    description: "AI 辅助小说工业化生成实验，探索内容生产新范式。",
    link: undefined as string | undefined,
  },
]

export function DoingNow() {
  const displayProjects = projects.length > 0 ? projects : defaultProjects

  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-20">
      <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
        DOING NOW
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
        我正在做什么
      </h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {displayProjects.map((project) => (
          <div
            key={project.name}
            className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-zinc-400 dark:border-zinc-800 dark:hover:border-zinc-600"
          >
            <h3 className="text-base font-semibold text-zinc-950 dark:text-zinc-50">
              {project.name}
            </h3>
            <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-300">
              {project.description}
            </p>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-sm text-zinc-500 underline-offset-4 hover:text-zinc-950 hover:underline dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                了解更多 →
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
