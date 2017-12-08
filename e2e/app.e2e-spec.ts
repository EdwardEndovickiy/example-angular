import { ExampleAngularPage } from './app.po';

describe('example-angular App', () => {
  let page: ExampleAngularPage;

  beforeEach(() => {
    page = new ExampleAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
