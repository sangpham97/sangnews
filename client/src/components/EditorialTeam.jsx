import { editorialTeam } from '../utils'
import Title from './Title'

export default function EditorialTeam() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 gap-1 my-10'>
      <div className='col-span-1'>
        <Title>editorial team</Title>
      </div>
      <div className='col-span-3 mt-1'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2'>
          {editorialTeam.map((mem, i) => (
            <SingleMember mem={mem} key={i} />
          ))}
        </div>
      </div>
    </div>
  )
}

export const SingleMember = ({ mem }) => {
  return (
    <div className='col-span-1 space-y-3 mt-3 bt-3 border-t-4 border-red-500 py-4'>
      <div className='my-3'>
        <h4 className='text-2xl text-gray-500 uppercase font-semibold'>
          {mem.name}
        </h4>
        <p className='capitalize text-gray-500 text-sm'>{mem.job}</p>
      </div>
      <p className='text-700 underline pb-8 '>{mem.email}</p>
    </div>
  )
}
