/* eslint-disable no-undef */
describe('Wohis / home page', () => {
    // beforeAll(async () => {
    //     await page.goto('https://google.com');
    // });

    it('should be titled "Google"', async () => {
        // await expect(page.title()).resolves.toMatch('Google');
        await expect(page).resolves.toMatch('Search whois record by IP address, domain name, or email address');
    });
});
