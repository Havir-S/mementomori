import React, { useEffect } from 'react'

function Grid({squares, squaresFilled, size}) {
  
  const squaresNumber = new Array((squares - squaresFilled)).fill(true)
  const squaresFilledNumber = new Array(squaresFilled).fill(true)

  useEffect(() => {

  })
  return (
    <>
      <div className='flex flex-wrap flex-row  h-fit   justify-left '>
          {
            squaresFilledNumber.map((item, index) => <div key={index} className='circle xlCircle fullCircle' />)
          }
          {
            squaresNumber.map((item, index) => <div key={index} className='circle xlCircle emptyCircle' />)
          }

      </div>
    </>
  )
}

export default Grid