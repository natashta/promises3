const getNumber = (str) => {
  try {
    parsed = parseInt(str, 10);
    console.log(parsed);
    if (Number.isNaN(parsed) || parsed <= 0) {
      throw new Error('Ввод некорректен');
    } else return parsed;
  } catch (e) {
    return e;
  }  
};

export default getNumber;