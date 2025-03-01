// 1

const sum = (num1, num2) => {
  console.log(num1 + num2);
};
// sum(9, 8);

const areaRectangle = (h, b) => {
  console.log(h * b);
};

// areaRectangle(9, 8);

// 2

const isOddOrEven = (num) => {
  return num % 2 === 0 ? "isEven" : "isOdd";
};

// console.log(isOddOrEven(3));

// 3

const smallestNumber = (num1, num2, num3) => {
  let small = num1;
  if (num1 < num2 && num1 < num3) {
    small = num1;
  } else if (num2 < num1 && num2 < num3) {
    small = num2;
  } else {
    small = num3;
  }
  return small;
};

// console.log(smallestNumber(9, 4, 1));

// 4

const reverseString = (str) => {
  str = str.split("").reverse().join("");
  console.log(str);
};

// reverseString("hello world");

// 5

const recursionFActorial = (num) => {
  if (num === 1) {
    return num;
  } else {
    return num * recursionFActorial(num - 1);
  }
};

// console.log(recursionFActorial(5));

const findLeapYear = (num) => {
  if (num % 4 === 0) {
    return "isLeapYear";
  }
  return "not leap year";
};
// console.log(findLeapYear(2028));

// 6

const sumOFNum = (num) => {
  let sNum = num.toString();
  let res = 0;
  for (let i = 0; i < sNum.length; i++) {
    res += Number(sNum.charAt(i));
  }
  return res;
};

// console.log(sumOFNum(456))

const mutiplicationTable = (num, till) => {
  for (let i = 1; i <= till; i++) {
    console.log(`${num}*${i}=`, num * i);
  }
};
// mutiplicationTable(4, 10);

const largestFromArray = (arr) => {
  let res = 0;
  arr.map((ele) => {
    if (ele > res) {
      res = ele;
    }
  });
  return res;
};
// console.log(largestFromArray([2, 3, 5, 8]));

// 9

const palindrom = (str) => {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
  }
  console.log(revStr === str);
};
// palindrom('madam')

// 10

const exponetCal = (base, expo) => {
  let res = 1;
  for (let i = 1; i <= expo; i++) {
    res *= base;
  }
  console.log(res);
};
// exponetCal(4,4)

const vowelCounter = (str) => {
  str.toLowerCase();
  let vCount = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      vCount += 1;
    }
  }
  console.log(vCount);
};

const vowelCounter2 = (str) => {
  const vowel = ["a", "e", "i", "o", "u"];
  let vCount = 0;
  for (let i = 0; i < str.length; i++) {
    // console.log(str[i])
    if (vowel.includes(str[i])) {
      vCount += 1;
    }
  }
  console.log(vCount);
};
// vowelCounter2('hello world')

const factorNumbers = (num) => {
  let res = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }
  console.log(res.join());
};

// factorNumbers(14)

const avgOfArr = (arr) => {
  let res = 0;
  let avg = 0;
  for (let i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  res = avg / arr.length;
  console.log(res, avg);
};
// avgOfArr([1,2,4])

const calSimpleInt = (prin, ints, dur) => {
  return (prin * ints * dur) / 100;
};
// console.log(calSimpleInt(1000,5,1))

const isPrimeNum = (num) => {
  let val = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      val++;
    }
  }
  if (val === 2) {
    return "is prime";
  }
  return "not prime";
};

// console.log(isPrimeNum(88))

const noOfSentence = (str) => {
  str = str.trim();
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === " ") {
      count++;
    }
  }
  console.log(count);
};
// noOfSentence('the is hello world')

function countWords(sentence) {
  let count = 0;
  let inWord = false;

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " " && !inWord) {
      count++;
      inWord = true;
    } else if (sentence[i] === " ") {
      inWord = false;
    }
    console.log(sentence[i], count, inWord);
  }

  return count;
}

console.log(countWords("Hello world!   This is a test."));

const tempConveter = (temp) => {
  return (temp * 9) / 5 + 32;
};
console.log(tempConveter(27));

let a = 5;
let b = 6;
a = a + b;
b = a - b;
a = a - b;

console.log("a=" + a, "b=" + b);

// const isArmStrong = (num) => {
//   num = num.toString();
//   let res = 0;
//   for (let i = 0; i < num.length; i++) {
//     res += Math.pow(Number(num[i]), num.length);
//   }
//   if (res === Number(num)) {
//     return "isArmsrong";
//   }
//   return "is notArmsrong";
// };
// console.log(isArmStrong(370));

