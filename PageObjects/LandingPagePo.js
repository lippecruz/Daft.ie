class LandingPage
{
    constructor(page)
    {
        this.page = page;
        this.acceptCookies = page.getByRole('button', { name: 'Accept All' });
        this.container = page.locator('[data-testid="homepage-sectioned-autocomplete"]');
        this.searchBox = page.locator("[data-testid='clickable-item']");
        this.dropDownList = page.locator("[data-test-id='search-box-menu']");
        this.DublinCity = page.getByTestId('homepage-dropdown-container').getByText('Dublin', { exact: true });
        this.btnFilter = page.getByTestId('open-filters-modal');
    }

    async SearchDublin()
    {
        await this.searchBox.click();
        await this.DublinCity.click();
    }
}

module.exports = {LandingPage};