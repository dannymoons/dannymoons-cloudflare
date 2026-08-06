
const baseUrl = 'https://dannymoons.nl'
export const defaultSchemaValues = {
  address: {
    streetAddress: 'Giek 10',
    addressLocality: 'Huizen',
    postalCode: '1276 JD',
    addressRegion: 'NH',
    addressCountry: 'Nederland',
  },
  companyDetails: {
    companyName: 'Moonsio',
    url: baseUrl,
    email: 'danny@moonsio.nl',
    phoneNumber: '0628509910',
    openingHours: [
      `Mo: 09:00-17:00`,
      `Tu: 09:00-17:00`,
      `We: 09:00-17:00`,
      `Th: 09:00-17:00`,
      `Fr: 09:00-17:00`
    ],
    priceRange: '$$',
    appointmentUrl: `${baseUrl}/contact`
  },
  areaServed: {
    type: 'AdministrativeArea',
    name: 'Nederland'
  },
  logo: {
    image: {
      srcUrl: `${baseUrl}/images/logo.png`,
      caption: 'Logo',
      height: 70,
      width: 170
    },
    url: baseUrl
  }
}
