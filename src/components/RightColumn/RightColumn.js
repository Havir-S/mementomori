import React from 'react'
import Grid from '../Grid'
import InputTable from '../InputTable'

function RightColumn({squares, todayDate, visualize, showType, setShowType, setSquares, setSquaresFilled, size, squaresFilled}) {
  return (
    // text-white font-milonga flex h-full flex-col gap-5 xl:w-1/4 items-center
    <div className=' relative text-white font-milonga flex h-full flex-col gap-5 lg:w-1/3 items-center '>
        <div className='darkBackground fadeIn border-2 border-gray-800 rounded-md w-full p-2'>
            <InputTable todayDate={todayDate} visualize={visualize} showType={showType} setShowType={setShowType} setSquares={setSquares} setSquaresFilled={setSquaresFilled} size={size} />
        </div>
        <div className='w-full box relative overflow-y-scroll darkBackground h-full shadow-2xl rounded-md border-4 border-gray-800 fadeIn circleBox'>
            <Grid squares={squares} squaresFilled={squaresFilled} size={size} />
        </div>
        <div className='absolute hover:text-white text-gray-400 cursor-pointer bg-gradient-to-t from-black via-black  to-transparent bottom-0 w-full py-3  text-3xl text-center '>Show in fullscreen </div>
    </div>
  )
}

export default RightColumn