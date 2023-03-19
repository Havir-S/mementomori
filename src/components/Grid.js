import React from 'react'

function Grid({squares, size}) {
  return (
    // <div className='w-fit mx-auto'>
      <div className='flex flex-wrap flex-row items-start justify-left '>
          {
              new Array(squares).fill(true).map((item, index) => index % 2 ? (
                  <div key={index} className='circle xlCircle fullCircle' />
              ) : (
                <div key={index} className='circle xlCircle emptyCircle' />
              ))
          }
      </div>
    // </div>
  )
}

export default Grid