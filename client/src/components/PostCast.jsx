// import { podcasts } from '../utils'
import { Link } from 'react-router-dom'
import useFetch from './FetchData'
import Title from './Title'

export default function PostCast() {
  const {
    data: Podcast,
    loading,
    error,
  } = useFetch('/api/news/Categories/podcasts')

  console.log(Podcast)

  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-3 mt-10'>
      <div className='col-span-1'>
        <Title>podcasts</Title>
      </div>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {Podcast && Podcast.map((item) => <PodCast item={item} key={item._id} />)}
    </div>
  )
}

export const PodCast = ({ item }) => {
  return (
    <Link
      className='col-span-1 space-y-3 mt-4'
      to={`/${item.type}/${item._id}`}
    >
      <img src={item.img} alt='' />
      <h5 className='text-sm uppercase text-red-700'>{item.type}</h5>
      <h3 className='text-2xl font-bold leading-tight'>{item.title}</h3>
      <p className='text-md text-gray-600'>{item.desc}</p>
      <p></p>
    </Link>
  )
}
