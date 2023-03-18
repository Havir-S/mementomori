import React from 'react'

function Grid({squares, size}) {
  return (
    <div className='flex flex-wrap flex-row items-start justify-center min-h-full'>
        {
            new Array(squares).fill(true).map((item, index) => (
                <div key={index} className='circle xlCircle fullCircle' />
            ))
        }
    </div>
  )
}

export default Grid