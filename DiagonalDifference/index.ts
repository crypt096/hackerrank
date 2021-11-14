let firstSum = 0;
let secondSum = 0;

function addFirstDiagonalSum(arr: number[][]): number {
  let i = 0;
  let j = 0;

  while (i < arr.length) {
    firstSum += arr[i][j];
    i++;
    j++;
  }

  return firstSum;
}

function addSecondDiagonalSum(arr: number[][]): number {
  let i = 0;
  let j = arr.length - 1;

  while (i < arr.length && j >= 0) {
    secondSum += arr[i][j];
    i++;
    j--;
  }

  return secondSum;
}

function diagonalDifference(arr: number[][]): number {
  let a = addFirstDiagonalSum(arr);
  let b = addSecondDiagonalSum(arr);
  return Math.abs(a - b);
}