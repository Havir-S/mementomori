import { useState } from 'react'

function useDots({bornDate, additionalYears}) {
  const [timePassed, setTimePassed] = useState({});
  const [timeToFuture, setTimeToFuture] = useState({});

  const calculateYears = () => {
    const diffInMs = new Date() - new Date(bornDate);
    const diffInYears = diffInMs / 1000 / 60 / 60 / 24 / 365.25;
    const yearsPassed = Math.floor(diffInYears);
    const monthsPassed = Math.floor((diffInYears - yearsPassed) * 12);
    const totalMonthsPassed = yearsPassed * 12 + monthsPassed;
    const weeksPassed = Math.floor(diffInMs / 1000 / 60 / 60 / 24 / 7);
    const daysPassed = Math.floor(diffInMs / 1000 / 60 / 60 / 24);
    setTimePassed({ years: yearsPassed, months: totalMonthsPassed, weeks: weeksPassed, days: daysPassed });

    const futureDate = new Date(bornDate);
    futureDate.setFullYear(futureDate.getFullYear() + parseInt(additionalYears));
    const futureDiffInMs = futureDate - new Date();
    const futureDiffInYears = futureDiffInMs / 1000 / 60 / 60 / 24 / 365.25;
    const yearsToFuture = Math.floor(futureDiffInYears);
    const monthsToFuture = Math.floor((futureDiffInYears - yearsToFuture) * 12);
    const totalMonthsToFuture = yearsToFuture * 12 + monthsToFuture;
    const weeksToFuture = Math.floor(futureDiffInMs / 1000 / 60 / 60 / 24 / 7);
    const daysToFuture = Math.floor(futureDiffInMs / 1000 / 60 / 60 / 24);
    setTimeToFuture({ years: yearsToFuture, months: totalMonthsToFuture, weeks: weeksToFuture, days: daysToFuture });
  };
  return [{timePassed, timeToFuture}, calculateYears];
}

export default useDots