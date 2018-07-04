import {ResultsComponent} from './results.component';
import {FormsModule} from '@angular/forms';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {Store, StoreModule} from '@ngrx/store';
import {reducer, State} from '../../store/reducers/weather';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {SearchResult} from '../../../model/SearchResult';
import {Observable} from 'rxjs/Observable';
import {By} from '@angular/platform-browser';
import {Actions, EffectsModule} from '@ngrx/effects';
import {WeatherEffects} from '../../store/effects/weather';
import {FETCH_WEATHER, FETCH_WEATHER_DONE} from '../../store/actions/weather';
import {WeatherService} from '../../weather.service';
import {HttpClientModule} from '@angular/common/http';

describe('Results Component', () => {

    let component: ResultsComponent;
    let fixture: ComponentFixture<ResultsComponent>;
    let results: SearchResult[];
    let resultsTable: DebugElement;
    let resultRowElement: HTMLElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [ResultsComponent],
            imports: [FormsModule, HttpClientModule,
                StoreModule.forRoot({}), StoreModule.forFeature('weather', reducer),
                EffectsModule.forRoot([WeatherEffects]),
                EffectsModule.forFeature([WeatherEffects])],
            providers: [WeatherEffects, Actions, WeatherService]

        });
        fixture = TestBed.createComponent(ResultsComponent);
        component = fixture.componentInstance;
        results = [new SearchResult(1234, 'London', 12, 24, 18, 6)];

    });


    it('should render search results correctly', () => {

        component.searchResults = Observable.from([results]);
        fixture.detectChanges();
        resultsTable = fixture.debugElement.query(By.css('table'));
        resultRowElement = resultsTable.query(By.css('tbody tr')).nativeElement;
        expect(resultRowElement.innerHTML).toContain('London');
    });
});