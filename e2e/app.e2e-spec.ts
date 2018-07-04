import {HomePage} from './pages/HomePage';

describe('angular-weather App', () => {
    let page: HomePage;

    beforeEach(() => {
        page = new HomePage();
        page.navigateToHomePage();
    });

    it('should render an input with search button and an empty results table', () => {
        expect(page.getSearchInput().isPresent()).toBeTruthy();
        expect(page.getSearchButton().isPresent()).toBeTruthy();
        expect(page.getResultsTable().isPresent()).toBeTruthy();
        expect(page.getSearchResults().isPresent()).toBeFalsy();
        expect(page.getErrorMessageDiv().isPresent()).toBeFalsy();
        expect(page.getTableHeader()).toContain('City 6 AM 12 PM 6 PM 12 AM');

    });

    it('should search a valid city', () => {
        page.searchWeather('London');
        page.getSearchButton().click();
        page.waitUntilResponseIsRecieved();

        expect(page.getSearchResults().isPresent()).toBeTruthy();
        expect(page.getFirstRowData()).toContain('London');


    });

    it('should show error message when weather not found', () => {
        page.searchWeather('NotARealCity');
        page.getSearchButton().click();
        page.waitUntilResponseIsRecieved();

        expect(page.getErrorMessageDiv().isPresent()).toBeTruthy();
        expect(page.getErrorMessageDiv().getText()).toEqual('Weather data not available for the city');
    });

    it('should update weather if already present in search results', () => {
        page.searchWeather('London');
        page.getSearchButton().click();
        page.waitUntilResponseIsRecieved();

        expect(page.getFirstRowData()).toContain('London');

        page.searchWeather('London');
        page.getSearchButton().click();
        page.waitUntilResponseIsRecieved();

        expect(page.getTableRow().count()).toBe(2);
    });

    it('should add valid searche results to table', () => {
        page.searchWeather('London');
        page.getSearchButton().click();
        page.waitUntilResponseIsRecieved();

        expect(page.getFirstRowData()).toContain('London');

        page.searchWeather('Basingstoke');
        page.getSearchButton().click();
        page.waitUntilResponseIsRecieved();

        expect(page.getTableRow().count()).toBe(3);
    });

});
