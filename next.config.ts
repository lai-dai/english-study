import createMDX from "@next/mdx"
import type { NextConfig } from "next"

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  output: "export", // Bắt buộc để deploy lên GitHub Pages
  // Optional: Add a trailing slash to generate folder structures
  // (e.g., /about becomes /about/index.html instead of /about.html)
  trailingSlash: true,
  images: {
    unoptimized: true, // GitHub Pages không hỗ trợ Image Optimization mặc định của Next.js
  },
  basePath: isProd ? "/lai-dai/english-study" : "",
  assetPrefix: isProd ? "/lai-dai/english-study" : "",
}

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
  options: {
    remarkPlugins: [
      "remark-gfm",
      "remark-frontmatter",
      ["remark-mdx-frontmatter", { name: "metadata" }],
    ],
    rehypePlugins: [],
  },
})

export default withMDX(nextConfig)
