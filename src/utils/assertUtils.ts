import { expect } from '@playwright/test';

export async function expectElementToBeVisible(input, options) {
   
}

export async function assertErrorMessageVisible(locator, message) {
    try {
        console.log(`Asserting visibility of error message: ${message}`);
        await expect(locator).toBeVisible();
        console.log(`Error message is visible: ${message}`);
    } catch (error) {
        console.error(`Failed to assert visibility of error message: ${message}`);
        throw error;
    }
}