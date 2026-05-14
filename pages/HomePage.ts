import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {

    //Locators assignment
    readonly roomsLocator : Locator = this.page.locator('#navbarNav').getByRole('link', { name: 'Rooms' });
    readonly bookingLocator : Locator = this.page.locator('#navbarNav').getByRole('link', { name: 'Booking' });
    readonly amenitiesLocator : Locator = this.page.getByRole('link', { name: 'Amenities' });

    constructor(page: Page) {
        super(page);
    }

    // Home page navigation
    // Click on Rooms
    async clickOnRooms() {
        await this.roomsLocator.click();
        await new Promise(resolve => setTimeout)
    }

    // Click on Booking
    async clickOnBooking() {
        await this.bookingLocator.click();
    }

    // Click on Amenities
    
    // Click on Location

    // Click on Contact

    // Click on Admin
}