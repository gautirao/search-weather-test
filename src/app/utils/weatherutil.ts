import {Weather} from '../model/weather';
import {SearchResult} from '../model/SearchResult';

export const extractWeatherInfo = (data: Weather): SearchResult => {

    const weatherAt6AM = data.list.find(temp => new Date(temp.dt_txt).getHours() === 6).main.temp;
    const weatherAt6PM = data.list.find(temp => new Date(temp.dt_txt).getHours() === 18).main.temp;
    const weatherAt12AM = data.list.find(temp => new Date(temp.dt_txt).getHours() === 0).main.temp;
    const weatherAt12PM = data.list.find(temp => new Date(temp.dt_txt).getHours() === 12).main.temp;

    const searchResult = new SearchResult(data.city.id, data.city.name, weatherAt6AM, weatherAt6PM, weatherAt12AM, weatherAt12PM);
    return searchResult;
};