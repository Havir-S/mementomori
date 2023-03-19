import React, { useEffect, useState, useMemo } from 'react'
import { getTimeBarWidths, getSecond } from './Functions';

function TimeBars() {
    const date = new Date();
    const width = useMemo(() => getTimeBarWidths(date))

    const [second, setSecond] = useState(Math.floor((new Date().getSeconds() * 100) / 60))

    useEffect(() => {

      setInterval(() => {
          setSecond(Math.floor((new Date().getSeconds() * 100) / 60))
      }, 1000)

    }, [])

    
  return (
    <div className='text-gray-400 p-4 text-center text-lg'>
        <p className='text-3xl  text-gray-400'>This Year has: <span className='font-bold font-milonga text-white'>{(date.getFullYear() % 4) ? '365' : '364'}</span> days.</p>

        <div className='mx-auto flex w-full justify-around items-center'>
          <p className=' w-full'><span className='font-milonga font-bold  text-white'>{width.year}%</span> of this <span className='font-bold  text-white'>year</span> is <span className='font-bold text-white'>finished.</span></p>
          <div className='w-full my-2 h-4 mx-auto bg-sky-100 border-2 rounded-md border-red-200'>
            <div className='h-full w-1/2 bg-cyan-800 rounded-md' style={{width: `${width.year}%`}} />
          </div>
        </div>
        <div className='mx-auto  flex w-full justify-around items-center'>
          <p className=' w-full'><span className='font-milonga font-bold  text-white'>{width.month}%</span> of this <span className='font-bold  text-white'>month</span> is <span className='font-bold text-white'>finished.</span></p>
          <div className='w-full my-2 h-4 mx-auto bg-sky-100 border-2 rounded-md border-red-200'>
            <div className='h-full w-1/2 bg-cyan-800 rounded-md' style={{width: `${width.month}%`}} />

          </div>
        </div>
        <div className='mx-auto flex w-full justify-around items-center'>
          <p className=' w-full'><span className='font-milonga font-bold  text-white'>{width.day}%</span> of this <span className='font-bold  text-white'>day</span> is <span className='font-bold text-white'>finished.</span></p>
          <div className='w-full my-2 h-4 mx-auto bg-sky-100 border-2 rounded-md border-red-200'>
            <div className='h-full w-1/2 bg-cyan-800 rounded-md' style={{width: `${width.day}%`}} />
          </div>
        </div>
        <div className='mx-auto flex w-full justify-around items-center'>
          <p className=' w-full'><span className='font-milonga font-bold  text-white'>{width.hour}%</span> of this <span className='font-bold  text-white'>hour</span> is <span className='font-bold text-white'>finished.</span></p>
          <div className='w-full my-2 h-4 mx-auto bg-sky-100 border-2 rounded-md border-red-200'>
            <div className='h-full w-1/2 bg-cyan-800 rounded-md' style={{width: `${width.hour}%`}} />
          </div>
        </div>
        <div className='mx-auto flex w-full justify-around items-center'>
          <p className=' w-full'><span className='font-milonga font-bold  text-white'>{second}%</span> of this <span className='font-bold  text-white'>minute</span> is <span className='font-bold text-white'>finished.</span></p>
          <div className='w-full my-2 h-4 mx-auto bg-sky-100 border-2 rounded-md border-red-200'>
            <div className='h-full w-1/2 bg-cyan-800 rounded-md' style={{width: `${second}%`}} />
          </div>
        </div>
        

    </div>
  )
}

export default TimeBars