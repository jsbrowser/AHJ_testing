import puppetteer from 'puppeteer';

jest.setTimeout(30000); // default puppeteer timeout

describe('INN/OGRN form', () => {
  let browser = null;
  let page = null;
  const baseUrl = 'http://localhost:9000';
  beforeAll(async () => {
    browser = await puppetteer.launch({
      // headless: false, // show gui
      // slowMo: 100,
      // devtools: true, // show devTools
    });
    page = await browser.newPage();
  });
  afterAll(async () => {
    await browser.close();
  });

  test('unvalid card number', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=form]');
    const input = await form.$('[data-id=card_number]');
    await input.type('7715964180');
    const submit = await form.$('[data-id=submitForm]');
    submit.click();
    await page.waitForSelector('[data-id=card_number].unvalid');
  });

  test('valid card number - Discover', async () => {
    await page.goto(baseUrl);
    const form = await page.$('[data-widget=form]');
    const input = await form.$('[data-id=card_number]');
    await input.type('6011111111111117');
    const submit = await form.$('[data-id=submitForm]');
    submit.click();
    await page.waitForSelector('[data-id=card_number].valid');
  });
});
