import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://rfierros.github.io/test_and_yaml/');
});

const PRODUCT_ITEMS = [
  {
      "id": "3ab4c6bc-8920-11ec-a5e9-939419c56813",
      "productName": "Cup",
      "maxAmount": 100,
      "taxRate": 19,
      "price": 1.99
  },
  {
      "id": "2fdc8b4e-8920-11ec-aadd-cbe09129765b",
      "productName": "T-Shirt",
      "maxAmount": 2,
      "taxRate": 19,
      "price": 9.95
  },
  {
      "id": "207dcb54-8920-11ec-876b-2346543311ec",
      "productName": "Bike",
      "maxAmount": 12,
      "taxRate": 19,
      "price": 999
  }
];


test.describe('Testing the whole application step by step', () => {
  test('should allow me to add new product to the list', async ({ page }) => {
    // select product
    await page.locator('#products').selectOption('2fdc8b4e-8920-11ec-aadd-cbe09129765b');
    
    // Check amount
    //const amount = page.locator('input[type=range]');
    //expect(amount).toHaveValue(/0/);
    const amountrange = page.getByTestId('amountrange')
    expect(amountrange).toHaveValue(/0/);
    //const amountText = page.getByTestId('amount')
    //expect(amountText).toHaveValue(/0/);

    await page.getByRole('button', { name: 'add to Cart' }).click();
    const message = page.getByRole('alert')
    expect(message).toHaveText('Incorrect amount.Please choose an amount of items bigger than 0.');
    await page.getByRole('button', { name: 'Close' }).click();
    

  });

});
