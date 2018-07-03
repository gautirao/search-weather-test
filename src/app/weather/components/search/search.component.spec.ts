import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, DebugElement} from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {SearchComponent} from './search.component';

import Spy = jasmine.Spy;
import {FormsModule} from '@angular/forms';
import {EffectsModule} from '@ngrx/effects';
import {WeatherEffects} from '../../store/effects/weather';
import {StoreModule} from '@ngrx/store';
import {reducer} from '../../store/reducers/weather';
import {By} from '@angular/platform-browser';

describe('SearchComponent', () => {
    let component: SearchComponent;
    let fixture: ComponentFixture<SearchComponent>;
    let searchInput: DebugElement;
    let searchButton: DebugElement;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SearchComponent],
            imports: [FormsModule,
                StoreModule.forRoot({})],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        });
        fixture = TestBed.createComponent(SearchComponent);
        component = fixture.componentInstance;
        searchInput = fixture.debugElement.query(By.css('input[type=text]'));
        searchButton = fixture.debugElement.query(By.css('.btn-search'));

    });


    it('should emit search value when search button is clicked', () => {

        spyOn(component.search, 'emit').and.callThrough();

        searchInput.nativeElement.value = 'London';

        searchButton.triggerEventHandler('click', null);

        fixture.detectChanges();
        fixture.whenStable().then( () => {
            expect(component.search.emit).toHaveBeenCalledWith('London');
        });

    });

    // IMPLEMENT TESTS HERE
});
