import { ThesisSearchTestPage } from './app.po';

describe('thesis-search-test App', function() {
  let page: ThesisSearchTestPage;

  beforeEach(() => {
    page = new ThesisSearchTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
