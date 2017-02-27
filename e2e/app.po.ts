import { browser, element, by } from 'protractor';

export class XmPlaylistFrontendPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('xm-root h1')).getText();
  }
}
