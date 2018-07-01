import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WeatherContainer} from './weather.container';
import {WeatherService} from './weather.service';
import {SearchComponent} from './components/search/search.component';
import {ResultsComponent} from './components/results/results.component';
import {FormsModule} from '@angular/forms';
import {reducer} from './store/reducers/weather';
import {WeatherEffects} from './store/effects/weather';

// IF YOU DECIDE TO USE NG-RX YOU'LL NEED TO UNCOMMENT SOME LINES
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        StoreModule.forFeature('weather', reducer),
        EffectsModule.forFeature([WeatherEffects])
    ],

    declarations: [
        SearchComponent,
        ResultsComponent,
        WeatherContainer
    ],
    providers: [
        WeatherService, HttpClientModule
    ]
})
export class WeatherModule {
}
