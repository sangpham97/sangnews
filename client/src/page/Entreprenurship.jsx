import CategoryContent from '../components/CetegoryContent'
import { Entreprenership } from '../utils'
import Seo from '../components/Seo'
import useFetch from '../components/FetchData'

export default function Entreprenurship() {
  const {
    data: EntrepNews,
    loading,
    error,
  } = useFetch('/api/news/Types/entrepreneurship')
  return (
    <>
      <Seo
        title='Entrepreneurship'
        description='Credit Bank, which offers loans to people without credit score, has raised $15M'
      />
      <div className='max-w-screen-xl mx-auto'>
        {loading && <p>{loading}</p>}
        {error && <p>{error}</p>}
        {EntrepNews && (
          <CategoryContent title='entrepreneurship' Data={EntrepNews} />
        )}
      </div>
    </>
  )
}
