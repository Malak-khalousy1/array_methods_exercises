// q1:Find the largest number and the number before it

export const largestNumberAndBefore1 = (arr = []) => {
  let max = 0;
  let bmax = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      bmax = max;
      max = arr[i];
    } else if (arr[i] > bmax && arr[i] != max) {
      bmax = arr[i];
    }
  }
  return { largest: max, b_largest: bmax };
};

export const largestNumberAndBefore2 = (arr = []) => {
  let max = 0;
  let bmax = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] < arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
  return { largest: arr[0], b_largest: arr[1] };
};

export const largestNumberAndBefore3 = (arr = []) => {
  arr.sort((x, y) => y - x);
  return { largest: arr[0], b_largest: arr[1] };
};

export const largestNumberAndBefore4 = (arr = []) => {
  let max = 0;
  let bmax = 0;
  arr.forEach((number) => {
    if (number > max) {
      bmax = max;
      max = number;
    } else if (number > bmax && number != max) {
      bmax = number;
    }
  });

  return { largest: max, b_largest: bmax };
};

//q2:Find the longest name in the array
export const longestName1 = (arr = []) => {
  let max = 0;
  let index = 0;
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    const word = arr[i];
    for (let j = 0; word[j] != undefined; j++) {
      count++;
    }
    res[i] = count;
    if (res[i] > max) {
      max = res[i];
      index = i;
    }
  }
  return [arr[index]];
};

export const longestName2 = (arr = []) => {
  arr.sort((x, y) => y.length - x.length);
  return [arr[0]];
};

export const longestName3 = (arr = []) => {
  let longest = "";
  arr.forEach((word) => {
    if (word.length > longest.length) {
      longest = word;
    }
  });
  return [longest];
};

//q3:Extract numbers bigger than their adjacent neighbors

export const adjacentNeighbors1 = (arr = []) => {
  let index = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (
      (i == 0 || arr[i] > arr[i - 1]) &&
      (i == arr.length - 1 || arr[i] > arr[i + 1])
    ) {
      res[index] = arr[i];
      index++;
    }
  }
  return res;
};

export const adjacentNeighbors2 = (arr = []) => {
  const res = arr.filter((num, index, array) => {
    const isBiggerLeft = index == 0 || num > array[index - 1];
    const isBiggerRight = index == array.length - 1 || num > array[index + 1];
    return isBiggerLeft && isBiggerRight;
  });
  return res;
};

export const adjacentNeighbors3 = (arr = []) => {
  let res = arr.reduce((acc, number, index, array) => {
    if (
      (index == 0 || number > array[index - 1]) &&
      (index == array.length - 1 || number > array[index + 1])
    ) {
      acc.push(number);
    }
    return acc;
  }, []);
  return res;
};

////q4:Count the number of people eligible to vote

export const countEligible1 = (arr = []) => {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 18) count++;
  }
  return count;
};

export const countEligible2 = (arr = []) => {
  let count = 0;
  arr.forEach((numder) => {
    if (numder >= 18) count++;
  });

  return count;
};

export const countEligible3 = (arr = []) => {
  const res = arr.filter((number) => number >= 18);
  return res.length;
};
export const countEligible4 = (arr = []) => {
  const count = arr.reduce((acc, num) => {
    if (num >= 18) {
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
  return count;
};

//q5:Check if a specific number exists in the array
export const specificNumber1 = (arr = [], number) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == number) return "true";
    return "false";
  }
};

export const specificNumber2 = (arr = [], number) => {
  return arr.includes(number);
};

export const specificNumber3 = (arr = [], num) => {
  const count = arr.filter((number) => number == num).length;
  if (count == 0) return false;
  return true;
};

//q6:Calculate the average of numbers
export const average1 = (arr = []) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum / arr.length;
};

export const average2 = (arr = []) => {
  const count = arr.reduce((acc, num) => {
    return acc + num;
  }, 0);
  return count / arr.length;
};

export const average3 = (arr = []) => {
  let sum = 0;
  arr.forEach((num) => {
    sum = sum + num;
  });
  return sum / arr.length;
};

//q7:Find common elements between two arrays
export const commonElements1 = (arr1 = [], arr2 = []) => {
  let index = 0;
  let res = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        res[index] = arr1[i];
        index++;
      }
    }
  }
  return res;
};

export const commonElements2 = (array1 = [], array2 = []) => {
  const res = [];
  array1.forEach((num) => {
    if (array2.includes(num)) {
      res.push(num);
    }
  });
  return res;
};

export const commonElements3 = (array1 = [], array2 = []) => {
  const res = array1.filter((num) => array2.includes(num));
  return res;
};

//q8: Sort cities alphabetically

export const sortAlphabetically1 = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

export const sortAlphabetically2 = (arr = []) => {
  return arr.sort();
};

export const sortAlphabetically3 = (arr = []) => {};

//q9:Find duplicated items in an array
export const duplicated1 = (arr = []) => {
  let index = 0;
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i != j && arr[i] == arr[j]) {
        res[index] = arr[i];
        arr[i] = 0;
        index++;
        break;
      }
    }
  }
  return res;
};
export const duplicated2 = (arr = []) => {
  const res = arr.filter((num, index, arr) => {
    return arr.indexOf(num) != index;
  });
  return res;
};

export const duplicated3 = (arr = []) => {
  arr.sort();
  let res = [];
  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] == arr[i + 1] && !res.includes(arr[i])) {
        res.push(arr[i]);
    }
  }
  return res;
};

//