const isArmStrong = (num) => {
  let temp = num;
  let count = 0;
  let sum = 0;

  // Count the number of digits
  let n = temp;
  while (n > 0) {
    count++;
    n = Math.floor(n / 10);
  }

  // Calculate the sum of digits raised to the power of count
  temp = num;
  while (temp > 0) {
    let digit = temp % 10;
    console.log(digit);

    // Manually calculate power (digit^count)
    let power = 1;
    for (let i = 0; i < count; i++) {
      power *= digit;
    }

    sum += power;
    temp = Math.floor(temp / 10);
  }

  return sum === num ? "is Armstrong" : "is not Armstrong";
};

console.log(isArmStrong(370)); // Output: is Armstrong

const fizzBuzz = (num) => {
  let res = [];
  for (let i = 1; i <= num; i++) {
    // console.log(i)
    if (i % 3 === 0 && i % 5 === 0) {
      res.push("fizzBuzz");
    } else if (i % 3 === 0) {
      res.push("fizz");
    } else if (i % 5 === 0) {
      res.push("buzz");
    } else {
      res.push(i);
    }
  }
  console.log(res);
};
fizzBuzz(15);

const numberPyramid = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let s = 1; s <= num - i; s++) {
      str += " ";
    }
    for (let n = 1; n <= i; n++) {
      str += n;
    }
    for (let n = i - 1; n >= 1; n--) {
      str += n;
    }
    console.log(str);
  }
};

numberPyramid(5);

const countChar = (str) => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]] += 1;
    }
  }
  return obj;
};
console.log(countChar("hello world"));

const alphaOrder = (str) => {
  let resStr = [0];
  for (let i = 1; i < str.length; i++) {
    if (resStr < str[i]) {
      resStr = str[i];
    } else {
      return false;
    }
  }
  return true;
};
console.log(alphaOrder("acehko"));

const matrixTranspose = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (!res[j]) {
        res[j] = [];
      }
      res[j][i] = arr[i][j];
    }
  }
  console.log(res);
};
matrixTranspose([
  [3, 4, 8],
  [5, 6, 9],
]);

const perfectNum = (num) => {
  let res = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      res.push(i);
    }
  }
  let resNum = 0;
  for (let i = 0; i < res.length; i++) {
    resNum += res[i];
  }
  console.log(num === resNum, resNum, res);
};
perfectNum(28);

const passwordCheck = (str) => {
  const upper = "ABCDEFGHIJKLMNOPQRSUVTWXYZ";
  const lower = "abcdefghijklmnopqrsuvtwxyz";
  const num = "1234567890";
  const symb = "!@#$";

  let upperCase = false;
  let lowerCase = false;
  let numCase = false;
  let symCase = false;
  for (let i = 0; i < str.length; i++) {
    if (upper.includes(str[i])) {
      upperCase = true;
    } else if (lower.includes(str[i])) {
      lowerCase = true;
    } else if (num.includes(str[i])) {
      numCase = true;
    } else if (symb.includes(str[i])) {
      symCase = true;
    }
  }
  if (upperCase && lowerCase && numCase && symCase) {
    return true;
  }
  return false;
};
console.log(passwordCheck("PassW@1"));

const tipCalculator = (amt, tip) => {
  let obj = {};
  for (let i = 0; i < tip.length; i++) {
    if (!obj[tip[i]]) {
      obj[tip[i]] = 0;
    }
    obj[tip[i]] = (amt * tip[i]) / 100;
  }

  console.log(obj);
};
tipCalculator(1000, [5, 10, 15, 20, 50]);

const palidrom = (str) => {
  let res = "";
  for (let i = str.length - 1; i >= 0; i--) {
    res += str[i];
  }
  if (res !== str) {
    return false;
  }
  return true;
};

const subPalidrom = (str) => {
  let res = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str.length; j++) {
      let subStr = str.slice(i, j);

      if (palidrom(subStr) && subStr.length > 1) {
        res.push(subStr);
      }
    }
  }
  console.log(res);
};
subPalidrom("bradarasmadamsa");

let pObj = {
  "{": "}",
  "[": "]",
  "(": ")",
};
const balParthesess = (parth) => {
  let res = "";
  for (let i = parth.length / 2 - 1; i >= 0; i--) {
    console.log(
      pObj[parth[i]],
      parth[parth.length - 1 - i],
      i,
      parth.length - 1 - i
    );
    if (pObj[parth[i]] !== parth[parth.length - 1 - i]) {
      return false;
    }
  }
  return true;
};
console.log(balParthesess("{[()]}"));
