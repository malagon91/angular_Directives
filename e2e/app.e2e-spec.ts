import { AppDirectivesPage } from './app.po';

describe('app-directives App', function() {
  let page: AppDirectivesPage;

  beforeEach(() => {
    page = new AppDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
