import React from 'react'

function InputTable({visualize, showType, setShowType}) {

  const handleChange = (e) => {
    console.log(e.target.value)
    setShowType(e.target.value)
  }
  return (
    <div className='flex flex-col justify-around items-middle '>
        <div className='flex justify-center items-center gap-4'> 
          <span className='block'>I want to see:</span>
          <select onChange={(e) => {handleChange(e)}} className="block cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
            {visualize === 'time' && (
              <option>Years</option>
            )}
            <option>Months</option>
            <option>Days</option>
            {/* <option>Hours</option> */}
          </select>
        </div>
        <p className='font-milonga text-md italic text-white'>Each dot represents a {showType.slice(0,showType.length - 1)}.</p>
    </div>
  )
}

export default InputTable