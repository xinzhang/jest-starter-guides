import getSearchObj from './getSearchObj';

describe('getSearch', () => {
  it('can query url as object', () => {
    window.location.assign('https://www.abc.com?a=1&b=2');
    expect(window.location.search).toEqual("?a=1&b=2");
    expect(getSearchObj()).toEqual({
      a: "1",
      b: "2",
    });
  });

  it('null query return empty object', () => {
    window.location.assign("https://www.baidu.com");

    expect(window.location.search).toEqual("");
    expect(getSearchObj()).toEqual({});
  });
});
