import { FooterInfo } from '../utils'

export default function Footer() {
  return (
    <footer className=' mt-14 py-5 border-t-2 border-gray-200'>
      <div className='mx-auto max-w-screen-xl grid grid-cols-1 md:grid-cols-4'>
        <div className='mb-5 md:mb-0 flex flex-col items-center justify-center md:block  md:text-left text-center'>
          <img
            src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/logo-regular.png'
            alt=''
          />
        </div>
        {FooterInfo.map((item, i) => (
          <SingleItem item={item} key={i} />
        ))}
      </div>
    </footer>
  )
}

export const SingleItem = ({ item }) => {
  return (
    <div className='mb-3 md:mb-0 space-y-3 flex flex-col items-center justify-center md:block  md:text-left text-center'>
      <h5 className='text-gray-500 uppercase font-bold text-lg font-serif'>
        {item.name}
      </h5>
      <ul className='space-y-1'>
        {item.links.map((link, i) => {
          return (
            <li
              key={i}
              className='leading-normal capitalize text-sm hover:text-red-600 cursor-pointer'
            >
              {link}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
