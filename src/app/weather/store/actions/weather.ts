import {Action, Store} from '@ngrx/store';
import {Weather} from '../../../model/weather';
// True while fetching data from API
export const LOADING = 'Fetching weather Load';

// Fetching Weather via the Weather Search API
export const FETCH_WEATHER = 'Fetch Weather';
export const FETCH_WEATHER_DONE = 'Fetch Weather Done';
export const WEATHER_NOT_FOUND = 'City Not Found';

export class FetchWeather implements Action {

    readonly type = FETCH_WEATHER;

    constructor(public payload: string) {
    }
}

export class FetchWeatherDone implements Action {
    readonly type = FETCH_WEATHER_DONE;

    constructor(public payload: Weather) {
    }
}

export class WeatherNotFound implements Action {
    readonly type = WEATHER_NOT_FOUND;
}

export type Actions = FetchWeather
                    | FetchWeatherDone
                    | WeatherNotFound;
