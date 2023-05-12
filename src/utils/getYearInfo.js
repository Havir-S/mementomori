import React from 'react'

function getYearInfo() {
    const now = new Date();
    const startOfYear = new Date(now.getFullYear(), 0, 1);
    const endOfYear = new Date(now.getFullYear(), 11, 31);
  
    const elapsedDays = Math.floor((now - startOfYear) / (1000 * 60 * 60 * 24));
    const remainingDays = Math.floor((endOfYear - now) / (1000 * 60 * 60 * 24));
  
    const elapsedWeeks = Math.floor(elapsedDays / 7);
    const remainingWeeks = Math.floor(remainingDays / 7);
  
    const elapsedMonths = now.getMonth();
    const remainingMonths = 11 - now.getMonth();
  
    return {
        timePassed: {
            months: elapsedMonths,
            weeks: elapsedWeeks,
            days: elapsedDays
        },
        timeToFuture: {
            months: remainingMonths,
            weeks: remainingWeeks,
            days: remainingDays
        }
    };
}

export default getYearInfo