import GameSavingLoader from '../src/js/main';
import readGameSaving from '../src/пameSaving';


jest.mock('../src/пameSaving.js');

beforeEach(() => {
  jest.resetAllMocks();
});

test('Промис возвращается', async () => {
  const expected = {
    id: 10,
    created: 34539853958,
    userInfo: {
      id: 1, name: 'Magician', level: 10, points: 2000,
    },
  };

test('Ошибка', async () => {
  const expected = {
    id: 10,
    created: 34539853958,
    userInfo: {
      id: 1, name: 'Magician', level: 10, points: 2000,
    },
  };

