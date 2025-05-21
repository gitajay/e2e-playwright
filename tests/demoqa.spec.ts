import { test, expect } from '@playwright/test';

test('should render demoqa.com homepage and check radio button', async ({ page }) => {
    // Navigate to demoqa.com radio button page
    await page.goto('/radio-button');
    await page.waitForLoadState('networkidle');

    // Verify we're on the correct page
    await expect(page).toHaveURL('/radio-button');

    // Wait for and check the Yes radio button
    const yesRadio = page.locator('label:has-text("Yes")');
    await expect(yesRadio).toBeVisible();
    await yesRadio.click();
    
    // Verify the radio button is checked
    const checkedRadio = page.locator('input[id="yesRadio"]').isChecked();
    await expect(checkedRadio).toBeTruthy();
});
