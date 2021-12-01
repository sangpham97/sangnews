import CategoryContent from '../components/CetegoryContent'
import useFetch from '../components/FetchData'
import Seo from '../components/Seo'

export default function StartUps() {
  const {
    data: startups,
    loading,
    error,
  } = useFetch('/api/news/Types/startups')
  return (
    <>
      <Seo
        title='Start ups'
        description='The biggest shifts and trends driving short- and long-term growth in the future'
      />
      <div className='max-w-screen-xl mx-auto'>
        {loading && <p>{loading}</p>}
        {error && <p>{error}</p>}
        {startups && <CategoryContent title='start ups' Data={startups} />}
      </div>
    </>
  )
}
