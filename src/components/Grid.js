import React, { useEffect, useState } from 'react'

function Grid({calculatedYears, showDotType, visualize}) {
  return (
    <>
      <div className=' h-96 justify-left mx-auto w-5/6 '>
      {visualize === 'time' ? (
        <>
        {
          calculatedYears.timePassed[showDotType] >= 0 && new Array(calculatedYears.timePassed[showDotType]).fill(true).map((item, index) => <div key={index} className=' inline-block circle xlCircle fullCircle' />)
        }
        {
          calculatedYears.timeToFuture[showDotType] >= 0 && new Array(calculatedYears.timeToFuture[showDotType]).fill(true).map((item, index) => <div key={index} className=' inline-block circle xlCircle emptyCircle' />)
        }
        </>
      ) : visualize === 'year' ? (
        <>
        {
          calculatedYears.timePassed[showDotType] >= 0 && new Array(calculatedYears.timePassed[showDotType]).fill(true).map((item, index) => <div key={index} className=' inline-block circle xlCircle fullCircle' />)
        }
        {
          calculatedYears.timeToFuture[showDotType] >= 0 && new Array(calculatedYears.timeToFuture[showDotType]).fill(true).map((item, index) => <div key={index} className=' inline-block circle xlCircle emptyCircle' />)
        }
        </>
      ) : ''}
        
      </div>
    </>
  )
}

export default Grid