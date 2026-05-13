import type { Metadata } from "next"
import { Contact } from "@/components/home/Contact"
import { DoingNow } from "@/components/home/DoingNow"
import { FeaturedPosts } from "@/components/home/FeaturedPosts"
import { HeroSection } from "@/components/home/HeroSection"
import { Timeline } from "@/components/home/Timeline"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-5xl px-5">
      <HeroSection />
      <DoingNow />
      <Timeline />
      <FeaturedPosts />
      <Contact />
    </div>
  )
}
