import getDayOfTheYear from "./getDayOfTheYear";



const getDots = (todayDate, settings, dotType) => {
    let dots = 2
    let filledDots = 1
    const currentYear = todayDate.getFullYear();
    const currentMonth = todayDate.getMonth() + 1;
    switch (dotType) {
        case 'Years':
            console.log('we giving years')
            filledDots = (currentYear - settings.yearBorn)
            dots = ((currentYear - settings.yearBorn) + settings.lifeYears) - filledDots
            console.log(currentYear - settings.yearBorn)
            return [dots, filledDots]
        case 'Months':
            console.log('we giving months')
            filledDots = ((currentYear - settings.yearBorn) * 12) + currentMonth
            dots = (settings.lifeYears * 12) - filledDots
            console.log([dots, filledDots])
            return [dots, filledDots]
        case 'Days':
            console.log('we giving days')
            filledDots = ((currentYear - settings.yearBorn) * 365) + getDayOfTheYear();
            dots = (settings.lifeYears * 365) - filledDots
            console.log([dots, filledDots])
            return [dots, filledDots]
        default:
            return [dots, filledDots]
    }

}

export default getDots