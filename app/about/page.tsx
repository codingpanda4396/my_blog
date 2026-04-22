import type { Metadata } from "next";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "关于",
  description: `关于 ${siteConfig.name}：一个记录学习方法、产品思考、技术实践与长期主义的个人博客。`,
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-16 sm:py-20">
      <p className="text-sm font-medium tracking-[0.22em] text-zinc-500 dark:text-zinc-400">
        ABOUT
      </p>
      <h1 className="mt-5 text-4xl font-semibold text-zinc-950 dark:text-zinc-50">
        关于这个博客
      </h1>
      <div className="prose-blog mt-8">
        <p>
          这是一个面向长期积累的个人博客。它不追求信息流式的高频更新，
          更像是一间安静的工作室：把学习、项目、产品判断和技术实践中的经验，
          整理成可以复盘、迁移和复用的文字。
        </p>
        <p>
          我关心的问题通常很朴素：如何真正学会一个东西，如何让 AI 成为认知伙伴，
          如何在项目里做出更准确的判断，以及如何把零散经验沉淀成稳定的方法论。
        </p>
        <h2>主要写作方向</h2>
        <ul>
          <li>AI 与学习：如何用 AI 改善理解、练习、反馈和迁移。</li>
          <li>学习系统：如何构建自己的输入、处理、输出和复盘机制。</li>
          <li>项目记录：从问题、约束、取舍到最终交付的真实过程。</li>
          <li>产品思维：把用户、场景、价值和体验放回同一个判断框架里。</li>
          <li>哲学与技术：在工具越来越强的时代，重新理解人的主动性。</li>
        </ul>
        <h2>本站原则</h2>
        <p>
          少一点噪音，多一点结构；少一点观点姿态，多一点可验证的经验。
          每篇文章都尽量回答一个具体问题，并留下能被以后继续改进的空间。
        </p>
      </div>
    </div>
  );
}
