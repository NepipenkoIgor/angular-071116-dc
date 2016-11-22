import { AngularCDPage } from './app.po';

describe('angular-cd App', function() {
  let page: AngularCDPage;

  beforeEach(() => {
    page = new AngularCDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
