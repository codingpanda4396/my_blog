export function Contact() {
  return (
    <section className="border-t border-zinc-200 py-16 dark:border-zinc-800 sm:py-20">
      <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
        CONTACT
      </p>
      <h2 className="mt-4 text-2xl font-semibold text-zinc-950 dark:text-zinc-50">
        联系我
      </h2>
      <div className="mt-6 max-w-xl">
        <p className="text-base leading-7 text-zinc-600 dark:text-zinc-300">
          如果你对 AI / 教育感兴趣，想聊校园商业，或交流技术与哲学，欢迎联系我。
        </p>
        <div className="mt-8 space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <span className="w-16 text-zinc-500 dark:text-zinc-400">微信</span>
            <span className="text-zinc-950 dark:text-zinc-50">ncpdxm</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-16 text-zinc-500 dark:text-zinc-400">邮箱</span>
            <a
              href="mailto:1469097070@qq.com"
              className="text-zinc-950 underline-offset-4 hover:underline dark:text-zinc-50"
            >
              1469097070@qq.com
            </a>
          </div>
          <div className="flex items-center gap-3">
            <span className="w-16 text-zinc-500 dark:text-zinc-400">公众号</span>
            <span className="text-zinc-950 dark:text-zinc-50">熊猫三棱镜</span>
          </div>
        </div>
      </div>
    </section>
  )
}
