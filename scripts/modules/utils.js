export const addZero = (n) => n < 10 ? `0${n}` : n;

export const getCurrentDateTime = () => {
    const months = [
        "янв",
        "фев",
        "мар",
        "апр",
        "май",
        "июн",
        "июл",
        "авг",
        "сен",
        "окт",
        "ноя",
        "дек"
    ];

    const weekdays = [
        "воскресенье",
        "понедельник",
        "вторник",
        "среда",
        "четверг",
        "пятница",
        "суббота",
    ];

    const date = new Date();

    const dayOfMonth = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    const dayOfWeek = weekdays[date.getDay()];

    const hours = addZero(date.getHours());
    const minutes = addZero(date.getMinutes());

    return { dayOfMonth, month, year, hours, minutes, dayOfWeek };
};
/* установка направления ветра спецсимвола */
export const getWindDirection = (deg) => {
    const directions = [
        '&#8593;',
        '&#8598;',
        '&#8592;',
        '&#8601;',
        '&#8595;',
        '&#8600;',
        '&#8594;',
        '&#8599;', 
    ];
    /* расчет угла ветра (по часовой стрелке выполняется расчет) для стрелки */
    const i = Math.round(deg / 45) % 8;

    return directions[i]
}

/* точка росы высчитвается из температуры и влажности */
export const calculateDewPoint = (temp, humidity) => {
    const a = 17.27;
    const b = 237.7;

    const ft = (a * temp) / (b + temp) + Math.log(humidity / 100);
    const dewPoint = (b * ft) / (a - ft);

    return dewPoint.toFixed(1)
}

/* формула расчета перевода гПА в мм ртутного столба */
export const convertPressure = (pressure) => {
    const mmHg = pressure * 0.750062;
    return Math.round(mmHg);
}

/* сбор информации данных за 5 дней */
export const getWeatherForecastData = (data) => {
    const forecast = data.list.filter((item) => 
        // если время равно 12 и день больше, чем сегодняшний
        new Date(item.dt_txt).getHours() === 12 && 
        new Date(item.dt_txt).getDate() > new Date().getDate(),
    );

    const forecastData = forecast.map((item) => {
        const date = new Date(item.dt_txt);
        const weekdaysShort = [
            "вc",
            "пн",
            "вт",
            "ср",
            "чт",
            "пт",
            "сб",
        ];

        const dayOfWeek = weekdaysShort[date.getDay()];
        const weatherIcon = item.weather[0].icon;

        let minTemp = Infinity;
        let maxTemp = -Infinity;

        for (let i = 0; i < data.list.length; i++) {
            const temp = data.list[i].main.temp;
            const tempDate = new Date(data.list[i].dt_txt);

            if (tempDate.getDate() === date.getDate()) {
                if (temp < minTemp) {
                    minTemp = temp;
                } else {
                    maxTemp = temp;
                }
            }
        }

        return { dayOfWeek, weatherIcon, minTemp, maxTemp }
    });

    return forecastData;
};