# 思想与工程笔记

一个面向生产部署的个人博客项目，基于 Next.js App Router、TypeScript、Tailwind CSS、Markdown 内容系统、Docker、Caddy 和 docker compose。目标是适合部署在单台 Linux 阿里云 ECS 上，用较低维护成本稳定输出个人文章。

## 技术栈

- Next.js App Router
- TypeScript

- Tailwind CSS
- Markdown 文件内容系统
- Docker 多阶段构建
- Caddy 反向代理和自动 HTTPS
- docker compose 一键启动

## 本地开发

安装依赖：

```bash
npm install
```

复制环境变量文件：

```bash
cp .env.example .env.local
```

启动开发服务：

```bash
npm run dev
```

打开浏览器访问：

```text
http://localhost:3000
```

## 本地构建

执行生产构建：

```bash
npm run build
```

启动生产服务：

```bash
npm run start
```

## Docker 本地验证

复制环境变量：

```bash
cp .env.example .env
```

构建并启动：

```bash
docker compose up -d --build
```

查看日志：

```bash
docker compose logs -f
```

停止服务：

```bash
docker compose down
```

本地验证 Caddy 时，如果没有真实域名，可以先临时把 `Caddyfile` 中的 `mydomain.com` 改成 `:80`，上线前再改回真实域名。

## ECS 部署步骤

1. 准备一台 Linux 阿里云 ECS，建议使用 Ubuntu 22.04 LTS 或 Debian 12。
2. 在 ECS 安全组中放行 `80` 和 `443` 端口。
3. 安装 Docker 和 Docker Compose 插件。
4. 将项目上传到 ECS，例如上传到 `/opt/blog`。
5. 在项目根目录复制环境变量：

```bash
cp .env.example .env
```

6. 修改 `.env`，把站点地址、站点名称和描述改成你的真实信息。
7. 修改 `Caddyfile`，把 `mydomain.com` 替换为你的真实域名。
8. 启动服务：

```bash
docker compose up -d --build
```

9. 查看运行状态：

```bash
docker compose ps
docker compose logs -f
```

Caddy 会在域名解析正确、80/443 端口可访问的情况下自动申请和续期 HTTPS 证书。

## 域名配置说明

上线前需要先到你的域名 DNS 控制台添加解析记录：

```text
类型：A
主机记录：@
记录值：ECS 公网 IP
```

如果你还需要 `www` 子域名，也可以添加：

```text
类型：A
主机记录：www
记录值：ECS 公网 IP
```

如果同时使用裸域名和 `www`，可以把 `Caddyfile` 改成：

```caddyfile
mydomain.com, www.mydomain.com {
    reverse_proxy app:3000
}
```

请务必确认：

- 域名 A 记录已经解析到 ECS 公网 IP。
- ECS 安全组已经放行 `80` 和 `443`。
- 服务器上没有其他服务占用 `80` 或 `443`。

## 环境变量

`.env.example` 提供了可配置项：

```env
SITE_URL=https://mydomain.com
SITE_NAME=思想与工程笔记
SITE_DESCRIPTION=记录学习方法、产品思考、技术实践与长期主义的个人博客。
NEXT_PUBLIC_SITE_URL=https://mydomain.com
NEXT_PUBLIC_SITE_NAME=思想与工程笔记
```

字段说明：

- `SITE_URL`：站点正式访问地址，用于 sitemap、robots、Open Graph。
- `SITE_NAME`：站点名称。
- `SITE_DESCRIPTION`：站点描述。
- `NEXT_PUBLIC_SITE_URL`：浏览器侧可读取的站点地址备用值。
- `NEXT_PUBLIC_SITE_NAME`：浏览器侧可读取的站点名称备用值。

## 写作说明

文章存放在：

```text
content/posts
```

每篇文章是一个 Markdown 文件，文件名就是访问路径。例如：

```text
content/posts/ai-learning.md
```

对应访问地址：

```text
/posts/ai-learning
```

文章 frontmatter 格式：

```yaml
---
title: "文章标题"
description: "文章描述"
date: "2026-04-18"
tags:
  - AI
  - 学习方法
cover: "/covers/ai-learning.svg"
draft: false
---
```

字段说明：

- `title`：文章标题，必填。
- `description`：文章摘要和 SEO 描述，必填。
- `date`：发布日期，建议使用 `YYYY-MM-DD`。
- `tags`：标签数组。
- `cover`：文章封面路径，建议放在 `public/covers`。
- `draft`：草稿状态。设置为 `true` 时不会出现在首页、文章列表、sitemap 和文章详情页中。

## SEO

项目已经内置：

- 首页 metadata
- 文章列表页 metadata
- 文章详情页动态 metadata
- About 页 metadata
- Open Graph 图片
- `/sitemap.xml`
- `/robots.txt`

上线后建议检查：

```text
https://你的域名/sitemap.xml
https://你的域名/robots.txt
```

## 常用命令

代码检查：

```bash
npm run lint
```

生产构建：

```bash
npm run build
```

Docker 部署：

```bash
docker compose up -d --build
```

查看日志：

```bash
docker compose logs -f
```

重启服务：

```bash
docker compose restart
```

停止服务：

```bash
docker compose down
```
