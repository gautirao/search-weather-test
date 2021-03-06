import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {getSearchResults, State} from '../../store/reducers/weather';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';
import {SearchResult} from '../../../model/SearchResult';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
    // IMPLEMENT ANY INPUT OR OUTPUT YOU MIGHT NEED
    searchResults$: Observable<SearchResult[]>;
    @Output() search = new EventEmitter<string>();
    @Input() cityNotFound: Boolean;

    constructor(private store: Store<State>) {
    }

    ngOnInit() {
        this.searchResults$ = this.store.select(getSearchResults);
    }

    searchAPI(cityName: string) {
        this.search.emit(cityName);
    }
}
