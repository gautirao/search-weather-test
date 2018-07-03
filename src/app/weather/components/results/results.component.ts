import {Component, Input, OnChanges} from '@angular/core';
import {SearchResult} from '../../../model/SearchResult';
import {Observable} from 'rxjs/Observable';
import {Store} from '@ngrx/store';
import {getSearchResults, State} from '../../store/reducers/weather';

@Component({
    selector: 'app-results',
    templateUrl: './results.component.html'
})
export class ResultsComponent implements OnChanges {

    searchResults: Observable<SearchResult[]>;

    constructor(private store: Store<State>) {
        this.searchResults = this.store.select(getSearchResults);
    }

    ngOnChanges() {
        // IMPLEMENT ANYTHING YOU BEKIEVE YOU MIGHT NEED HERE
    }
}


