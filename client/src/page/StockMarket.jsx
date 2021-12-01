import CategoryContent from '../components/CetegoryContent'
import Seo from '../components/Seo'
import useFetch from '../components/FetchData'

export default function StockMarket() {
  const {
    data: Stocks,
    loading,
    error,
  } = useFetch('/api/news/Types/stock market')
  return (
    <>
      <Seo title='Stock Market' description='stock market news' />
      <div className='max-w-screen-xl mx-auto'>
        {loading && <p>{loading}</p>}
        {error && <p>{error}</p>}
        {Stocks && <CategoryContent title='stock market' Data={Stocks} />}
      </div>
    </>
  )
}
