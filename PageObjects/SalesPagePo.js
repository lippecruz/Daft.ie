class SalesPage
{
    constructor(page)
    {
        this.page = page;
        this.btnFilter = page.getByTestId('open-filters-modal');
        this.txtKeywordSearch =  page.getByTestId('terms-input-text');
        this.btnShowResults =  page.getByTestId('filters-modal-show-results-button');
        this.h1Results = page.getByTestId('search-h1');
        this.firstProperty = page.getByTestId('card-wrapper').first();
        this.propDescription = page.getByTestId('description').nth(1);
        this.propFeatures = page.getByTestId('features');     
    }

    async ApplyGarageFilter()
    {
        await this.btnFilter.click();
        await this.txtKeywordSearch.fill("Garage");
        await this.txtKeywordSearch.press("Enter");
        await this.btnShowResults.click();
    }

    async ValidateFilter()
    {
        const url = 'https://www.daft.ie/property-for-sale/dublin-city?terms=Garage';
        await this.page.waitForURL(url);
        await this.firstProperty.click();
        const paragraphText = await this.propDescription.textContent();

        if (paragraphText.includes("garage")) {
        console.log(`Element contains the expected text`);
        } else {
        throw new Error(`Element does not contain the expected text`);
        }
        this.page.close();
    }
}

module.exports = {SalesPage};