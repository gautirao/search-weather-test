import {browser, by, element, ElementArrayFinder, promise} from 'protractor';

export class HomePage {


    navigateToHomePage() {
        return browser.get('/');
    }

    getSearchInput() {
        return element(by.css('input#city'));
    }

    getSearchButton() {
        return element(by.css('button.btn-search'));
    }

    getResultsTable() {
        return element(by.css('.table'));
    }
    getTableHeader(): promise.Promise<string> {
        return this.getResultsTable().all(by.tagName('tr')).get(0).getText();
    }

    getTableRow(): ElementArrayFinder {
        return this.getResultsTable().all(by.tagName('tr'));
    }

    getFirstRowData(): promise.Promise<string> {
        return this.getTableRow().get(1).getText();
    }

    getErrorMessageDiv() {
        return element(by.css('div.alert-danger'));
    }

    searchWeather(cityName: string) {
        this.getSearchInput().clear();
        this.getSearchInput().sendKeys(cityName);
    }

    getSearchResults() {
        return element(by.xpath('//table/tbody/tr'));
    }

    waitUntilResponseIsRecieved() {
        browser.waitForAngular();
    }

}