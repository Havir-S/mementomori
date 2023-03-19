const getTimeBarWidths = (date) => {
    // console.log(date)

    ///YEAR
    const deadline = `${date.getFullYear()}-12-31`;
    const totalYear = Date.parse(deadline) - Date.parse(date);
    const year = 100 - Math.floor( (totalYear/(1000*60*60*24) * 100) / ((date.getFullYear() % 4) ? '365' : '364') );

    ///MONTH
    function daysInMonth (month, year) {
        return new Date(year, month, 0).getDate();
    }
    const month = Math.floor((100 * date.getDate()) / daysInMonth(date.getFullYear(), date.getMonth()))

    ///DAY
                ///hours into seconds              ///minutes into seconds         ///add seconds    /// already calculated seconds of a day
    const day = Math.floor(((((date.getHours() * 60 * 60) + (date.getMinutes() * 60) + (date.getSeconds())) * 100) / 86400))

  
    ///HOUR
    const hour = Math.floor(((date.getMinutes() * 100) / 60))

    ///MINUTE

  
    return {
        // seconds,
        // minutes,
        // hours,
        hour,
        day,
        year, 
        month
    }
}



export {getTimeBarWidths}