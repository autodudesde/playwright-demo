import { test, expect } from '@playwright/test';

// let sharedPage = null; // page that will be shared across all tests

test.beforeAll(async ({ browser }) => {
    // do some setup before all tests
    // sharedPage = await browser.newPage();
});

test.beforeEach(async ({ page }) => {
    // do some setup before each test
    await page.goto('https://www.autodudes.de/');
});

test('Clicktest Demo', async ({ page }) => {
    await page.getByLabel('Main navigation').getByRole('link', { name: 'Kontakt' }).click();
    await expect(page.getByText('So erreichst du uns!')).toBeVisible();
});

test.afterEach(async ({ page }) => {
    // do some cleanup after each test
});

test.afterAll(async () => {
    // do some cleanup after all tests
});
