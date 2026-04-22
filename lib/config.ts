export const siteConfig = {
  url:
    process.env.SITE_URL ||
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://mydomain.com",
  name:
    process.env.SITE_NAME ||
    process.env.NEXT_PUBLIC_SITE_NAME ||
    "思想与工程笔记",
  description:
    process.env.SITE_DESCRIPTION ||
    "记录学习方法、产品思考、技术实践与长期主义的个人博客。",
};

export function absoluteUrl(path = "/") {
  const base = siteConfig.url.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}`;
}
