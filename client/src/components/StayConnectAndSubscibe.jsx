import SocialLinks from './SocialLinks'

export default function StayConnectAndSubscibe() {
  return (
    <div
      id='subcribe'
      className='grid grid-cols-1 md:grid-cols-2 gap-4 pb-3 mt-10 mx-auto max-w-screen-xl'
    >
      <div className='col-span-1 '>
        <StayConnect />
      </div>
      <div className='col-span-1'>
        <Subcribe />
      </div>
    </div>
  )
}

export const StayConnect = () => {
  return (
    <div className='mt-5 pt-5 border-t-2 border-gray-300 space-y-6'>
      <h4 className='text-2xl md:text-5xl font-bold uppercase font-serif'>
        stay connected
      </h4>
      <SocialLinks bottom={true} />
    </div>
  )
}

export const Subcribe = () => {
  return (
    <div className='mt-5 pt-5 border-t-2 border-gray-300 space-y-6'>
      <h4 className='md:text-5xl text-2xl font-bold uppercase font-serif'>
        subscribe
      </h4>
      <form className='flex justify-between items-center'>
        <input
          type='email'
          placeholder='Email Adress'
          className='flex-1 border border-gray-400 mr-2 py-3 pr-10 pl-2 '
        />
        <button className='font-semibold text-white uppercase px-2 md:text-md py-3 md:px-9 rounded-sm bg-yellow-600 hover:bg-red-600'>
          subscribe
        </button>
      </form>
    </div>
  )
}
