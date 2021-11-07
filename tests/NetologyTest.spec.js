const { chromium } = require("playwright");

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

const { mail, pass } = require("../user");

(async () => {
  const browser = await chromium.launch({
    headless: false,
    slowMo: 5000,
    devtools: true,
  });
  const page = browser.newPage();

  (await page).goto("https://netology.ru");

  (await page).click("text=Войти");

  await sleep(4000);

  // (await page).fill('[type="password"]', "pass");

  (await page).fill('[type="password"]', pass);

  await sleep(4000);

  // (await page).fill('[placeholder="Email"]', "mail@mail.ru");

  (await page).fill('[placeholder="Email"]', mail);

  (await page).pause(); // включает режим инспектора

  (await page).click('button:has-text("ОК")');

  (await page).click('button:has-text("Войти")');
})();
