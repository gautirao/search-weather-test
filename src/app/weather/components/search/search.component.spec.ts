import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SearchComponent} from './search.component';

import Spy = jasmine.Spy;
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {WeatherEffects} from '../../store/effects/weather';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../../store/reducers/weather';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [FormsModule,
                StoreModule.forRoot({})],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
    });


    it('should create', () => {
        expect(component).toBeTruthy();
    });

    // IMPLEMENT TESTS HERE
});
