import { test } from './BaseTest';
import { expect } from '@playwright/test';
import SauceDemoLoginPage from '../pages/SauceDemoLoginPage';
import ProductsPage from '../pages/ProductsPage';

// Use the extended test with the shared setup
test.describe('Sauce Demo Products Tests', () => {
    test.beforeEach(async ({ page }) => {
        const loginPage = new SauceDemoLoginPage(page);
        const productsPage = new ProductsPage(page);

        // Perform login before each test
        await loginPage.navigateToLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');
        await productsPage.navigateToProductsPage();
    });

    test('should add an item to the cart and verify it', async ({ page }) => {
        const productsPage = new ProductsPage(page);
        const itemName = 'Sauce Labs Backpack';
        await productsPage.addItemToCart(itemName);
        await productsPage.openCart();
        await productsPage.assertItemInCart(itemName);
    });
});