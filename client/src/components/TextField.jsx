export default function TextField({ label, type, placeholder }) {
  return (
    <div className='flex flex-col flex-1'>
      <label className='font-semibold capitalize text-md'>
        {label} <span className='text-red-600'>*</span>
      </label>
      <input
        type={type}
        className='p-3 flex-1 m-1 border-2 border-gray-200'
        placeholder={placeholder}
      />
    </div>
  )
}
