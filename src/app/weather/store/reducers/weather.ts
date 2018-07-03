import {createFeatureSelector, createSelector} from '@ngrx/store';
import {SearchResult} from '../../../model/SearchResult';
import * as weather from '../actions/weather';
import * as util from '../../../utils/weatherutil';

export interface State {
    ids: number[];
    results: { [id: number]: SearchResult };
    weatherNotFound: boolean;
};

export const initialState: State = {
    ids: [],
    results: {},
    weatherNotFound: false
};

export function reducer(state = initialState, action: weather.Actions): State {

    switch (action.type) {
        case weather.FETCH_WEATHER_DONE: {
            const cityWeather = action.payload;
            const searchResult = util.extractWeatherInfo(cityWeather);
            const isExisting = state.ids.indexOf(cityWeather.city.id) > -1;
            if (isExisting) {
                state.results[searchResult.id] = {
                    ...state.results[searchResult.id],
                    ...searchResult
                };

                return {...state, weatherNotFound: false}; // using the spread operator gives you a copy of state
            } else {

                return {
                    ids: [...state.ids, searchResult.id],
                    results: {
                        ...state.results,
                        [searchResult.id]: searchResult
                    },
                    weatherNotFound: false
                };
            }


        }
        case weather.WEATHER_NOT_FOUND :
            return {...state, weatherNotFound: true};
        default: {
            return state;
        }
    }


}

export const getWeatherState = createFeatureSelector<State>('weather');


export const getIds = createSelector(getWeatherState, (state: State) => state.ids);

export const getResults = createSelector(getWeatherState, (state: State) => state.results);

export const getWeatherNotFound = createSelector(getWeatherState, (state: State) => state.weatherNotFound);

export const getSearchResults = createSelector(getResults, getIds, (searchResults, searchIds) => searchIds.map((id => searchResults[id])));
