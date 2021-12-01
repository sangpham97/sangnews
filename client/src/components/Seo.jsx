import { Helmet } from 'react-helmet'

export default function Seo({ title, description }) {
  return (
    <Helmet
      htmlAttributes={{ lang: 'en' }}
      title={`${title} - Bussiness Magezine`}
      meta={[
        {
          name: 'description',
          content: description,
        },
      ]}
    ></Helmet>
  )
}
