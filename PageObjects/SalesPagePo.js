class SalesPage {
    constructor(page) {
        this.page = page;
        this.btnFilter = this.page.getByTestId('open-filters-modal');
        this.txtKeywordSearch = this.page.getByTestId('terms-input-text');
        this.btnShowResults = this.page.getByTestId('filters-modal-show-results-button');
        this.h1Results = this.page.getByTestId('search-h1');
        this.firstProperty = this.page.getByTestId('card-wrapper').first();
        this.propDescription = this.page.getByTestId('description').nth(1);
        this.propFeatures = this.page.getByTestId('features');
    }

    async applyFilter(filteroption) {
        await this.btnFilter.click();
        await this.txtKeywordSearch.fill(filteroption);
        await this.txtKeywordSearch.press("Enter");
        // wait for the url to have a term so the show button is updated
        await this.page.waitForURL('**/*?terms=*');
        await this.btnShowResults.click();
    }
}

module.exports = { SalesPage };