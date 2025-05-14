import { Page } from '@playwright/test';
import ActionHelper from '../utils/ActionHelper';

class ProductsPage {
    private page: Page;
    private actionHelper: ActionHelper;
    private inventoryItems;
    private cartButton;

    constructor(page: Page) {
        this.page = page;
        this.actionHelper = new ActionHelper(page);
        this.inventoryItems = page.locator('.inventory_item');
        this.cartButton = page.locator('.shopping_cart_link');
    }

    async navigateToProductsPage() {
        await this.page.goto('/inventory.html');
        await this.actionHelper.waitForElementToBeVisible(this.inventoryItems.first(), 'Inventory Items');
    }

    async addItemToCart(itemName: string) {
        const itemLocator = this.page.locator(`.inventory_item:has-text("${itemName}") button`);
        await this.actionHelper.click(itemLocator, `Add to Cart Button for ${itemName}`);
    }

    async openCart() {
        await this.actionHelper.click(this.cartButton, 'Cart Button');
    }

    async assertItemInCart(itemName: string) {
        const cartItemLocator = this.page.locator(`.cart_item:has-text("${itemName}")`);
        await this.actionHelper.waitForElementToBeVisible(cartItemLocator, `Cart Item ${itemName}`);
    }
}

export default ProductsPage;