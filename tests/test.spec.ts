import { test, expect } from '@playwright/test';
import { LandingPage } from '../PageObjects/LandingPagePo';
import { SalesPage } from '../PageObjects/SalesPagePo';

test('Validate Garage Keyword is present when filter is applied', async ({ page }) => {
  const landingPage = new LandingPage(page);
  const salesPage = new SalesPage(page);

  await page.goto('https://www.daft.ie/');
  await landingPage.acceptCookies.click();
  await landingPage.SearchDublin();

  await salesPage.ApplyGarageFilter();
  await salesPage.ValidateFilter();
});

