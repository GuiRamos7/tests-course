const { queryString } = require('./queryString');

describe('Object to string', () => {
  it('should create a valid query string when a object is provided', () => {
    const obj = {
      name: 'Guilherme',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Guilherme&profession=developer');
  });
});

// describe('Query string to object');
