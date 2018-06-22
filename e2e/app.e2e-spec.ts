import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('saenzag-photos-www App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title', () => {
    page.navigateTo();
    expect(page.getTitle()).toContain('Saenz A.G. Photography LLC');
  });

  it('should display home page', () => {
    page.navigateTo();
    expect(page.getHomePageURL()
      .then(res => {
        expect(res).toContain('landscape');
      }));
  });

  it('should have ng-version', () => {
    page.navigateTo();
    expect(page.getIconCount().then(res => {
      expect(res).toBe('6.0.3');
    }));
  });

  it('should return home after clicking icon', () => {
    page.navigateTo();
    page.getHomePageByIcon();
    expect(page.getHomePageURL()
      .then(res => {
        expect(res).toContain('/#');
      }));
  });

  /** Navbar */

  it('Should locate the nav bar', () => {
    page.navigateTo();
    expect(page.getNavBar()).toBeDefined();
  });

  // it('Should locate the d bar', () => {
  //   page.navigateTo();
  //   element(by.css('li.dropdown > a.dropdown-toggle')).click();
  //   element(by.linkText('Galleries')).click().then(
  //   );
  // });

  it('Should get the Galleries link on the nav bar', () => {
    page.navigateTo();
    expect(page.getGalleries().getText()).toEqual('Galleries');
  });

  it('Should get the Videography link on the nav bar', () => {
    page.navigateTo();
    expect(page.getVideography().getText()).toEqual('Videography');
  });

  it('Should redirect to the Videography page when navbar link is clicked', () => {
    page.navigateTo();
    const videography = page.getVideography();
    videography.click();
    expect(browser.driver.getCurrentUrl()).toContain('/videography');
  });

  it('Should get the Professional Services link on the nav bar', () => {
    page.navigateTo();
    expect(page.getProserv().getText()).toEqual('Professional Services');
  });

  it('Should redirect to the Professional Services page when navbar link is clicked', () => {
    page.navigateTo();
    const proserv = page.getProserv();
    proserv.click();
    expect(browser.driver.getCurrentUrl()).toContain('/proserv');
  });

  it('Should get the Shop link on the nav bar', () => {
    page.navigateTo();
    expect(page.getShop().getText()).toEqual('Shop Prints');
  });

  it('Should get the About link on the nav bar', () => {
    page.navigateTo();
    expect(page.getAbout().getText()).toEqual('About');
  });

  it('Should redirect to the About page when navbar link is clicked', () => {
    page.navigateTo();
    const about = page.getAbout();
    about.click();
    expect(browser.driver.getCurrentUrl()).toContain('/about');
  });

  it('Should get the Contact link on the nav bar', () => {
    page.navigateTo();
    expect(page.getContact().getText()).toEqual('Contact');
  });

  it('Should redirect to the Contact page when navbar link is clicked', () => {
    page.navigateTo();
    const contact = page.getContact();
    contact.click();
    expect(browser.driver.getCurrentUrl()).toContain('/contact');
  });

  /** Footer */

  it('Should locate the footer', () => {
    page.navigateTo();
    expect(page.getFooter()).toBeDefined();
  });

  it('Should get the Facebook link on the footer', () => {
    page.navigateTo();
    expect(page.getFacebook().getAttribute('href')
      .then(result => {
        expect(result).toEqual('https://www.facebook.com/saenzagphotos/');
      }));
  });

  it('Should get the Twitter link on the footer', () => {
    page.navigateTo();
    expect(page.getTwitter().getAttribute('href')
      .then(result => {
        expect(result).toEqual('https://twitter.com/saenzagphotos');
      }));
  });

  it('Should get the Instagram link on the footer', () => {
    page.navigateTo();
    expect(page.getInstagram().getAttribute('href')
      .then(result => {
        expect(result).toEqual('https://www.instagram.com/saenzagphotos/');
      }));
  });

  it('Should get the Youtube link on the footer', () => {
    page.navigateTo();
    expect(page.getYoutube().getAttribute('href')
      .then(result => {
        expect(result).toEqual('https://www.youtube.com/channel/UCNiuhaCrRY_4MgU46-o-0vQ');
      }));
  });
});
