import { constructMetadata } from "@/lib/metadata"
import { type Metadata } from "next"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const { default: Post } = await import(
    `@/content/english-study-promax/${slug}.md`
  )

  return <Post />
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params

  try {
    // Import file mdx để lấy biến metadata mà remark-mdx-frontmatter đã tạo ra
    const { metadata } = await import(
      `@/content/english-study-promax/${slug}.md`
    )

    return constructMetadata(metadata)
  } catch (_error) {
    return { title: "Not Found" }
  }
}

export function generateStaticParams() {
  return [{ slug: "at-on-in-(time)" }]
}

export const dynamicParams = false
