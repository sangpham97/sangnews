import Button from '../components/Button'
import TextField from '../components/TextField'
import Title from '../components/Title'
import { Awards } from '../utils'
import Seo from '../components/Seo'

export default function Contact() {
  return (
    <div>
      <Seo
        title='Contact'
        description='Please let us know lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar. '
      />
      <div className='mx-auto max-w-screen-xl'>
        <AboutTop />
        <Award />
      </div>
    </div>
  )
}

export const AboutTop = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-12 mt-5 gap-2'>
      <div className='md:col-span-3'>
        <Title>contact us</Title>
        <p className='text-gray-600'>
          Please let us know lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar.{' '}
        </p>
      </div>
      <div className='md:col-span-9 mt-3 '>
        <form className='rounded-md shadow-md p-8 bg-white pl-3 space-y-2 max-w-screen-sm sm:ml-30 md:ml-60'>
          <div className='md:flex md:justify-between'>
            <TextField label='name' type='name' placeholder='First Name' />
            <TextField label='last' type='name' placeholder='Last Name' />
          </div>
          <div>
            <TextField
              label='email'
              type='email'
              placeholder='Your Email Address'
            />
          </div>
          <div className='flex flex-col'>
            <label className='font-semibold capitalize mb-1'>Message</label>
            <textarea
              name=''
              id=''
              cols='20'
              rows='6'
              className='border-gray-200 border-2 m-1'
            ></textarea>
          </div>
          <div className='mt-6 ml-1'>
            <Button>submit</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export const Award = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-10'>
      {Awards.map((item, i) => (
        <SingleAward item={item} key={i} />
      ))}
    </div>
  )
}

export const SingleAward = ({ item }) => {
  return (
    <div className='space-y-3'>
      <Title>{item.title}</Title>
      <p className='gray-600 leading-normal'>{item.desc}</p>
      <ul className='leading-normal text-md text-red-500'>
        {item.info.map((info, i) => {
          return (
            <li key={i} className='capitalize'>
              {info}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
