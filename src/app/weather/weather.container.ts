import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from '../model/SearchResult';
import {Store} from '@ngrx/store';
import { getSearchResults, State} from './store/reducers/weather';
import * as weather from './store/actions/weather';

@Component({
    selector: 'app-weather',
    template: `
        <app-search (search)="citySearch($event)"></app-search>
        <app-results></app-results>  `
})
export class WeatherContainer {


    constructor(private store: Store<State>) {
    }

    citySearch(query: string) {
        this.store.dispatch(new weather.FetchWeather(query));
    }
}
