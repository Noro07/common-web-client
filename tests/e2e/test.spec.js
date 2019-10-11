describe('Landing page', () => {
  it('should have a title', () => {
    browser.waitForAngularEnabled(false);
    browser.get('/test/#/');

    expect(browser.getTitle()).toEqual('Demo web');
  });
});
