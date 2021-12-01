import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from './FetchData'
import FormatDate from './FormatDate'

export default function NewArticle() {
  const { data: News, loading, error } = useFetch('/api/news')

  return (
    <div className='mb-14'>
      {loading && <p>{loading}</p>}
      {error && <p>{error}</p>}
      {News && <SingleArticle item={News[News.length - 1]} />}
    </div>
  )
}

export const SingleArticle = ({ item }) => {
  return (
    <>
      {item && (
        <Link className='mb-10' to={`/${item.type}/${item._id}`}>
          <div className='flex justify-center relative mb-3'>
            <div
              className='absolute top-0 right-0 left-0 bottom-0 '
              style={{ backgroundColor: 'rgba(0, 0, 0, 0.4)' }}
            ></div>
            <img src={item.img} alt='' className='w-full ' />
            <div className='absolute bottom-0 md:max-w-screen-lg left-0 md:p-7 sm:p-3 p-1 z-20'>
              <span className='bg-white text-sm uppercase text-red-700 p-1'>
                {item.type}
              </span>
              <h3 className='font-serif text-xl sm:text-3xl md:text-5xl text-white capatilize font-bold mt-5 leading-tight'>
                {item.title}
              </h3>
              <span className='text-xs text-gray-300 my-3 capitalize'>
                {FormatDate(item.createdAt)}
              </span>
              <p className='mt-2 text-white text-sm'>{item.desc}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  )
}
