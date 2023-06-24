/* редактирование города */
export const cityServicesSearch = (app) => {
    const button = document.querySelector('.widget__change-city');

    button.addEventListener('click', () => {
        const form = document.createElement('form');
        form.classList.add('widget__form');

        const inputCity = document.createElement('input');
        inputCity.classList.add('widget__input');
        inputCity.name = 'city';
        inputCity.type = 'search';
        inputCity.placeholder = 'Введите город';

        form.append(inputCity);
        app.append(form);

        
    });
};