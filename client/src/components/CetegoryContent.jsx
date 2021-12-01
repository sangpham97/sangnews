import CategoryLeft from './CategoryLeft'
import CategoryRight from './CategoryRight'

export default function CetegoryContent({ title, Data }) {
  // console.log(Data)
  return (
    <>
      <div className='grid grid-cols-1 md:grid-cols-12 gap-2'>
        <div className='col-span-9 md:pr-32'>
          <CategoryLeft title={title} DataLeft={Data} />
        </div>
        <div className='col-span-3'>
          <CategoryRight DataRight={Data} />
        </div>
      </div>
    </>
  )
}
