import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/');
  await page.locator('div').filter({ hasText: /^Cauliflower - 1 Kg60–\+ADD TO CART$/ }).getByRole('link').nth(1).click();
  await page.locator('div').filter({ hasText: /^Cauliflower - 1 Kg60–\+ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Mushroom - 1 Kg75–\+ADD TO CART$/ }).getByRole('link').nth(1).click();
  await page.locator('div').filter({ hasText: /^Mushroom - 1 Kg75–\+ADD TO CART$/ }).getByRole('button').click();
  await page.locator('div').filter({ hasText: /^Pumpkin - 1 Kg48–\+ADD TO CART$/ }).getByRole('link').nth(1).click();
  await page.locator('div').filter({ hasText: /^Pumpkin - 1 Kg48–\+ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: 'Cart' }).click();
  await page.getByRole('button', { name: 'PROCEED TO CHECKOUT' }).click();
  await page.getByRole('button', { name: 'Place Order' }).click();
  await page.getByRole('combobox').selectOption('India');
  await page.getByRole('checkbox').check();
  await page.getByRole('button', { name: 'Proceed' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});