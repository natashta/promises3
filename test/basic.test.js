import getNumber from '../src/js/app';

test('should return number', () => {
  expect(getNumber('80')).toBe(80);
});

test('input null should return error', () => {
  expect(getNumber('0')).toEqual(Error('Ввод некорректен'));
});

test('input negative should return error', () => {
  expect(getNumber('-1')).toEqual(Error('Ввод некорректен'));
});

test('input string should return error', () => {
  expect(getNumber('string')).toEqual(Error('Ввод некорректен'));
});

test('input non decimal should return error', () => {
  expect(getNumber('0xFF')).toEqual(Error('Ввод некорректен'));
});
