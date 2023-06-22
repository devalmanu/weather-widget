import { fetchWeather } from './modules/APIservices.js';
import { startWidget } from './modules/widgetServices.js';

const initWidget = async (app) => {
    const widget = await startWidget();
    app.append(widget);
    fetchWeather('Минск');
};

initWidget(document.querySelector('#app'));