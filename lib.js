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

////q4:Count the number of people eligible to vote

export const countEligible1 = (arr = []) => {
  let count = 0;
 
  for (let i = 0; i < arr.length; i++) {
    if(arr[i]>=18) count++;
  }
  return count;
};
