import { categories } from '../utils'
import Title from './Title'
import Button from './Button'
import { Link } from 'react-router-dom'

export default function Categories() {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <Title>categories</Title>
      <div className='grid grid-cols-4 gap-6 my-10'>
        {categories.map((item, i) => (
          <Category item={item} key={i} />
        ))}
      </div>
      <Magazine />
    </div>
  )
}

export const Category = ({ item }) => {
  return (
    <div className='col-span-4 md:col-span-2 lg:col-span-1'>
      <div className='relative flex justify-center'>
        <img src={item.img} alt={item.type} className='h-96' />
        <Link
          to={item.type}
          className='bg-white text-2xl cursor-pointer uppercase p-1 text-red-400 font-serif absolute top-1/2'
        >
          {item.type}
        </Link>
      </div>
    </div>
  )
}

export const Magazine = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 gap-3 my-24'>
      <div className='col-span-4 flex justify-center'>
        <img
          src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/magazine-cover.jpg'
          alt=''
        />
      </div>
      <div className='col-span-8 flex justify-center flex-col p-10 space-y-6'>
        <span className='uppercase text-red-500 text-md font-semibold '>
          july, 2021
        </span>
        <h4 className='text-4xl uppercase font-bold '>
          Download Biz360 E-Magazine
        </h4>
        <h5 className='text-2xl text-gray-500  font-bold'>
          Get the latest issue of our eMagazine lorem ipsum dolor sit amet,
          consectetur adipisicing elit.
        </h5>
        <div>
          <Button>dowload</Button>
        </div>
      </div>
    </div>
  )
}
