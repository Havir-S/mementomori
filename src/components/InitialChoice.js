import React from 'react'

function InitialChoice({toggleInitialChoice, setVisualize}) {
  return (
    <div className='flex fadeIn relative justify-around gap-28 mx-auto mt-56 px-5'>
        <div onClick={() => {toggleInitialChoice(false); setVisualize('year')}} className='transform transition-all shadow-sm hover:scale-105 hover:shadow-2xl duration-100 select-none relative cursor-pointer fadeFromRight p-5 text-center w-96 h-fit darkBackground border-2 border-gray-800 rounded-md text-white text-5xl font-milonga'>
            Show me the time left in this <span className='text-red-400'>year</span>.
        </div>

        <div onClick={() => {toggleInitialChoice(false); setVisualize('time')}} className='transform transition-all shadow-sm hover:scale-105 hover:shadow-2xl duration-100 select-none relative cursor-pointer fadeFromLeft p-5 text-center w-96 h-fit darkBackground border-2 border-gray-800 rounded-md text-white text-5xl font-milonga'>
            Show me how much <span className='text-red-400'>time I have lived</span>.
        </div>


    </div>
  )
}

export default InitialChoice