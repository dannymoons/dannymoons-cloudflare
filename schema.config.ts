
const baseUrl = ''
export const defaultSchemaValues = {
  address: {
    streetAddress: 'Straatnaam 123',
    addressLocality: 'Plaatsnaam',
    postalCode: '1234AB',
    addressRegion: 'NH',
    addressCountry: 'Nederland',
    googleMapsUrl: 'https://www.google.com/maps/place/?cid="123"'
  },
  companyDetails: {
    companyName: 'Bedrijfsnaam',
    url: baseUrl,
    email: 'info@example.com',
    phoneNumber: '06-12345678',
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
