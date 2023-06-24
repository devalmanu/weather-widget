import { cityServicesSearch } from './modules/cityServicesSearch.js';
import { startWidget } from './modules/widgetServices.js';

const initWidget = async (app) => {
    const city = "Минск";

    const widget = await startWidget(city);
    app.append(widget);

    /* функция редактирования города */
    cityServicesSearch(widget);
};

initWidget(document.querySelector('#app'));