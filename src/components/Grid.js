import React, { useEffect, useState } from 'react'

function Grid({squares, squaresFilled, size}) {
  // const squaresNumber = new Array((squares - squaresFilled)).fill(true)
  // const squaresFilledNumber = new Array(squaresFilled).fill(true)
  // useEffect(() => {
  //   if (squares - squaresFilled <= 0) {
  //     toggleEnd(true)
  //   } else {
  //     toggleEnd(false)
  //   }
  // }, [squares, squaresFilled])
  return (
    <>
      <div className=' h-96 justify-left mx-auto w-5/6 '>
      {((squares - squaresFilled) <= 0) ? (
        <div>end</div>
      ) : (
        <>
          {
            squaresFilled > 0 && new Array(squaresFilled).fill(true).map((item, index) => <div key={index} className=' inline-block circle xlCircle fullCircle' />)
          }
          {
            squares > 0 && new Array((squares - squaresFilled)).fill(true).map((item, index) => <div key={index} className=' inline-block circle xlCircle emptyCircle' />)
          }
        </>
      )}
          

      </div>
    </>
  )
}

export default Grid