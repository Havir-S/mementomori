import React from 'react'
import TimeBars from '../TimeBars'
import TimePeriodChoose from '../TimePeriodChoose'

function LeftColumn({setVisualize, visualize, todayDate, settings, handleSettings}) {
  return (
        <div className=' text-white font-milonga flex h-full flex-col gap-5  lg:w-1/3 items-center '>
              <div className='darkBackground fadeIn text-center w-full h-52 border-2 border-gray-800 rounded-md p-2'>
                <p>Visualize:</p>
                <div className='flex gap-3 px-2 flex-col align-start mt-2'>
                  <button onClick={() => {setVisualize('year')}} className={`group relative rounded-lg border-2 border-transparent hover:border-gray-500 transition-all duration-100 py-2 px-2 w-4/5 mx-auto font-milonga cursor-pointer bg-black text-md ${visualize === 'year' ? 'test' : ''}`}>
                    This Year
                    <img className='absolute h-8 top-1 left-3 transform transition duration-200 group-hover:scale-110' src={process.env.PUBLIC_URL + '/rose.svg'} alt='' />
                  </button>
                  <button onClick={() => {setVisualize('time')}} className={`group relative rounded-lg border-2 border-transparent hover:border-gray-500 transition-all duration-100 py-2 px-2 w-4/5 mx-auto font-milonga cursor-pointer bg-black text-md ${visualize === 'time' ? 'test' : ''}`}>
                    This Life
                    <img className='absolute h-8 top-1 right-3 transform transition duration-200 group-hover:scale-110' src={process.env.PUBLIC_URL + '/skull.svg'} alt='' />
                  </button>
                </div>
              </div>

              {visualize === 'year' ? (
                <div className='h-full w-full box darkBackground shadow-2xl rounded-md border-4 border-gray-800 fadeIn '>
                  <TimeBars />
                </div>
              ) : visualize === 'time' ? (
                <div className='h-full w-full box darkBackground shadow-2xl rounded-md border-4 border-gray-800 fadeIn '>
                  <TimePeriodChoose todayDate={todayDate} settings={settings} handleSettings={handleSettings} />
                </div>
              ) : 'a'}
              
        </div>
  )
}

export default LeftColumn