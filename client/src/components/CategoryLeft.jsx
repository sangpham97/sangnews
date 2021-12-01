import { Link } from 'react-router-dom'
import CategoryTitle from './CategoryTitle'

export default function CategoryLeft({ title, DataLeft }) {
  return (
    <>
      <CategoryTitle>{title}</CategoryTitle>
      {DataLeft.map((item, i) => (
        <SinglePost item={item} key={i} />
      ))}
    </>
  )
}

export const SinglePost = ({ item }) => {
  return (
    <Link className='mt-10' to={`/${item.type}/${item._id}`}>
      <div className='space-y-3 pb-10'>
        <img src={item.img} alt='' />
        <h4 className='text-xl md:text-3xl uppercase text-gray-700 italic font-bold font-serif'>
          {item.title}
        </h4>
        <p className='capitalize'> {item.type} / Leave a comment</p>
        <p className='text-gray-500'>{item.desc}</p>
      </div>
    </Link>
  )
}
