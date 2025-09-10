import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage({
    viewport: { width: 1728, height: 1117 }
  });
  
  // Aller sur le site local
  await page.goto('http://localhost:5175');
  
  // Attendre que la page soit chargée
  await page.waitForTimeout(2000);
  
  // Cliquer sur le bouton Profile pour naviguer (avec data-testid)
  await page.click('[data-testid="profile-button"]');
  
  // Attendre que la page Profile soit chargée
  await page.waitForTimeout(3000);
  
  // Vérifier qu'on est sur la bonne page
  await page.waitForSelector('text=Sophie Durani', { timeout: 5000 });
  
  // Cacher les boutons de navigation avant le screenshot
  await page.addStyleTag({
    content: '#navigation-buttons { display: none !important; }'
  });
  
  // Prendre une capture d'écran de la page Profile (full page, résolution Mac)
  await page.screenshot({
    path: 'screenshot-profile.png',
    fullPage: true
  });
  
  console.log('Screenshot saved as screenshot-profile.png');
  
  await browser.close();
})();