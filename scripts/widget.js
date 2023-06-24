import { cityServicesSearch } from './modules/cityServicesSearch.js';
import { startWidget } from './modules/widgetServices.js';

const initWidget = async (app) => {
    const widget = await startWidget();
    app.append(widget);

    /* функция редактирования города */
    cityServicesSearch(widget);
};

initWidget(document.querySelector('#app'));