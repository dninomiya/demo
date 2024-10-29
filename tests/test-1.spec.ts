import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://zukan.pokemon.co.jp/');
  await page.getByRole('link', { name: 'フシギダネ' }).click();
  await page.getByText('フシギダネ', { exact: true }).click();
  await expect(page.locator('#main')).toContainText('フシギsダネ');
});
