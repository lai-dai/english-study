// lib/image-loader.js
export default function imageLoader({ src }) {
  const isProd = process.env.NODE_ENV === "production"
  const repoName = "english-study" // Tên repo của bạn

  // Nếu ảnh là đường dẫn tuyệt đối (http/https) thì không can thiệp
  if (src.startsWith("http")) {
    return src
  }

  // Nếu đang ở môi trường Production (GitHub Pages)
  if (isProd) {
    // Tránh việc nối trùng tên repo nếu src đã có sẵn tên repo
    const cleanSrc = src.startsWith("/") ? src : `/${src}`

    if (cleanSrc.startsWith(`/${repoName}`)) {
      return cleanSrc
    }

    return `/${repoName}${cleanSrc}`
  }

  // Ở môi trường local (dev), giữ nguyên src
  return src
}
