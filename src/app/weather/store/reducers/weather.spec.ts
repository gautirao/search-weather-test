import {reducer, State} from './weather';
import {FetchWeatherDone} from '../actions/weather';
import {Weather} from '../../../model/weather';

describe('weather reducers', () => {
    let londonWeather: Weather;
    let readingWeather: Weather;
    beforeEach(() => {
        londonWeather = JSON.parse('{\n' +
            '   "cod":"200",\n' +
            '   "message":0.0044,\n' +
            '   "cnt":8,\n' +
            '   "list":[\n' +
            '      {\n' +
            '         "dt":1530306000,\n' +
            '         "main":{\n' +
            '            "temp":17.62,\n' +
            '            "temp_min":17.62,\n' +
            '            "temp_max":20.73,\n' +
            '            "pressure":1025.43,\n' +
            '            "sea_level":1032.99,\n' +
            '            "grnd_level":1025.43,\n' +
            '            "humidity":52,\n' +
            '            "temp_kf":-3.11\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01n"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":4.45,\n' +
            '            "deg":48.0053\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"n"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-29 21:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530316800,\n' +
            '         "main":{\n' +
            '            "temp":14.08,\n' +
            '            "temp_min":14.08,\n' +
            '            "temp_max":16.41,\n' +
            '            "pressure":1025.75,\n' +
            '            "sea_level":1033.27,\n' +
            '            "grnd_level":1025.75,\n' +
            '            "humidity":51,\n' +
            '            "temp_kf":-2.33\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01n"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.46,\n' +
            '            "deg":42.0035\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"n"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 00:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530327600,\n' +
            '         "main":{\n' +
            '            "temp":11.13,\n' +
            '            "temp_min":11.13,\n' +
            '            "temp_max":12.69,\n' +
            '            "pressure":1024.88,\n' +
            '            "sea_level":1032.4,\n' +
            '            "grnd_level":1024.88,\n' +
            '            "humidity":76,\n' +
            '            "temp_kf":-1.56\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01n"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.1,\n' +
            '            "deg":32.5099\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"n"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 03:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530338400,\n' +
            '         "main":{\n' +
            '            "temp":12.87,\n' +
            '            "temp_min":12.87,\n' +
            '            "temp_max":13.65,\n' +
            '            "pressure":1024.14,\n' +
            '            "sea_level":1031.7,\n' +
            '            "grnd_level":1024.14,\n' +
            '            "humidity":87,\n' +
            '            "temp_kf":-0.78\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.1,\n' +
            '            "deg":44.5024\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 06:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530349200,\n' +
            '         "main":{\n' +
            '            "temp":20.96,\n' +
            '            "temp_min":20.96,\n' +
            '            "temp_max":20.96,\n' +
            '            "pressure":1023.47,\n' +
            '            "sea_level":1030.85,\n' +
            '            "grnd_level":1023.47,\n' +
            '            "humidity":57,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.58,\n' +
            '            "deg":72.5002\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 09:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530360000,\n' +
            '         "main":{\n' +
            '            "temp":24.74,\n' +
            '            "temp_min":24.74,\n' +
            '            "temp_max":24.74,\n' +
            '            "pressure":1022.46,\n' +
            '            "sea_level":1029.85,\n' +
            '            "grnd_level":1022.46,\n' +
            '            "humidity":48,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":4.65,\n' +
            '            "deg":87.001\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 12:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530370800,\n' +
            '         "main":{\n' +
            '            "temp":25.27,\n' +
            '            "temp_min":25.27,\n' +
            '            "temp_max":25.27,\n' +
            '            "pressure":1021.84,\n' +
            '            "sea_level":1029.27,\n' +
            '            "grnd_level":1021.84,\n' +
            '            "humidity":44,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":5.03,\n' +
            '            "deg":85.5001\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 15:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530381600,\n' +
            '         "main":{\n' +
            '            "temp":23.39,\n' +
            '            "temp_min":23.39,\n' +
            '            "temp_max":23.39,\n' +
            '            "pressure":1021.43,\n' +
            '            "sea_level":1028.77,\n' +
            '            "grnd_level":1021.43,\n' +
            '            "humidity":43,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":4.86,\n' +
            '            "deg":81.0013\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 18:00:00"\n' +
            '      }\n' +
            '   ],\n' +
            '   "city":{\n' +
            '      "id":1111,\n' +
            '      "name":"London",\n' +
            '      "coord":{\n' +
            '         "lat":51.5073,\n' +
            '         "lon":-0.1277\n' +
            '      },\n' +
            '      "country":"GB",\n' +
            '      "population":1000000\n' +
            '   }\n' +
            '}');

        readingWeather = JSON.parse('{\n' +
            '   "cod":"200",\n' +
            '   "message":0.0044,\n' +
            '   "cnt":8,\n' +
            '   "list":[\n' +
            '      {\n' +
            '         "dt":1530306000,\n' +
            '         "main":{\n' +
            '            "temp":17.62,\n' +
            '            "temp_min":17.62,\n' +
            '            "temp_max":20.73,\n' +
            '            "pressure":1025.43,\n' +
            '            "sea_level":1032.99,\n' +
            '            "grnd_level":1025.43,\n' +
            '            "humidity":52,\n' +
            '            "temp_kf":-3.11\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01n"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":4.45,\n' +
            '            "deg":48.0053\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"n"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-29 21:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530316800,\n' +
            '         "main":{\n' +
            '            "temp":14.08,\n' +
            '            "temp_min":14.08,\n' +
            '            "temp_max":16.41,\n' +
            '            "pressure":1025.75,\n' +
            '            "sea_level":1033.27,\n' +
            '            "grnd_level":1025.75,\n' +
            '            "humidity":51,\n' +
            '            "temp_kf":-2.33\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01n"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.46,\n' +
            '            "deg":42.0035\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"n"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 00:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530327600,\n' +
            '         "main":{\n' +
            '            "temp":11.13,\n' +
            '            "temp_min":11.13,\n' +
            '            "temp_max":12.69,\n' +
            '            "pressure":1024.88,\n' +
            '            "sea_level":1032.4,\n' +
            '            "grnd_level":1024.88,\n' +
            '            "humidity":76,\n' +
            '            "temp_kf":-1.56\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01n"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.1,\n' +
            '            "deg":32.5099\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"n"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 03:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530338400,\n' +
            '         "main":{\n' +
            '            "temp":12.87,\n' +
            '            "temp_min":12.87,\n' +
            '            "temp_max":13.65,\n' +
            '            "pressure":1024.14,\n' +
            '            "sea_level":1031.7,\n' +
            '            "grnd_level":1024.14,\n' +
            '            "humidity":87,\n' +
            '            "temp_kf":-0.78\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.1,\n' +
            '            "deg":44.5024\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 06:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530349200,\n' +
            '         "main":{\n' +
            '            "temp":20.96,\n' +
            '            "temp_min":20.96,\n' +
            '            "temp_max":20.96,\n' +
            '            "pressure":1023.47,\n' +
            '            "sea_level":1030.85,\n' +
            '            "grnd_level":1023.47,\n' +
            '            "humidity":57,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":3.58,\n' +
            '            "deg":72.5002\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 09:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530360000,\n' +
            '         "main":{\n' +
            '            "temp":24.74,\n' +
            '            "temp_min":24.74,\n' +
            '            "temp_max":24.74,\n' +
            '            "pressure":1022.46,\n' +
            '            "sea_level":1029.85,\n' +
            '            "grnd_level":1022.46,\n' +
            '            "humidity":48,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":4.65,\n' +
            '            "deg":87.001\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 12:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530370800,\n' +
            '         "main":{\n' +
            '            "temp":25.27,\n' +
            '            "temp_min":25.27,\n' +
            '            "temp_max":25.27,\n' +
            '            "pressure":1021.84,\n' +
            '            "sea_level":1029.27,\n' +
            '            "grnd_level":1021.84,\n' +
            '            "humidity":44,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":5.03,\n' +
            '            "deg":85.5001\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 15:00:00"\n' +
            '      },\n' +
            '      {\n' +
            '         "dt":1530381600,\n' +
            '         "main":{\n' +
            '            "temp":23.39,\n' +
            '            "temp_min":23.39,\n' +
            '            "temp_max":23.39,\n' +
            '            "pressure":1021.43,\n' +
            '            "sea_level":1028.77,\n' +
            '            "grnd_level":1021.43,\n' +
            '            "humidity":43,\n' +
            '            "temp_kf":0\n' +
            '         },\n' +
            '         "weather":[\n' +
            '            {\n' +
            '               "id":800,\n' +
            '               "main":"Clear",\n' +
            '               "description":"clear sky",\n' +
            '               "icon":"01d"\n' +
            '            }\n' +
            '         ],\n' +
            '         "clouds":{\n' +
            '            "all":0\n' +
            '         },\n' +
            '         "wind":{\n' +
            '            "speed":4.86,\n' +
            '            "deg":81.0013\n' +
            '         },\n' +
            '         "sys":{\n' +
            '            "pod":"d"\n' +
            '         },\n' +
            '         "dt_txt":"2018-06-30 18:00:00"\n' +
            '      }\n' +
            '   ],\n' +
            '   "city":{\n' +
            '      "id":2222,\n' +
            '      "name":"Reading",\n' +
            '      "coord":{\n' +
            '         "lat":51.5073,\n' +
            '         "lon":-0.1277\n' +
            '      },\n' +
            '      "country":"GB",\n' +
            '      "population":1000000\n' +
            '   }\n' +
            '}');
    });

    it('should add search result to state', function () {

        const fetchLondonAction = new FetchWeatherDone(londonWeather);
        const fetchReadingAction = new FetchWeatherDone(readingWeather);

        let newState: State = reducer(undefined, fetchLondonAction);
        expect(newState.ids.length).toBe(1);
        expect(newState.results[londonWeather.city.id].name).toBe(londonWeather.city.name);

        newState = reducer(newState, fetchReadingAction);
        expect(newState.ids.length).toBe(2);
        expect(newState.results[readingWeather.city.id].name).toBe(readingWeather.city.name);
    });

    it('should update search results in state if already existing', () => {

        const fetchLondonAction = new FetchWeatherDone(londonWeather);
        const fetchReadingAction = new FetchWeatherDone(readingWeather);

        let newState: State = reducer(undefined, fetchLondonAction);
        expect(newState.ids.length).toBe(1);
        expect(newState.results[londonWeather.city.id].name).toBe(londonWeather.city.name);

        newState = reducer(newState, fetchLondonAction);
        expect(newState.ids.length).toBe(1);
        expect(newState.results[londonWeather.city.id].name).toBe(londonWeather.city.name);
    });
});
