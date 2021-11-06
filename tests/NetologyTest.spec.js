const { chromium } = require("playwright");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = await browser.newPage();

  (await page).goto("https://netology.ru");

  (await page).click("text=Войти");

  await sleep(4000);

  (await page).fill('[type="password"]', "pass");

  await sleep(4000);

  (await page).fill('[placeholder="Email"]', "mail@mail.ru");

  (await page).pause(); // включает режим инспектора

  (await page).click('button:has-text("ОК")');

  (await page).click('button:has-text("Войти")');
})();
