import { expect, test } from '@playwright/test';

// Playwright dummy test
test.describe('Playwright Dummy Test', () => {
	test('will always pass', async () => {
		expect(true).toBe(true);
	});
});
