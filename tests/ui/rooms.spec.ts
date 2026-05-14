import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

let homePage : HomePage;

test.beforeEach(async ({ page }) => {
    homePage = new HomePage(page);
    await homePage.navigateToHomePage();
});
