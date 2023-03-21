
function getDifferenceInMonths(dateFrom, dateTo) {
    let months;
    months = (dateTo.getFullYear() - dateFrom.getFullYear()) * 12;
    months -= dateFrom.getMonth();
    months += dateTo.getMonth();
    return months <= 0 ? 0 : months
    //just have 3 dates, measure how many days between birth and today - this is filled then empty from today till new date, no deleting or anything!!!

  }

  export default getDifferenceInMonths