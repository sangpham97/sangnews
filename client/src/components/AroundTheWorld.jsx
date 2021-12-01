import useFetch from './FetchData'
import { SingleArticle } from './NewArticle'
import Title from './Title'

export default function AroundTheWorld() {
  const { data: News, loading, error } = useFetch('/api/news')

  return (
    <div>
      <Title>around the world</Title>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-3 mt-10'>
        <div className='lg:col-span-9 md:col-span-8'>
          {loading && <p>{loading}</p>}
          {error && <p>{error}</p>}
          {News &&
            News.map((item) => <SingleArticle item={item} key={item._id} />)}
        </div>
        <div className='lg:col-span-3 md:col-span-4'>
          <div className='w-full'>
            <img
              src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/tall-ad-02.png'
              alt=''
              className='w-full max-h-64'
            />
          </div>
          <div className='w-full '>
            <SinglePaper />
            <SinglePaper />
          </div>
        </div>
      </div>
    </div>
  )
}

export const SinglePaper = () => {
  return (
    <div className='relative mt-2 '>
      <div
        className='absolute top-0 right-0 left-0 bottom-0'
        style={{ backgroundColor: 'rgba(0,0,0,0.4)' }}
      ></div>
      <img
        src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/blog-11.jpg'
        alt=''
        className='w-full max-h-52'
      />
      <div className='space-y-2 absolute flex flex-col justify-center top-1/4 px-2 pb-3'>
        <div>
          <span className='bg-white text-red-600 uppercase p-1'>
            investments
          </span>
        </div>
        <h5 className='text-xl font-serif text-white'>
          {' '}
          OnlineEasyPay arrives on the online shopping platform ShopOnline.com
        </h5>
        <p className='text-gray-400 text-sm uppercase'>july 1,2021</p>
      </div>
    </div>
  )
}
