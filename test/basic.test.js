import sort from '../src/js/app';

const hero = {
  name: 'мечник',
  health: 10,
  level: 2,
  attack: 80,
  defence: 40,
};

test('sort with filter', () => {
  const filter = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(sort(hero, filter)).toEqual(expected);
});

test('sort with wrong filter', () => {
  const filter = ['name', 'smth'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
  ];
  expect(sort(hero, filter)).toEqual(expected);
});

test('sort without filter', () => {
  const expected = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(sort(hero)).toEqual(expected);
});
