const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = browser.newPage();

  (await page).goto("https://netology.ru");

  (await page).click("text=Войти");

  // (await page).click('[type="password"]');

  (await page).fill('[type="password"]', "pass");

  (await page).pause();

  // (await page).click('[placeholder="Email"]');

  (await page).fill('[placeholder="Email"]', "mail@mail.ru");

  (await page).pause();

  (await page).click('button:has-text("ОК")');

  (await page).click('button:has-text("Войти")');
})();
