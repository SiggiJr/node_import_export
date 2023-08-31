export const sortCars = (data) => {
  return data.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a > b) {
      return 1;
    } else {
      return 0;
    }
  });
};

export const sortArray = (data) => {
  return data.sort();
};
