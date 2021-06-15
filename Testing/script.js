const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false, slowMo: 1000 });
  const page = await browser.newPage();
  await page.goto("http://localhost:8080/");
  await page.fill("#inputSearch", "LiL nAs");
  await page.click("#btn-search");
  await page.fill("#inputFilter", "old");
  await page.click("#btn-filter");
  await page.fill("#inputFilter", "town");
  await page.click("#btn-filter");
  await page.fill("#inputFilter", "7");
  await page.click("#btn-filter");
  await page.fill("#inputFilter", "");
  await page.click("#btn-filter");
  await page.fill("#inputSearch", "rick astley");
  await page.click("#btn-search");
  await page.fill("#inputSearch", "LiL nAs");
  await page.click("#btn-search");

  //await browser.close();
})();
