const { queryString, parse } = require('./queryString');

describe('Object to string', () => {
  it('should create a valid query string when a object is provided', () => {
    const obj = {
      name: 'Guilherme',
      profession: 'developer',
    };

    expect(queryString(obj)).toBe('name=Guilherme&profession=developer');
  });

  it('should ccreate a valid query string even when an array is passed as value', () => {
    const obj = {
      name: 'Guilherme',
      abilities: ['JS', 'TDD'],
    };

    expect(queryString(obj)).toBe('name=Guilherme&abilities=JS,TDD');
  });

  it('should throw an error when an object is passed as value', () => {
    const obj = {
      name: 'Guilherme',
      abilities: { first: 'JS', second: 'TDD' },
    };

    expect(() => {
      queryString(obj);
    }).toThrowError();
  });
});

describe('Query string to object', () => {
  it('should convert a query string to object', () => {
    const qs = 'name=Guilherme&profession=developer';

    expect(parse(qs)).toEqual({
      name: 'Guilherme',
      profession: 'developer',
    });
  });
});
