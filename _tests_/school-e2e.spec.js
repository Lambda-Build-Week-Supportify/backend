const puppeteer = require('puppeteer');

test('should click around', async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920,1080']
  })

  const page = await browser.newPage();
  await page.goto('https://front-end-4ikeiyiuh.now.sh/edit/school')



})


