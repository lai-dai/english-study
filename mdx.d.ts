import { type Metadata } from "next"
import type React from "react"

declare module "*.mdx" {
  let MDXComponent: (props: React.ComponentProps) => JSX.Element
  export default MDXComponent
  export const metadata: Metadata // Hoặc định nghĩa interface cụ thể cho metadata của bạn
}
