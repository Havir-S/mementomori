import React, { useEffect } from 'react'

function TimePeriodChoose({todayDate, handleSettings, settings}) {
    const currentYear = todayDate.getFullYear();

    ///prepare all days, months and years for the select option
    const yearBornChoose = [...Array(100).keys()].map(year => currentYear - year)
    const monthBornChoose = [...Array(12).keys()]
    const monthChosen = settings.monthBorn;
    const dayBornChoose = [...Array(new Date(currentYear, monthChosen, 0).getDate()).keys()]
    
    const handleChange = ([key, num]) => {

        //change month
        handleSettings(prevState => ({
            ...prevState,
            [key]: num
        }))
    }

    return (
        <div className='p-2'>
            <p className='text-center text-3xl'>I was born in:</p>
            <div className='flex justify-center gap-3 my-4'>
                <select onChange={(e) => handleChange(['dayBorn', Number(e.target.value)])} value={settings.dayBorn} className="block cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {dayBornChoose.map((day, i) => (<option key={day}>{day + 1}</option>))}
                </select>
                <select onChange={(e) => handleChange(['monthBorn', Number(e.target.value)])} value={settings.monthBorn} className="block cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {monthBornChoose.map((month, i) => (<option key={month}>{month + 1}</option>))}
                </select>
                <select onChange={(e) => handleChange(['yearBorn', Number(e.target.value)])} value={settings.yearBorn} className="block cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                    {yearBornChoose.map((year, i) => (<option key={year}>{year}</option>))}
                </select>
            </div>
            <div className='w-fit mx-auto text-xl'>
                <span>I would like to live for:</span>
                <select  onChange={(e) => handleChange(['lifeYears', Number(e.target.value)])} value={settings.lifeYears} className=" mx-2 cursor-pointer appearance-none  bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                        {[...Array(130).keys()].map((year, i) => (
                        year > 1 && (<option key={year}>{year}</option>)
                    ))}
                </select>
                <span>years.</span>
            </div>
        </div>
    )
}

export default TimePeriodChoose