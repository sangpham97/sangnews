// import { Investments } from '../utils'
import CategoryContent from '../components/CetegoryContent'
import Seo from '../components/Seo'
import useFetch from '../components/FetchData'

export default function Invesments() {
  const {
    data: Investments,
    loading,
    error,
  } = useFetch('/api/news/Types/investments')
  return (
    <>
      <Seo title='Investments' description='investements news ' />
      <div className='max-w-screen-xl mx-auto'>
        {loading && <p>{loading}</p>}
        {error && <p>{error}</p>}
        {Investments && (
          <CategoryContent title='investment' Data={Investments} />
        )}
      </div>
    </>
  )
}
