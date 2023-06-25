import { fetchForecast, fetchWeather } from "./APIservices.js";
import { 
    renderWidgetToday, 
    renderWidgetOther, 
    renderWidgetForecast } from "./render.js";

export const startWidget = async (city, widget) => {
    /* проверка города */
    if (!city) {
        const dataCity = await getCity();
        if(dataCity.success) {
            city = dataCity;
        }
    }
    
    if (!widget) {
        widget = document.createElement('div');
        widget.classList.add('widget');
    }
    
    const dataWeather = await fetchWeather(city);

    if (dataWeather.success) {
        renderWidgetToday(widget, dataWeather.data);
        renderWidgetOther(widget, dataWeather.data);
    } else {
        showError(dataWeather.error());
    }

    const dataForecast = await fetchForecast(city);

    if (dataForecast.success) {
        renderWidgetForecast(widget, dataForecast.data);
    } else {
        showError(dataForecast.error());
    }

    return widget;
};