import { test } from './BaseTest';
import SauceDemoLoginPage from '../pages/SauceDemoLoginPage';

test.describe('Sauce Demo Login Tests', () => {
    test('should login with valid credentials', async ({ page }) => {
        const loginPage = new SauceDemoLoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login('standard_user', 'secret_sauce');
        await loginPage.assertSuccessfulLogin();
    });

    test('should show error for invalid credentials', async ({ page }) => {
        const loginPage = new SauceDemoLoginPage(page);
        await loginPage.navigateToLoginPage();
        await loginPage.login('invalid_user', 'invalid_password');
        await loginPage.assertErrorMessageVisible();
    });
});