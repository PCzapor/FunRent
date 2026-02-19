import { Helmet } from 'react-helmet-async'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  canonical?: string
  ogImage?: string
}

const SEO = ({
  title = 'Fun Rent - Wynajem sprzętu i obsługa eventów',
  description = 'Fun Rent to firma event planningowa z pasją do tworzenia niezapomnianych chwil. Specjalizujemy się w wynajmie sprzętu eventowego, animacjach dla dzieci i dorosłych oraz kompleksowej obsłudze wydarzeń na terenie całego Podkarpacia.',
  keywords = 'wynajem sprzętu eventowego, animacje dla dzieci, obsługa eventów, Podkarpacie, fotobudka, nagłośnienie, dekoracje, wesele, urodziny',
  canonical,
  ogImage = '/og.png',
}: SEOProps) => {
  const fullTitle = title.includes('Fun Rent') ? title : `${title} | Fun Rent`
  const siteUrl = 'https://funrent.pl'
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl

  return (
    <Helmet>
      <html lang="pl" />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Fun Rent" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${siteUrl}${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content="pl_PL" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${ogImage}`} />

      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SEO
