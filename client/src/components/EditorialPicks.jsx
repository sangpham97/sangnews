import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import FormatDate from './FormatDate'

import Title from './Title'

export default function EditorialPicks() {
  const [Data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get('/api/news/Categories/editorial picks')
      setData(res.data)
    }
    getData()
  }, [])

  return (
    <div className='mt-10'>
      <Title>editorial picks</Title>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-4 mt-10'>
        <div className='md:col-span-4 lg:col-span-3'>
          <Left Data={Data} />
        </div>
        <div className='md:col-span-8 lg:col-span-6'>
          <Center Data={Data} />
        </div>
        <div className='md:col-span-12 lg:col-span-3'>
          <Right Data={Data} />
        </div>
      </div>
    </div>
  )
}

export const Left = ({ Data }) => {
  return (
    <div className='grid grid-cols-4 gap-3'>
      {Data.map((item, i) => (
        <LeftContent item={item} key={i} />
      ))}
    </div>
  )
}

export const LeftContent = ({ item }) => {
  return (
    <>
      <Link
        className='col-span-4 md:col-span-1'
        to={`/${item.type}/${item._id}`}
      >
        <img src={item.img} alt={item.title} />
      </Link>
      <Link
        className='col-span-4 md:col-span-3'
        to={`/${item.type}/${item._id}`}
      >
        <h4 className='font-bold text-xl capitalize leading-normal font-serif'>
          {item.title}
        </h4>
        <p className='text-sm text-gray-500 mt-2'>
          {' '}
          {FormatDate(item.createdAt)}
        </p>
      </Link>
    </>
  )
}

export const Center = ({ Data }) => {
  return (
    <div>
      <CenterTop Data={Data} />
      <CenterBot Data={Data} />
    </div>
  )
}

export const CenterTop = ({ Data }) => {
  return (
    <div>
      {Data.map((item, i) => {
        return (
          <Link
            key={i}
            className='space-y-3 mb-3'
            to={`/${item.type}/${item._id}`}
          >
            <img src={item.img} alt='' />
            <h3 className='text-2xl font-bold capatilize font-serif'>
              {item.title}
            </h3>
            <span className='text-xs text-gray-500 capitalize'>
              {FormatDate(item.createdAt)}
            </span>
            <p className='text-md text-gray-600'>{item.desc}</p>
          </Link>
        )
      })}
    </div>
  )
}

export const CenterBot = ({ Data }) => {
  return (
    <div>
      {Data.map((item, i) => {
        return (
          <Link
            className='grid grid-cols-8 gap-3 my-10'
            to={`/${item.type}/${item._id}`}
          >
            <div key={i} className='col-span-8 md:col-span-2'>
              <img src={item.img} alt={item.title} />
            </div>
            <div className='col-span-8 md:col-span-6'>
              <h3 className='text-xl font-bold capatilize font-serif'>
                {item.title}
              </h3>
              <span className='text-xs text-gray-500 capitalize'>
                {FormatDate(item.createdAt)}
              </span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}

export const Right = ({ Data }) => {
  return (
    <>
      <div className='flex items-center justify-center'>
        <img
          src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/tall-ad-001.jpg'
          alt=''
          className='lg:w-full'
        />
      </div>
      <RightBot Data={Data} />
    </>
  )
}

export const RightBot = ({ Data }) => {
  return (
    <div className='grid col-span-1 md:grid-cols-3 gap-2'>
      {Data.map((item, i) => {
        return (
          <Link
            key={i}
            className='lg:col-span-3 space-y-3 my-2'
            to={`/${item.type}/${item._id}`}
          >
            <div className='relative'>
              <img src={item.img} alt='' />
              <span className='bg-white text-sm p-1 uppercase text-red-600 absolute top-3 left-3'>
                {item.type}
              </span>
            </div>
            <h4 className='font-bold text-xl capitalize leading-normal font-serif'>
              {item.title}
            </h4>
            <span className='text-xs text-gray-500 capitalize'>
              {FormatDate(item.createdAt)}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
