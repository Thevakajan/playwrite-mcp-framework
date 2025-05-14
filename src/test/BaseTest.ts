import { test as baseTest } from '@playwright/test';
import config from '../config';
import ProductsPage from '../pages/ProductsPage';
import SauceDemoLoginPage from '../pages/SauceDemoLoginPage';

// Extend the base test with a custom setup
const test = baseTest.extend({
    contextSetup: async ({ page }, use) => {
        const loginPage = new SauceDemoLoginPage(page);
        const productsPage = new ProductsPage(page);

        // Navigate to the environment-specific base URL
        await page.goto(config.baseUrl);

        // Perform login with valid credentials
        await loginPage.enterUsername(config.credentials.username);
        await loginPage.enterPassword(config.credentials.password);
        await loginPage.clickLogin();

        // Provide the pages to the tests
        await use(productsPage);
    },
});

export { test };