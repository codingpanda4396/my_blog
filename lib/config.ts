export const siteConfig = {
  url:
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://blog.pandaprivate.top",
  name:
    process.env.SITE_NAME ||
    process.env.NEXT_PUBLIC_SITE_NAME ||
    "熊猫",
  description:
    process.env.SITE_DESCRIPTION ||
    "技术 × 哲学 × 商业 × AI — 西北大学学生，正在探索 AI、教育科技、校园商业与人的成长。",
};

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
