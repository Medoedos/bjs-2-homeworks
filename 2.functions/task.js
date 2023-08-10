function getArrayParams(...arr) {
  let min = arr[0],
    max = arr[0],
    sum = 0,
    avg = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] > max) {
      max = arr[index];
    } else if (arr[index] < min) {
      min = arr[index];
    }
    sum = sum + arr[index];
    avg = Number(parseFloat(sum / arr.length).toFixed(2));
  }
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  const initialValue = 0;
  const sumWithInitial = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
  );
  return sumWithInitial;
}

function differenceMaxMinWorker(...arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  if (arr.length === 0) {
    return 0;
  } else {
    return Math.abs(max - min);
  }
}

function differenceEvenOddWorker(...arr) {
  if (arr.length === 0) {
    return 0;
  }
  let sumEvenElement = 0,
    sumOddElement = 0;
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sumEvenElement += arr[index];
    } else {
      sumOddElement += arr[index];
    }
  }
  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0,
    countEventElement = 0;
  if (arr.length === 0) {
    return 0;
  }
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] % 2 === 0) {
      sumEvenElement += arr[index];
      countEventElement++;
    }
  }
  return Number(parseFloat(sumEvenElement / countEventElement).toFixed(2));
}

function makeWork(arrOfArr, func) {
  let maxWorkerResult = Number.MIN_VALUE;
  let arr = [];
  for (let i = 0; i < arrOfArr.length; i++) {
    arr[i] = func(...arrOfArr[i]);
    maxWorkerResult = Math.max(arr[i], maxWorkerResult);
  }
  return maxWorkerResult;
}