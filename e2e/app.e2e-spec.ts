import { AppPage } from './app.po';

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
      }))
  })

  it('should have ng-version', () => {
    page.navigateTo();
    expect(page.getIconCount().then(res => {
      expect(res).toBe('6.0.3');
    }))
  });

  it('should return home after clicking icon', () => {
    page.navigateTo();
    page.getHomePageByIcon();
    expect(page.getHomePageURL()
      .then(res => {
        expect(res).toContain('/#');
      }))
  })
});
