import React from 'react'

function InputTable() {
  return (
    <div>
        <p className='font-milonga text-xl italic text-gray-600'>Each dot represents a day.</p>
        <p>I want to see days</p>
        <input placeholder='a' type="text" className='py-1 px-4 border-0 focus:outline-none' />
    </div>
  )
}

export default InputTable