import { expect, test, Page } from '@playwright/test';
import { LandingPage } from '../PageObjects/LandingPagePo';
import { SalesPage } from '../PageObjects/SalesPagePo';
import { baseUrl } from '../helper';

let page: Page;
let landingPage: LandingPage;
let salesPage: SalesPage;

test.describe('Given a user on Daft.ie landing page', async () => {
  test.beforeEach(async ({ page }) => {    
    landingPage = new LandingPage(page);
    salesPage = new SalesPage(page);

    // Open landing page
    await page.goto(baseUrl);
    await landingPage.acceptCookies.click();
  });

  test.describe('When the user applies a filter', async () => {
    test.beforeEach(async () => {
      // Search
      await landingPage.SearchDublin();
      // Apply filter
      await salesPage.applyFilter("garage");
    });
    
    test('the correct URL is displayed', async ({ page }) => {
      expect(page.url()).toContain(`${baseUrl}/property-for-sale/dublin-city?terms=garage`);
    });

    test('the correct search is returned', async () => {
      await salesPage.firstProperty.click();

      await expect(await salesPage.propDescription).toContainText("garage");
      await expect(await salesPage.propFeatures).toContainText("Garage");
    });
  });
});

