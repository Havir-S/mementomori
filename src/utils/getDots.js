import getDayOfTheYear from "./getDayOfTheYear";
import getDifferenceInMonths from "./getDifferenceInMonths";


const getDots = (todayDate, settings, dotType) => {
    let dots = 2
    let filledDots = 1
    const currentYear = todayDate.getFullYear();
    const currentMonth = todayDate.getMonth() + 1;
    switch (dotType) {
        case 'Years':
            filledDots = (currentYear - settings.yearBorn)
            dots = ((currentYear - settings.yearBorn) + settings.lifeYears) - filledDots
            return [dots, filledDots]
        case 'Months':
            // filledDots = ((currentYear - settings.yearBorn) * 12) + currentMonth
            // dots = (settings.lifeYears * 12) - filledDots
            const filledMonths = getDifferenceInMonths( new Date(`${settings.yearBorn}-${settings.monthBorn}-${settings.dayBorn}`), todayDate, )
            const emptyMonths = (getDifferenceInMonths( todayDate, new Date(`${todayDate.getFullYear() + settings.lifeYears}-${todayDate.getMonth()}-${todayDate.getDay()}`)) - filledMonths)
            return [filledMonths, emptyMonths]
            // return [emptyMonths, filledMonths]
        case 'Days':
            filledDots = ((currentYear - settings.yearBorn) * 365) + getDayOfTheYear();
            dots = (settings.lifeYears * 365) - filledDots
            return [dots, filledDots]
        default:
            return [dots, filledDots]
    }

}

export default getDots