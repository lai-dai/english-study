import { type ImageLoaderProps } from "next/image"

// lib/image-loader.js
export default function cloudinaryLoader({ src }: ImageLoaderProps) {
  const isProd = process.env.NODE_ENV === "production"
  const root = isProd ? "/english-study" : ""

  // Nếu src đã có http hoặc đã có root thì trả về luôn
  if (src.startsWith("http") || src.startsWith(root)) {
    return src
  }

  // Tự động nối thêm root vào trước chuỗi src
  return `${root}${src}`
}
