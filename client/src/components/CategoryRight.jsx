import { Link, useHistory } from 'react-router-dom'
import useFetch from './FetchData'
import setupTags from './SetUpTags'

export default function CategoryRight({ DataRight }) {
  const { data: AllNews } = useFetch('/api/news')

  return (
    <div className='mt-2'>
      <img
        src='https://websitedemos.net/business-magazine-04/wp-content/uploads/sites/911/2021/07/tall-ad-02.png'
        alt=''
      />
      <h5 className='text-gray-500 uppercase my-4 font-bold'>Recent Posts</h5>
      <ul className='leading-normal space-y-3'>
        {DataRight.map((item, i) => {
          return (
            <li>
              <Link
                key={i}
                className='hover:text-red-500 cursor-pointer'
                to={`/${item.type}/${item._id}`}
              >
                {item.title}
              </Link>
            </li>
          )
        })}
      </ul>
      {AllNews && <TagsList Data={AllNews} />}
    </div>
  )
}

export const TagsList = ({ Data }) => {
  const newTags = setupTags(Data)
  const history = useHistory()

  const Redirect = (link) => {
    history.push(link)
  }

  return (
    <>
      <h5 className='text-gray-500 uppercase my-4 font-bold'>Categories</h5>
      <ul className='leading normal capitalize space-y-2'>
        {newTags.map((tag, i) => {
          const [text, value] = tag
          return (
            <li
              key={i}
              onClick={() => Redirect(`/${text}`)}
              className='cursor-pointer hover:text-red-500'
            >
              {text} ({value})
            </li>
          )
        })}
      </ul>
    </>
  )
}
