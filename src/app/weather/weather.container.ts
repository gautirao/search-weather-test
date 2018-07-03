import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from '../model/SearchResult';
import {Store} from '@ngrx/store';
import {getSearchResults, getWeatherNotFound, State} from './store/reducers/weather';
import * as weather from './store/actions/weather';
import {Subscription} from 'rxjs/Subscription';

@Component({
    selector: 'app-weather',
    template: `
        <app-search (search)="citySearch($event)" [cityNotFound]="isWeatherNotFound"></app-search>
        <app-results></app-results>  `
})
export class WeatherContainer implements OnInit {

    isWeatherNotFound: boolean;
    errorObservable: Subscription;

    constructor(private store: Store<State>) {

    }

    ngOnInit() {
        this.errorObservable = this.store.select(getWeatherNotFound).subscribe(
            weatherNotFound => {
                this.isWeatherNotFound = weatherNotFound;
            }
        );

    }

    ngOnDestroy() {
        this.errorObservable.unsubscribe();
    }

    citySearch(query: string) {
        this.store.dispatch(new weather.FetchWeather(query));
    }


}
