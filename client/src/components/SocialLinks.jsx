import React from 'react'
import { Links } from '../utils'

export default function SocialLinks({ bottom }) {
  return (
    <div>
      <ul className='flex'>
        {Links.map((link, i) => (
          <SingleLink link={link} key={i} bottom={bottom} i={i} />
        ))}
      </ul>
    </div>
  )
}

export const SingleLink = ({ link, bottom, i }) => {
  return (
    <li
      className={
        bottom && i === 3
          ? 'mr-3 border-gray-800 rounded-full border px-4 py-2'
          : bottom
          ? 'mr-3 border-gray-800 rounded-full border px-3 py-2'
          : 'mr-5'
      }
    >
      <a
        href={link.navigate}
        className={bottom ? 'text-gray-800' : 'text-gray-600'}
      >
        <i className={link.icon}></i>
      </a>
    </li>
  )
}
