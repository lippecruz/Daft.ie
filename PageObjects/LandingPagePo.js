class LandingPage
{
   /**
   * @param {import('@playwright/test').Page} page
   */
    constructor(page)
    {
        this.page = page;
        this.acceptCookies = this.page.getByRole('button', { name: 'Accept All' });
        this.container = this.page.locator('[data-testid="homepage-sectioned-autocomplete"]');
        this.searchBox = this.page.locator("[data-testid='clickable-item']");
        this.dropDownList = this.page.locator("[data-test-id='search-box-menu']");
        this.DublinCity = this.page.getByTestId('homepage-dropdown-container').getByText('Dublin', { exact: true });
        this.btnFilter = this.page.getByTestId('open-filters-modal');
    }

    async SearchDublin()
    {
        await this.searchBox.click();
        await this.DublinCity.click();
    }
}

module.exports = {LandingPage};