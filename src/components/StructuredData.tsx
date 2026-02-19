import { Helmet } from 'react-helmet-async'

const StructuredData = () => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'EntertainmentBusiness',
    name: 'Fun Rent',
    description: 'Firma event planningowa zajmująca się wynajmem sprzętu, animacjami dla dzieci i dorosłych oraz kompleksową obsługą eventów',
    url: 'https://funrent.pl',
    telephone: '+48123456789',
    email: 'kontakt@funrent.pl',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Podkarpacie',
      addressCountry: 'PL',
    },
    areaServed: {
      '@type': 'State',
      name: 'Podkarpacie',
    },
    logo: 'https://funrent.pl/logo.png',
    sameAs: [
      'https://instagram.com',
      'https://facebook.com',
    ],
    priceRange: '$$',
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  )
}

export default StructuredData
