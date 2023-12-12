import { browser, element, by } from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('toh-heroes-app h1')).getText();
  }
}
