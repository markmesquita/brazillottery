import Head from 'next/head'
import { META_CONFIG } from '../config/meta'

interface CustomHeadProps {
  title?: string
  description?: string
  image?: string
  url?: string
}

const CustomHead: React.FC<CustomHeadProps> = ({
  title = META_CONFIG.title,
  description = META_CONFIG.description,
  image = META_CONFIG.image,
  url = META_CONFIG.url
}) => {
  const fullImageUrl = `${META_CONFIG.url}${image}`

  return (
    <Head>
      {/* Meta tags básicas */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={META_CONFIG.keywords} />
      <meta name="author" content={META_CONFIG.author} />
      <meta name="robots" content="index, follow" />

      {/* Favicon */}
      <link rel="icon" type="image/png" href="/img/icon.png" />
      <link rel="apple-touch-icon" href="/img/icon.png" />

      {/* PWA Manifest */}
      <link rel="manifest" href="/manifest.json" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:site_name" content={META_CONFIG.siteName} />
      <meta property="og:locale" content="pt_BR" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />
      <meta property="twitter:creator" content={META_CONFIG.twitterHandle} />

      {/* WhatsApp e outros apps */}
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:type" content="image/png" />

      {/* PWA */}
      <meta name="theme-color" content="#1f2937" />
      <meta name="msapplication-TileColor" content="#1f2937" />
      <meta name="msapplication-TileImage" content="/img/icon.png" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href={url} />
    </Head>
  )
}

export default CustomHead 