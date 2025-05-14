import { Page } from '@playwright/test';
import ActionHelper from '../utils/ActionHelper';
import { assertErrorMessageVisible } from '../utils/assertUtils';

class SauceDemoLoginPage {
    private page: Page;
    private actionHelper: ActionHelper;
    private usernameInput;
    private passwordInput;
    private loginButton;

    constructor(page: Page) {
        this.page = page;
        this.actionHelper = new ActionHelper(page);
        this.usernameInput = page.locator('#user-name');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    async navigateToLoginPage() {
        await this.page.goto('/');
        await this.actionHelper.waitForElementToBeVisible(this.usernameInput, 'Username Input');
    }

    async enterUsername(username: string) {
        await this.actionHelper.sendKeys(this.usernameInput, username, 'Username Input');
    }

    async enterPassword(password: string) {
        await this.actionHelper.sendKeys(this.passwordInput, password, 'Password Input');
    }

    async clickLogin() {
        await this.actionHelper.click(this.loginButton, 'Login Button');
    }

    getErrorMessageLocator() {
        return this.page.locator('[data-test="error"]');
    }

    async assertErrorMessageVisible() {
        const errorMessageLocator = this.getErrorMessageLocator();
        await assertErrorMessageVisible(errorMessageLocator, 'Invalid credentials error message');
    }

    async login(username: string, password: string) {
        await this.actionHelper.fill(this.usernameInput, username, 'Username Field');
        await this.actionHelper.fill(this.passwordInput, password, 'Password Field');
        await this.actionHelper.click(this.loginButton, 'Login Button');
    }

    async assertSuccessfulLogin(): Promise<void> {
        const productsPageTitle = this.page.locator('.title');
        await this.actionHelper.assertElementVisible(productsPageTitle, 'Products Page Title');
    }
}

export default SauceDemoLoginPage;