import React from 'react'

function Grid({squares, squaresFilled, size}) {
  return (
    // <div className='w-fit mx-auto'>
    <>
      <div className='flex flex-wrap flex-row  h-fit   justify-left '>
          {
              new Array(squaresFilled).fill(true).map((item, index) => <div key={index} className='circle xlCircle fullCircle' />)
          }
          {
              new Array((squares - squaresFilled)).fill(true).map((item, index) => <div key={index} className='circle xlCircle emptyCircle' />)
          }

      </div>
      
    </>
    // </div>
  )
}

export default Grid