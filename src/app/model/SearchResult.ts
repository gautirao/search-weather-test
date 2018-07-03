export interface ISearchResult {
    id: number;
    name: string;
    tempAt6AM: number;
    tempAt12PM: number;
    tempAt6PM: number;
    tempAt12AM: number;
}

export class SearchResult implements ISearchResult {

    id: number;
    name: string;
    tempAt6AM: number;
    tempAt12PM: number;
    tempAt6PM: number;
    tempAt12AM: number;

    constructor(id: number,
                name: string,
                tempAt6AM: number,
                tempAt6PM: number,
                tempAt12AM: number,
                tempAt12PM: number) {
        this.id = id;
        this.name = name;
        this.tempAt6AM = tempAt6AM;
        this.tempAt6PM = tempAt6PM;
        this.tempAt12AM = tempAt12AM;
        this.tempAt12PM = tempAt12PM;

    }

}