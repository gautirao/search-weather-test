import * as WeatherActions from '../actions/weather';
import {WeatherService} from '../../weather.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {Action} from '@ngrx/store';
import {catchError, map, switchMap} from 'rxjs/operators';
import {Injectable} from '@angular/core';
import {FetchWeather} from '../actions/weather';
import {of} from 'rxjs/observable/of';

@Injectable()
export class WeatherEffects {


    @Effect()
    fetchWeather$: Observable<Action> = this.actions$.pipe(
        ofType<FetchWeather>(WeatherActions.FETCH_WEATHER),
        map(action => action.payload),
        switchMap((cityName) => this.weatherService.searchWeatherForCity(cityName)
            .pipe(
                map(searchResults => new WeatherActions.FetchWeatherDone(searchResults)),
                catchError(() => of<Action>(new WeatherActions.WeatherNotFound()) ))));

    constructor(private actions$: Actions,
                private weatherService: WeatherService) {
    }
}