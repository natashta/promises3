const getNumber = (str) => {
  try {
    let parsed = +str;
    console.log(parsed);
    if ((parsed ^ 0) !== parsed || Number.isNaN(parsed) || parsed <= 0) {
      throw new Error('Ввод некорректен');
    } else return parsed;
  } catch (e) {
    return e;
  }  
};

export default getNumber;