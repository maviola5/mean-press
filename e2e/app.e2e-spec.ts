import { MeanPressPage } from './app.po';

describe('mean-press App', function() {
  let page: MeanPressPage;

  beforeEach(() => {
    page = new MeanPressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
