import { chromium, Browser, BrowserContext, Page } from '@playwright/test';

class BrowserSingleton {
    private static instance: BrowserSingleton;
    private browser: Browser;
    private context: BrowserContext;

    private constructor() {}

    public static async getInstance(): Promise<BrowserSingleton> {
        if (!BrowserSingleton.instance) {
            BrowserSingleton.instance = new BrowserSingleton();
            await BrowserSingleton.instance.initialize();
        }
        return BrowserSingleton.instance;
    }

    private async initialize() {
        this.browser = await chromium.launch({ headless: true });
        this.context = await this.browser.newContext();
    }

    public async getPage(): Promise<Page> {
        return await this.context.newPage();
    }

    public async close(): Promise<void> {
        await this.context.close();
        await this.browser.close();
    }
}

export default BrowserSingleton;