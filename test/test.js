import GameSavingLoader from '../src/js/main';
import readGameSaving from '../src/js/readGameSaving';

jest.mock('../src/readGameSaving.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('should work with promise and async/await', async () => {
  const gameSavingLoader = new GameSavingLoader();
  const load = gameSavingLoader.load();
  const data = await load();
  const expected = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  expect(data).toEqual(expected);
});

test('should handle errors', async () => {
  expect.assertions(1);
  try {
    const gameSavingLoader = new GameSavingLoader();
    const load = gameSavingLoader.load();
    const data = await load();
  } catch (e) {
    expect(e).toEqual('Ошибка');
  }
});
