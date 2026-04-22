import Image from "next/image";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type MarkdownRendererProps = {
  content: string;
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        a: ({ href = "", children }) => {
          const isInternal = href.startsWith("/");
          if (isInternal) {
            return <Link href={href}>{children}</Link>;
          }

          return (
            <a href={href} target="_blank" rel="noreferrer">
              {children}
            </a>
          );
        },
        img: ({ src, alt }) => {
          const imageSrc = typeof src === "string" ? src : "";

          return (
            <Image
              src={imageSrc}
              alt={alt || ""}
              width={1200}
              height={630}
              className="rounded-md border border-zinc-200 dark:border-zinc-800"
            />
          );
        },
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
