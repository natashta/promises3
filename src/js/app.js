function sort(hero, filter) {
  const arrayFiltred = [];
  const arrayNotFiltred = [];

  if (filter) {
    filter.forEach((item) => {
      arrayFiltred.push({
        key: item,
        value: hero[item],
      });
    });
  }

  for (const item in hero) {
    if (!arrayFiltred.includes(item)) {
      arrayNotFiltred.push({
        key: item,
        value: hero[item],
      });
    }
  }
  arrayNotFiltred.sort();

  return arrayFiltred.concat(arrayNotFiltred);
}

export default sort;
