import { browser, by, element } from 'protractor';
import { elementAt } from 'rxjs/operators';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getIconCount() {
    return element(by.css('app-root')).getAttribute('ng-version');
  }

  getHomePageByIcon() {
    return element(by.css('app-root img')).click();
  }

  getTitle() {
    return browser.getTitle();
  }

  getHomePageURL() {
    return browser.getCurrentUrl();
  }
}
