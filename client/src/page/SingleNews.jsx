import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../components/FetchData'

export default function SingleNews() {
  const { id } = useParams()

  const { data, error, loading } = useFetch('/api/news/' + id)

  const { data: PostComments } = useFetch('/api/comments/' + id)

  return (
    <>
      {error && <p>{error}</p>}
      {loading && <p>{loading}</p>}
      {data && (
        <div className=' max-w-screen-lg mt-10 mx-auto '>
          <div className=' p-16 space-x-2 bg-gray-200'>
            <img src={data.img} alt='' className='rounded-sm' />
            <div className='space-y-3'>
              <h4 className='text-2xl uppercase mt-5 mb-2 font-semibold'>
                {data.title}
              </h4>
              <a className=' capitalize' href='#comment'>
                leave a comment / {data.type}
              </a>
              <p className='text-gray-600'>{data.desc}</p>
            </div>
          </div>

          {PostComments && <AllComments PostComments={PostComments} />}

          <Comments id={id} />
        </div>
      )}
    </>
  )
}

export const Comments = ({ id }) => {
  const [email, setEmail] = useState(null)
  const [username, setUser] = useState(null)
  const [text, setText] = useState(null)

  const SendComment = async (e) => {
    e.preventDefault()
    await axios.post('/api/comments', {
      email,
      username,
      text,
      postId: id,
    })
    location.reload()
  }

  return (
    <form
      className=' p-16 space-y-3 bg-gray-200 mt-20'
      onSubmit={SendComment}
      id='comment'
    >
      <h4 className=' capitalize font-bold text-lg'>leave a comment</h4>
      <p className='text-gray-600 tracking-normal'>
        Your email address will not be published. Required fields are marked *
      </p>
      <textarea
        placeholder='Type here...'
        className='w-full h-48 p-3 border-2 border-gray-300'
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <div className='flex space-x-4'>
        <input
          type='name'
          placeholder='Name'
          className='flex-1 p-3 border-2 border-gray-300'
          onChange={(e) => setUser(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          className='flex-1 p-3 border-2 border-gray-300'
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className='mt-6'>
        <button
          type='submit'
          className='p-3 bg-red-500 text-white flex items-center justify-center'
        >
          <span>Submit</span>
          <i className='fas fa-sort-up ml-2 text-xl'></i>
        </button>
      </div>
    </form>
  )
}

export const AllComments = ({ PostComments }) => {
  return (
    <>
      {PostComments.length > 0 && (
        <div className='mx-auto max-w-screen-lg bg-gray-200 mt-10 p-5 space-y-1'>
          {PostComments.map((item) => (
            <SingleComment item={item} key={item._id} />
          ))}
        </div>
      )}
    </>
  )
}

export const SingleComment = ({ item }) => {
  return (
    <div className='shadow-md bg-white p-3 space-y-1'>
      <h4 className='text-lg font-bold'>{item.username}</h4>
      <h5 className='text-md text-gray-700'>{item.email}</h5>
      <p className='text-gray-800'>{item.text}</p>
    </div>
  )
}
