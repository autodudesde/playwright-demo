import { test, expect } from '@playwright/test';
import { urls }  from "./Urls";

// let baseUrl = 'https://www.example.de/';
// let baseUrl = 'https://staging.example.de/';
let baseUrl = 'https://example.ddev.site/';

test('Visual Comparison example.de', async ({ page }) => {
    // max time, how long the test can run. Depends on the amount of URLs and pagespeed.
    test.setTimeout(10000000);

    if (baseUrl === 'https://www.example.de/') {
        await page.goto('https://www.example.de/');
        await page.click('button[data-testid="uc-accept-all-button"]'); // click the cookie button of Usercentrics
    }

    if (baseUrl === 'https://user:password@staging.example.de/') {
        await page.goto('https://user:password@staging.example.de/');
    }

    if (baseUrl === 'https://example.ddev.site/') {
        await page.goto('https://example.ddev.site/');
    }

    for (const url of urls) {
        try {
            await page.goto(baseUrl + url, { waitUntil: 'domcontentloaded' });
            await expect(page.locator('body')).not.toHaveText('Whoops, looks like something went wrong.');
            await expect(page.locator('body')).not.toHaveText('Oops, an error occurred');
            await expect(page).toHaveScreenshot({ maxDiffPixels: 100, fullPage: true, timeout: 15000 });
        } catch (error) {
            console.log(error.message);
        }
    }
});
