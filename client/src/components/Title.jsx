export default function Title({ children }) {
  return (
    <div className='mx-auto max-w-screen-xl'>
      <div className='mt-4 pt-4 border-red-500 border-t-4 lg:h-28'>
        <h4 className='text-4xl lg:text-5xl font-semibold uppercase font-serif'>
          {children}
        </h4>
      </div>
    </div>
  )
}
