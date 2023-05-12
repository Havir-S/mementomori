import React from 'react'

function InitialChoice({toggleInitialChoice, setVisualize}) {
  return (
    <div className='flex flex-col md:flex-row sm:text-3xl lg:text-5xl fadeIn  justify-center items-center gap-24 lg:gap-129 xl:gap-130 mx-auto fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:static md:translate-x-0 md:translate-y-0 md:mt-56 px-10'>
        <div onClick={() => {toggleInitialChoice(false); setVisualize('year')}} className='transform transition-all shadow-sm hover:scale-105 hover:shadow-2xl duration-100 select-none relative cursor-pointer fadeFromRight p-5 text-center w-96 h-fit  bg-gray-900 border-2 border-gray-300 rounded-lg text-white font-milonga'>
            Show me the time left in this <span className='text-red-400'>year</span>.
        </div>

        <div onClick={() => {toggleInitialChoice(false); setVisualize('time')}} className='transform transition-all shadow-sm hover:scale-105 hover:shadow-2xl duration-100 select-none relative cursor-pointer fadeFromLeft p-5 text-center w-96 h-fit bg-gray-900 border-2 border-gray-300 rounded-lg text-white font-milonga'>
            Show me how much <span className='text-red-400'>time I have lived</span>.
        </div>


    </div>
  )
}

export default InitialChoice