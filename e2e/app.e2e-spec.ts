import { GyAppPage } from './app.po';

describe('gy-app App', () => {
  let page: GyAppPage;

  beforeEach(() => {
    page = new GyAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
