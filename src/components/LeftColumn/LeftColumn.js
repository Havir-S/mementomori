import React, { useState, useRef } from 'react'
import TimeBars from '../TimeBars'
import TimePeriodChoose from '../TimePeriodChoose'
import "react-datepicker/dist/react-datepicker.css";
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import ReactDatePicker from 'react-datepicker';

function LeftColumn({setVisualize, visualize, setBornDate, setAdditionalYears, calculateNewDots}) {
  const additionalYearsRef = useRef(null)
  const bornDateRef = useRef(null)
  const changeGrid = () => {
    if (!bornDateRef.current.value || !additionalYearsRef.current.value) return
    setBornDate(bornDateRef.current.value)
    setAdditionalYears(additionalYearsRef.current.value)
   
  }

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
                <div className='h-full w-full box p-4 darkBackground shadow-2xl rounded-md border-4 border-gray-800 fadeIn '>
                  <p className='text-center text-3xl pb-2'>I was born in:</p>
                  <input ref={bornDateRef} type='date' max={new Date().toISOString().substring(0, 10)}  className='text-center mx-auto w-1/2 block text-black rounded-lg font-bold text-2xl' />
                  <p className='text-center text-3xl p-2'>I want to live for:</p>
                  <input ref={additionalYearsRef}  placeholder='10' className='text-center mx-auto w-1/2 block text-black rounded-lg font-bold text-2xl' min="1" max="250" type='number' />
                  <p className='text-center text-3xl p-2'>years</p>
                  <button onClick={changeGrid} className='mx-auto mt-3 group relative rounded-lg border-2 border-gray-900 hover:border-gray-500 transition-all duration-100 py-2 px-2 w-4/5 block font-milonga cursor-pointer bg-black text-xl' >
                    Show me
                  </button>
                </div>

              ) : 'a'}
              
        </div>
  )
}

export default LeftColumn