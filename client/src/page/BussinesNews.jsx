import CategoryContent from '../components/CetegoryContent'
// import { businessNews } from '../utils'
import Seo from '../components/Seo'
import useFetch from '../components/FetchData'

export default function BussinesNews() {
  const {
    data: Bussiness,
    loading,
    error,
  } = useFetch('/api/news/Types/business news')

  return (
    <>
      <Seo title='Bussiness News Archives' description='bussiness news ' />
      <div className='max-w-screen-xl mx-auto'>
        {loading && <p>{loading}</p>}
        {error && <p>{error}</p>}
        {Bussiness && (
          <CategoryContent title='bussines news' Data={Bussiness} />
        )}
      </div>
    </>
  )
}
