import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Aller sur le site local
  await page.goto('http://localhost:5175');
  
  // Attendre que la page soit chargée
  await page.waitForTimeout(2000);
  
  // Prendre une capture d'écran
  await page.screenshot({
    path: 'screenshot.png',
    fullPage: true
  });
  
  console.log('Screenshot saved as screenshot.png');
  
  await browser.close();
})();