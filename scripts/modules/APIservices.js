const API_URL = 'https://api.openweathermap.org/data/2.5/';
const API_KEY = 'ade97057c10d32c49ddbee42a4318fbb';

export const fetchWeather = async (city) => {
    try {
        const response = await fetch(`${API_URL}weather?q=${city}&appid=${API_KEY}&lang=ru`);
        const data = await response.json();
        return {success: true, data };
    } catch {
        return {success: false, err };
    
    }
}