import { type Metadata } from "next"

// Định nghĩa cấu trúc Frontmatter bạn thường dùng
interface MdxMetadata {
  title?: string
  description?: string
  image?: string
  date?: string
  author?: string
  [key: string]: unknown // Cho phép các trường bổ sung khác
}

export function constructMetadata(metadata: MdxMetadata): Metadata {
  return {
    title: metadata.title || "Lai Dai",
    description: metadata.description || "Lai Dai Blog",
    openGraph: {
      title: metadata.title,
      description: metadata.description,
      type: "article",
      images: metadata.image ? [{ url: metadata.image }] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.title,
      description: metadata.description,
      images: metadata.image ? [metadata.image] : [],
    },
  }
}
