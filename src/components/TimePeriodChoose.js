import React from 'react'

function TimePeriodChoose({todayDate, handleSettings, settings}) {
    const currentYear = todayDate.getFullYear();
    const yearBornChoose = [...Array(100).keys()].map(year => currentYear - year)
    const monthBornChoose = [...Array(12).keys()]
    const monthChosen = settings.monthBorn;
    const dayBornChoose = [...Array(new Date(currentYear, monthChosen, 0).getDate()).keys()]
    return (
        <div>
            <p className='text-center text-2xl'>I was born in:</p>
            <div>
                <select className="block cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {dayBornChoose.map((day, i) => (<option key={day}>{day + 1}</option>))}
                </select>
                <select className="block cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {monthBornChoose.map((month, i) => (<option key={month}>{month + 1}</option>))}
                </select>
                <select className="block cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {yearBornChoose.map((year, i) => (<option key={year}>{year}</option>))}
                </select>
            </div>
            <div className='w-fit mx-auto'>
                <span>I would like to live for:</span>
                <select className=" mx-2 cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        {[...Array(130).keys()].map((year, i) => (<option selected={year === settings.lifeYears} key={year}>{year}</option>))}
                </select>
                <span>years.</span>
            </div>
        </div>
    )
}

export default TimePeriodChoose