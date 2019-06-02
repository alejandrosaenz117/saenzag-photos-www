import { browser, by, element, ElementFinder } from "protractor";
import { elementAt } from "rxjs/operators";

export class AppPage {
  navigateTo() {
    return browser.get("/");
  }

  getIconCount() {
    return element(by.css("app-root")).getAttribute("ng-version");
  }

  getHomePageByIcon() {
    return element(by.css("app-root img")).click();
  }

  getTitle() {
    return browser.getTitle();
  }

  getHomePageURL() {
    return browser.getCurrentUrl();
  }

  getNavBar(): ElementFinder {
    return element(by.tagName("nav"));
  }

  getGalleries(): ElementFinder {
    return this.getNavBar()
      .all(by.css("li"))
      .get(0);
  }

  getVideography(): ElementFinder {
    return this.getNavBar()
      .all(by.css("li"))
      .get(1);
  }

  getProserv(): ElementFinder {
    return this.getNavBar()
      .all(by.css("li"))
      .get(2);
  }

  getShop(): ElementFinder {
    return this.getNavBar()
      .all(by.css("li"))
      .get(3);
  }

  getAbout(): ElementFinder {
    return this.getNavBar()
      .all(by.css("li"))
      .get(4);
  }

  getContact(): ElementFinder {
    return this.getNavBar()
      .all(by.css("li"))
      .get(5);
  }

  getFooter(): ElementFinder {
    return element(by.tagName("footer"));
  }

  getFacebook(): ElementFinder {
    return this.getFooter()
      .all(by.css("a"))
      .get(0);
  }

  getTwitter(): ElementFinder {
    return this.getFooter()
      .all(by.css("a"))
      .get(1);
  }

  getInstagram(): ElementFinder {
    return this.getFooter()
      .all(by.css("a"))
      .get(2);
  }

  getYoutube(): ElementFinder {
    return this.getFooter()
      .all(by.css("a"))
      .get(3);
  }
}
