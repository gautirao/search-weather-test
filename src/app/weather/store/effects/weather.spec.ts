import {WeatherEffects} from './weather';
import {TestBed} from '@angular/core/testing';
import {hot, cold} from 'jasmine-marbles';
import {FetchWeather, FetchWeatherDone, WeatherNotFound} from '../actions/weather';
import {WeatherService} from '../../weather.service';
import {Store, StoreModule} from '@ngrx/store';
import {Actions} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/from';
import {of} from 'rxjs/observable/of';
import {Weather} from '../../../model/weather';
import {_throw} from 'rxjs/observable/throw';

describe('weather effects test', () => {

    let weatherService: WeatherService;
    let mapAPIResponse;
    let store;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, StoreModule.forRoot({})],
            providers: [WeatherEffects, Actions, WeatherService]
        });
    });
    beforeEach(() => {
        mapAPIResponse = {
            city: {id: 1234, name: 'London'},
            list: [
                {'dt': 1530306000, 'main': {'temp': 17.62}},
                {'dt': 1530306000, 'main': {'temp': 17.62}},
                {'dt': 1530306000, 'main': {'temp': 17.62}},
                {'dt': 1530306000, 'main': {'temp': 17.62}}
            ]
        };

        weatherService = TestBed.get(WeatherService);
        store = TestBed.get(Store);

    });

    it('should return fetch weather done action when city is found', function () {


        spyOn(weatherService, 'searchWeatherForCity').and.returnValue(Observable.from([<Weather>mapAPIResponse]));

        const actions: Observable<any> = cold('a', {a: new FetchWeather('London')});

        const effects = new WeatherEffects(new Actions(actions), weatherService);

        const expected = cold('b', {b: new FetchWeatherDone(mapAPIResponse as Weather)});

        expect(effects.fetchWeather$).toBeObservable(expected);


    });
    it('should return weather not found action when api throws error', function () {


        spyOn(weatherService, 'searchWeatherForCity').and.returnValue(_throw('weather not found'));

        const actions: Observable<any> = cold('a', {a: new FetchWeather('randomCity')});

        const effects = new WeatherEffects(new Actions(actions), weatherService);

        const expected = cold('b', {b: new WeatherNotFound()});

        expect(effects.fetchWeather$).toBeObservable(expected);


    });


});