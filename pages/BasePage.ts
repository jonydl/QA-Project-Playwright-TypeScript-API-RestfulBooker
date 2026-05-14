import { Page } from '@playwright/test';

export class BasePage {
  protected page: Page;
  protected readonly baseURL : string = 'https://automationintesting.online/';

  constructor(page: Page) {
    this.page = page;
  }

    //#region Common Methods shared across all pages
  
    // Navigation to Home Page
    async navigateToHomePage() {
        await this.page.goto(this.baseURL);
    }

    // Wait page to load
    async waitPageToLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }

    //#endregion

}