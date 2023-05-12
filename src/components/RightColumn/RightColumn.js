import React, { useEffect, useRef, useState } from 'react'
import Grid from '../Grid'
import InputTable from '../InputTable'

function RightColumn({calculatedYears,visualize}) {
  const [showDotType, setShowDotType] = useState('months') /// years/months/weeks/days
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isFullscreenAnimating, setIsFullscreenAnimating] = useState(false);
  const fullScreenRef = useRef(null)
    //// CLEAN THE "I want to see Weeks/months/years section everytime visualization changes so it doesn't show the wrong type"
    useEffect(() => {
      if (visualize === 'year') {
        setShowDotType('months')
      }
    }, [visualize])

  const openFullScreen = () => {
   
    if (isFullscreenAnimating) return
    setIsFullscreen(!isFullscreen)
    setIsFullscreenAnimating(true)
    setTimeout(() => {
      setIsFullscreenAnimating(false)
      // fullScreenRef.current.classList.remove('removeIsFullscreen')
      // fullScreenRef.current.classList.remove('fadeFromBottom')
    }, 1000)
  }

  const closeFullScreen = () => {
    if (isFullscreenAnimating) return
    fullScreenRef.current.classList.add('removeIsFullscreen')
    setIsFullscreenAnimating(true)
    setTimeout(() => {
      setIsFullscreen(!isFullscreen)
      setIsFullscreenAnimating(false)
      // fullScreenRef.current.classList.remove('removeIsFullscreen')
      // fullScreenRef.current.classList.remove('fadeFromBottom')
    }, 1000)
  }

  return (
    // text-white font-milonga flex h-full flex-col gap-5 xl:w-1/4 items-center
    <div className=' relative text-white font-milonga flex min-h-[300px] my-6 mb-12 lg:mt-0 lg:my-0 h-full flex-col gap-5 lg:w-1/3 items-center '>
        <div className='darkBackground fadeIn border-2 border-gray-800 rounded-md w-full p-2'>
            <InputTable visualize={visualize} showDotType={showDotType} setShowDotType={setShowDotType} />
        </div>
        {/* <div className='w-full box relative overflow-y-scroll darkBackground h-full shadow-2xl rounded-md border-4 border-gray-800 fadeIn circleBox'> */}
        <div className={`w-full box relative overflow-y-scroll darkBackground h-full shadow-2xl rounded-md border-4 border-gray-800 fadeIn circleBox `}>
            <Grid visualize={visualize} showDotType={showDotType} calculatedYears={calculatedYears} />
        </div>
        <div onClick={() => {openFullScreen()}} id='showFull' className='absolute hover:text-white fadeIn text-gray-400 cursor-pointer bg-gradient-to-t from-black via-black  to-transparent bottom-0 w-full py-3  text-3xl text-center '>Show in fullscreen </div>
        {isFullscreen && (
          <div ref={fullScreenRef} className={`fixed bottom-0 left-0 flex justify-center items-center w-screen h-screen transform transition fullScreen duration-200 ${isFullscreen ? 'fadeFromBottom' : 'hidden'} `}>
            <div className='h-5/6 w-5/6 mx-auto  flex flex-col '>
              <div className=' flex-grow w-full   overflow-y-scroll darkBackground h-full '>
                <Grid visualize={visualize} showDotType={showDotType} calculatedYears={calculatedYears} />
              </div>
              <div onClick={() => {closeFullScreen()}} className='hover:text-red-300 bg-gradient-to-r from-transparent from-10% via-black via-30% to-transparent to-90% cursor-pointer py-5 text-center text-5xl'>
                Close
              </div>
            </div>
          </div>   
        )}
        
    </div>
  )
}

export default RightColumn