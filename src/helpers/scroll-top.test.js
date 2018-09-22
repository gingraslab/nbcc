import ScrollTop from './scroll-top';

describe('ScrollTop', () => {
  test('Should scroll to top of page', () => {
    const scrollSpy = jest.spyOn(window, 'scrollTo');
    ScrollTop();
    expect(scrollSpy).toHaveBeenCalledWith(0, 0);
  });
});
