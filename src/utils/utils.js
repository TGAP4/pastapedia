export const ableToMakeNow = (fridgeIngredients, dishesList) => {
  return dishesList.filter(dish => {
    for (let ingredient of dish.ingredients) {
      if (!fridgeIngredients.includes(ingredient)) {
        return false;
      } 
    }
    return true;
  }); 
};

export const oneIngredientNeeded = (fridgeIngredients, dishesList) => {
  return dishesList.filter(dish => {
    let missingCount = 0;
    for (let ingredient of dish.ingredients) {
      if (!fridgeIngredients.includes(ingredient)) {
        missingCount++;
      } 
    }
    if (missingCount === 1) {
      return true;
    } else {
      return false;
    }
  }); 
};
