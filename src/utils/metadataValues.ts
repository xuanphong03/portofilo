import {ENV_ROBOTS} from '@/src/ config-global.env'

/* eslint-disable @typescript-eslint/no-explicit-any */
export default function metadataValues(res: any, domain: string) {
  if (!res) {
    return {
      metadataBase: new URL(domain),
      title: 'Portfolio - Nguyen Xuan Phong',
      description:
        'Nguyen Xuan Phong - Final-year student at Thang Long University, passionate about Frontend with React, Next.js & Tailwind CSS. Aspiring Fullstack Developer.',
      alternates: {
        canonical: domain,
      },
      authors: [{name: 'Nguyen Xuan Phong', url: domain}],
      robots: 'index, follow',
      schema: null,
    }
  }

  const result = res

  // Chuẩn hóa Open Graph Images
  const ogImages: any[] = []
  if (result?.openGraph?.image?.url) {
    ogImages.push({
      url: result.openGraph.image.url,
      width: result.openGraph.image.width ? Number(result.openGraph.image.width) : 1200,
      height: result.openGraph.image.height ? Number(result.openGraph.image.height) : 630,
      alt: result.openGraph.image.alt || result.title || 'Portfolio - Nguyen Xuan Phong',
    })
  }

  // Chuẩn hóa Twitter Images
  let twitterImages: any[] = []
  if (result?.twitter?.image) {
    if (Array.isArray(result.twitter.image)) {
      twitterImages = result.twitter.image.map((url: string) => ({url}))
    } else {
      twitterImages.push({url: result.twitter.image})
    }
  }

  // Fallback ảnh mặc định nếu không có
  if (ogImages.length === 0) {
    ogImages.push({
      url: '/screenshot.png',
      width: 1200,
      height: 630,
      alt: 'Portfolio - Nguyen Xuan Phong',
    })
  }
  if (twitterImages.length === 0) {
    twitterImages.push({
      url: '/screenshot.png',
    })
  }

  return {
    metadataBase: new URL(domain),
    title: result?.title || 'Portfolio - Nguyen Xuan Phong',
    description:
      result?.description ||
      'Nguyen Xuan Phong - Final-year student at Thang Long University, passionate about Frontend with React, Next.js & Tailwind CSS. Aspiring Fullstack Developer.',
    alternates: {
      canonical: domain,
    },
    authors: [{name: 'Nguyen Xuan Phong', url: domain}],
    robots: ENV_ROBOTS === 'FALSE' ? 'noindex, nofollow' : 'index, follow',
    schema: result?.schema || null, // <-- Truyền xuống component để render JSON-LD
    openGraph: {
      title: result?.openGraph?.title || result?.title || 'Portfolio - Nguyen Xuan Phong',
      description:
        result?.openGraph?.description ||
        result?.description ||
        'Nguyen Xuan Phong - Final-year student at Thang Long University, passionate about Frontend with React, Next.js & Tailwind CSS. Aspiring Fullstack Developer.',
      url: domain,
      siteName: result?.openGraph?.siteName || 'Portfolio - Nguyen Xuan Phong',
      images: ogImages,
      locale: result?.openGraph?.locale || 'en_US',
      type: result?.openGraph?.type || 'website',
    },
    twitter: {
      card: result?.twitter?.card || 'summary_large_image',
      title: result?.twitter?.title || result?.title || 'Portfolio - Nguyen Xuan Phong',
      description:
        result?.twitter?.description ||
        result?.description ||
        'Nguyen Xuan Phong - Final-year student at Thang Long University, passionate about Frontend with React, Next.js & Tailwind CSS. Aspiring Fullstack Developer.',
      creator: '@nguyenxuanphong', // nếu bạn có Twitter handle thì thay vào
      images: twitterImages,
      label1: result?.twitter?.label1,
      data1: result?.twitter?.data1,
      label2: result?.twitter?.label2,
      data2: result?.twitter?.data2,
      misc: result?.twitter_misc,
    },
  }
}
