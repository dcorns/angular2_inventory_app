import { browser, element, by } from 'protractor';

export class Angular2InventoryAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('inventory-app h1')).getText();
  }
}
