//Dùng for để diễn tả method join
const fruits = ["h", "e", "l", "l", "o"];
function customJoin(array, seperator) {
  let result = "";
  for (let i = 0; i < array.length; i++) {
    result = result + array[i];
    if (i !== array.length - 1 && typeof seperator === "string") {
      result = result + seperator;
    }
  }
  return result;
}

const joinedFruit = customJoin(fruits);
console.log("Chuỗi mới sau khi dùng customJoin là: ", joinedFruit);

// 1. Tính tổng các số trong mảng:
const arrayNum = [1, 2, 3, 4, 5];
let sum = 0;
for (let i = 0; i < arrayNum.length; i++) {
  sum = sum + arrayNum[i];
}
console.log("Tổng của mảng là: ", sum);

// 2. Đảo ngược chuỗi và loại bỏ các kí tự số có trong chuỗi
const inputStr = "a1b2c3d4";
function reverseAndRemoveNumbers(str) {
  var reverseStr = str.split("").reverse().join("");
  var result = reverseStr.replace(/\d/g, ""); // sử dụng biểu thức chính quy để tìm và thay thế các kí tự số
  return result;
}
const result = reverseAndRemoveNumbers(inputStr);
console.log("Chuỗi sau khi loại bỏ số và đảo ngược là: ", result);

// 3.Tìm giá trị lớn nhất, nhỏ nhất trong mảng
const arrayNumbers = [0, 7, 23, 24, 1, 45, 78, 13, 90];
function findMinMax(arrayNumbers) {
  if (arrayNumbers.length === 0) {
    return [null, null];
  }
  let minValue = arrayNumbers[0];
  let maxValue = arrayNumbers[0];

  for (let i = 0; i < arrayNumbers.length; i++) {
    if (arrayNumbers[i] < minValue) {
      minValue = arrayNumbers[i];
    }
    if (arrayNumbers[i] > maxValue) {
      maxValue = arrayNumbers[i];
    }
  }
  return [minValue, maxValue];
}
const [minValue, maxValue] = findMinMax(arrayNumbers);
console.log("Giá trị nhỏ nhất là:", minValue);
console.log("Giá trị lớn nhất là:", maxValue);

// 4.Tìm các số xuất hiện nhiều nhất trong mảng.
const arrNums = [1, 1, 4, 6, 7, 8, 9, 9, 1, 4, 5, 9, 1, 9];
const frequencyMap = [];

// Đếm tần suất xuất hiện của mỗi số
for (let num of arrNums) {
  if (frequencyMap[num] === undefined) {
    frequencyMap[num] = 1;
  } else {
    frequencyMap[num]++;
  }
}

// Tìm tần suất xuất hiện lớn nhất
let maxFrequency = 0;
for (let num in frequencyMap) {
  if (frequencyMap[num] > maxFrequency) {
    maxFrequency = frequencyMap[num];
  }
}

// Tạo mảng chứa các số xuất hiện nhiều nhất
const mostFrequentNumbers = [];
for (let num in frequencyMap) {
  if (frequencyMap[num] === maxFrequency) {
    mostFrequentNumbers.push(Number(num));
  }
}

console.log("Các số xuất hiện nhiều nhất là:", mostFrequentNumbers);

// 5. Loại bỏ các phần tử trong mảng theo điều kiện
const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Loại bỏ các phần tử lớn hơn 7
const filteredArray = arrNumbers.filter((num) => num > 7);
console.log("Mảng sau khi loại bỏ  là:", filteredArray);
