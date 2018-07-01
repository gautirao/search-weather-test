import * as WeatherActions from '../actions/weather';
import {WeatherService} from '../../weather.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {FetchWeather} from '../actions/weather';

@Injectable()
export class WeatherEffects {



    @Effect()
    fetchWeather$: Observable<Action> = this.actions$.pipe(
        ofType<FetchWeather>(WeatherActions.FETCH_WEATHER),
        map(action => action.payload),
        switchMap((cityName) => this.weatherService.searchWeatherForCity(cityName)

            .pipe(
                map(searchResults => ({type: WeatherActions.FETCH_WEATHER_DONE, payload: searchResults}))
            )
        )
    );

    constructor(private actions$: Actions,
                private weatherService: WeatherService) {
    }
}