import { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import { NewsContext } from '../context/NewsContext'
import { getNews } from '../context/NewsApiCalls'
import FormatDate from './FormatDate'

export default function TrendingNews() {
  // const [TrendData, setTrendData] = useState([])

  // useEffect(() => {
  //   const getTrendNews = async () => {
  //     try {
  //       const res = await axios.get('/api/news/Categories/trending news')
  //       setTrendData(res.data)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getTrendNews()
  // }, [])

  // console.log(TrendData)

  const { dispatch, News } = useContext(NewsContext)

  useEffect(() => {
    getNews(dispatch)
  }, [dispatch])

  return (
    <div className='mt-3'>
      <Title>trending news</Title>
      <div className='mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {News.map((item, i) => (
          <TrendingNew item={item} key={i} />
        ))}
      </div>
    </div>
  )
}

export const TrendingNew = ({ item }) => {
  return (
    <Link to={`/${item.type}/${item._id}`} className='space-y-2 px-2 md:px-0'>
      <img src={item.img} alt={item.title} />
      <h6 className='text-xs text-red-500 uppercase tracking-widest'>
        {item.type}
      </h6>
      <h3 className='text-xl capatilize font-bold '>{item.title}</h3>
      <p className='text-xs text-gray-600 capitalize'>
        {FormatDate(item.createdAt)}
      </p>
    </Link>
  )
}
