export const addItem = (list, itemToAdd) => {
  const newList = [...list];
  const existing = list.find(listItem => listItem === itemToAdd);

  if (!existing) {
    newList.push(itemToAdd);
  }
  return newList.sort();
};

export const deleteItem = (list, itemToDelete) => {
  const newList = [...list];

  return newList.filter(listItem => listItem !== itemToDelete);
};