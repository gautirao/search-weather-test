import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Weather} from '../model/weather';

import {Observable} from 'rxjs/Observable';


@Injectable()
export class WeatherService {
    url = 'https://api.openweathermap.org/data/2.5/forecast';
    params = {
        q: '',
        cnt: '8',
        units: 'metric',
        APPID: '010721642521f31b0fbc8c3831d45951'
    };

    constructor(private http: HttpClient) {
    }

    searchWeatherForCity(city): Observable<Weather> {

        this.params.q = city;
        return this.http.get<Weather>(this.url, {
                params: this.params
            }
        );
    }

}
