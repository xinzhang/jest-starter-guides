import sum from 'utils/sum';

describe('sum', () => {
  it ('add a, b', () => {
    expect(sum(1,2)).toEqual(3);
  })
});
