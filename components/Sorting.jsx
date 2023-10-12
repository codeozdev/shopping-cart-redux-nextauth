export default function Sorting({ setSort }) {
  return (
    <div className='p-5 flex items-center justify-end'>
      <select
        name=''
        id=''
        className='bg-white py-3 px-5'
        onChange={(e) => setSort(e.target.value)}>
        <option value='inc'>Increment</option>
        <option value='dec'>Decrement</option>
      </select>
    </div>
  )
}
