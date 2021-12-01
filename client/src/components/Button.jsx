export default function Button({ children, type }) {
  return (
    <button
      className='px-2 py-4 bg-red-600 text-white uppercase font-bold text-md flex items-center justify-center'
      type={type}
    >
      {children}
    </button>
  )
}
