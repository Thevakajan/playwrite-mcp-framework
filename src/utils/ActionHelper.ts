import { Page, Locator } from '@playwright/test';
import Logger from '../utils/Logger';
import { expect } from '@playwright/test';

class ActionHelper {
    [x: string]: any;
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async sendKeys(locator: Locator, value: string, elementName: string): Promise<void> {
        Logger.logInfo(`Filling ${elementName} with value: ${value}`);
        await this.waitForElementToBeVisible(locator, elementName);
        await locator.fill(value);
        Logger.logInfo(`${elementName} filled successfully.`);
    }

    async waitForElementToBeVisible(locator: Locator, elementName: string, timeout: number = 10000): Promise<void> {
        Logger.logInfo(`Waiting for ${elementName} to be visible...`);
        await locator.waitFor({ state: 'visible', timeout });
        Logger.logInfo(`${elementName} is now visible.`);
    }

    async click(locator: Locator, elementName: string): Promise<void> {
        Logger.logInfo(`Clicking on ${elementName}...`);
        await this.waitForElementToBeVisible(locator, elementName);
        await locator.click();
        Logger.logInfo(`${elementName} clicked successfully.`);
    }

    async assertElementVisible(locator: Locator, elementName: string, timeout: number = 10000): Promise<void> {
        try {
            Logger.logInfo(`Asserting visibility of ${elementName}...`);
            await expect(locator).toBeVisible({ timeout });
            Logger.logInfo(`${elementName} is visible.`);
        } catch (error) {
            Logger.logError(`Failed to assert visibility of ${elementName}.`);
            Logger.logError(`Error details: ${error.message}`);
            throw error;
        }
    }

    async waitForElementToBeVisibleBySelectorOrLocator(selectorOrLocator: string | Locator, elementName: string, timeout: number = 10000): Promise<void> {
        try {
            console.log(`Waiting for ${elementName} to be visible...`);
            if (typeof selectorOrLocator === 'string') {
                await this.page.waitForSelector(selectorOrLocator, { timeout });
            } else {
                await selectorOrLocator.waitFor({ state: 'visible', timeout });
            }
            console.log(`${elementName} is now visible.`);
        } catch (error) {
            console.error(`Failed to wait for ${elementName} to be visible.`);
            throw error;
        }
    }

    async fill(locator: Locator, value: string, elementName: string): Promise<void> {
        Logger.logInfo(`Filling ${elementName} with value: ${value}`);
        await this.sendKeys(locator, value, elementName);
    }
}

export default ActionHelper;