import { Navigation } from '../utils'
import SocialLinks from './SocialLinks'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Navbar() {
  const [toggle, setToggle] = useState(false)
  const [openSearch, setOpenSearch] = useState(false)

  return (
    <header>
      <nav className='py-8 border-b-2 border-gray-200'>
        <div className='max-w-screen-xl mx-auto flex items-center justify-between'>
          <div className='hidden lg:block'>
            <SocialLinks />
          </div>
          <div>
            <img
              src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/logo-regular.png'
              alt=''
              className=''
            />
          </div>
          <div className='flex max-w-sm'>
            <div className='lg:flex lg:items-center lg:justify-center lg:space-x-5 hidden '>
              <a
                className='text-red-600 uppercase font-semibold text-xs'
                href='#subcribe'
              >
                subscribe
              </a>
              <p className='capitalize'>log in</p>
              {openSearch ? (
                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Search...'
                    className='p-2 absolute -top-2 right-7 border border-gray-300'
                  />
                  <i
                    className='fas fa-search text-red-600 '
                    onClick={() => setOpenSearch(!openSearch)}
                  ></i>
                </div>
              ) : (
                <i
                  className='fas fa-search text-red-600'
                  onClick={() => setOpenSearch(!openSearch)}
                ></i>
              )}
            </div>
          </div>
          <div
            className='block lg:hidden text-lg text-red-500'
            onClick={() => setToggle(true)}
          >
            <i className='fas fa-bars '></i>
          </div>
        </div>
      </nav>
      <div className='my-8 pb-8 border-gray-200 border-b-2 hidden lg:block'>
        <ul className='font-serif flex space-x-7 mx-auto max-w-screen-lg justify-center items-center'>
          {Navigation.map((item, i) => (
            <Navigate item={item} key={i} />
          ))}
        </ul>
      </div>
      <div className='w-full'>
        <MobileMenu toggle={toggle} setToggle={setToggle} />
      </div>
    </header>
  )
}

export const Navigate = ({ item }) => {
  const location = useLocation()

  const handleActive = (path) => {
    if (path === location.pathname) {
      return 'text-red-600'
    } else {
      return null
    }
  }
  return (
    <li>
      <Link to={item.link} className={handleActive(item.link)}>
        <h4 className='text-xl font-bold capitalize '>{item.name}</h4>
      </Link>
    </li>
  )
}

export const MobileMenu = ({ toggle, setToggle }) => {
  return (
    <ul
      className={
        toggle
          ? 'space-x-1 fixed top-0 w-3/5 right-0 bg-white z-20 h-full transition duration-300 ease-in'
          : 'fixed -right-64 '
      }
    >
      <div
        className='flex justify-end cursor-pointer mr-5 mt-5'
        onClick={() => setToggle(false)}
      >
        <i className='fas fa-times text-xl text-red-600 '></i>
      </div>
      {Navigation.map((item, i) => (
        <Link to={item.link} onClick={() => setToggle(false)}>
          <li
            key={i}
            className='text-lg capitalize border-b-2 border-gray-300 pl-4 '
          >
            {item.name}
          </li>
        </Link>
      ))}
      <div className='pl-3 space-y-2 mt-2'>
        <a
          className='text-red-600 uppercase font-semibold text-xs'
          href='#subcribe'
          onClick={() => setToggle(false)}
        >
          subscribe
        </a>
        <SocialLinks />
      </div>
    </ul>
  )
}
