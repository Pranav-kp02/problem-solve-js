// JavaScript Coding Challenges🔥

// 1 longest word

function longestWord(str) {
  str = str.split(" ");
  let res = "";
  for (let i = 0; i < str.length; i++) {
    if (res.length < str[i].length) {
      res = str[i];
    }
  }
  console.log(res);
}

const longestWord2 = (str) => {
  str = str.split(" ");
  return str.reduce((acc, cur) => (acc.length < cur.length ? cur : acc), "");
};

// console.log(longestWord2("this is javascript logic build"));

// generate hasstag

const genRateHassTag = (str) => {
  if (str.length > 280 || str.trim().length == 0) {
    return false;
  }
  str = str.split(" ");
  let res = "#";
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    res = res + str[i];
  }
  return res;
};

const genRateHassTag2 = (str) => {
  if (str.length > 280 || str.trim().length == 0) {
    return false;
  }
  str = str.split(" ");

  str = str.map((ele) => ele.replace(ele[0], ele[0].toUpperCase()));
  str = `#${str.join("")}`;
  console.log(str);
};
// console.log(genRateHassTag2("hello world mallu"));

// count char

// console.log(mis.indexOf("i", 11));

const countChar = (str, lett) => {
  lett = lett.toLowerCase();
  str = str.toLowerCase();
  let res = [];
  let index = str.indexOf(lett);
  while (index !== -1) {
    res.push(index);
    index = str.indexOf(lett, ++index);
  }
  console.log(res.length);
};

const countChar2 = (str, lett) => {
  lett = lett.toLowerCase();
  str = str.toLowerCase();

  let total = str.split("").reduce((acc, cur) => {
    if (cur === lett) {
      ++acc;
    }
    return acc;
  }, 0);
  console.log(total);
};
// countChar2("MissIssippi", "I");

// problem 4

const checkTriangleType = (num1, num2, num3) => {
  if (num1 == num2 && num2 == num3) {
    console.log("equilatrel");
  } else if (num1 !== num2 && num2 !== num3 && num1 !== num3) {
    console.log("scalene");
  } else if (num1 === num2 || num2 === num3 || num1 === num3) {
    console.log("isoslece");
  }
};
// checkTriangleType(1, 4, 3);

// problem 5

const sortAsecnding = (arr) => {
  let res = [];
  let sort = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        sort = arr[i];
        arr[i] = arr[j];
        arr[j] = sort;
      }
    }
  }
  console.log(arr);
};
// sortAsecnding([5, 3, 1, 8]);

// problem 6

const isPalindrom = (str) => {
  str = str.trim().toLowerCase().replace(/\W/g, "").split(" ");

  let res = [];
  for (let i = str.length - 1; i >= 0; i--) {
    res.push(str[i]);
  }
  res = res.join("");
  str = str.join("");
  console.log(str, res);

  if (str !== res) {
    return false;
  }
  return true;
};
// console.log(isPalindrom("A man, a plan, a canal, Panama "));

// 7

const maxarray = (arr) => {
  let res = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (res < arr[i]) {
      res = arr[i];
    }
  }
  console.log(res);
};

// maxarray([5]);

// 8

const factorialCheck = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  console.log(res);
};
// factorialCheck(3);

// 9

const averageOfArr = (arr) => {
  let res = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  console.log(res);
};
// averageOfArr([5, 10, 2, 8]);

// 10

const isBothArrEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((curr, index) => curr === arr2[index]);
};
// console.log(isBothArrEqual([1, 2, 3], [1, 2, 3, 4]));

// 11

const totalSumOfElement = (num) => {
  let array = Array.from(String(num), Number);
  return array.reduce((curr, acc) => curr + acc, 0);
};
// console.log(totalSumOfElement(1234));

// 12

const duplicateArryFinder = (arr) => {
  let newArr = [...new Set(arr)];
  console.log(newArr);
};
// duplicateArryFinder([1, 2, 3, 2, 1, 4]);

// 13

const vowelsCounder = (str) => {
  str = str.toLowerCase();
  let vowels = "aeiou";
  let vowelsCounter = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      vowelsCounter += 1;
    }
  }
  console.log(vowelsCounter);
};

// vowelsCounder("BrrP");

// 14

const powerOfTwo = (num) => {
  for (let i = 0; i <= num; i++) {
    if (Math.pow(2, i) === num || num == 0) {
      return true;
    }
  }
  return false;
};

// console.log(powerOfTwo(0));

// 15

const squareOfArrAy = (arr) => {
  let res = arr.reduce((acc, cur) => acc + cur * cur, 0);
  console.log(res);
};
// squareOfArrAy([1, 2, 3, 4]);

// 16

const shortestNUmber = (arr) => {
  let arr1 = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr1 > arr[i]) {
      arr1 = arr[i];
    }
  }
  console.log(arr1);
};

// shortestNUmber([15, 10, -8]);

// 17

const camelCase = (str) => {
  str = str.toLowerCase().split(" ");
  str = str.map((curr, index) => {
    if (index === 0) {
      return curr;
    } else {
      return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
    }
  });
  console.log(str.join(""));
};
// camelCase("hello World SUNMO");

const snakeCase = (str) => {
  str = str.toLowerCase().split(" ");

  str = str.map((curr, index) => {
    if (index === 0) {
      return curr;
    } else {
      return "_" + curr;
    }
  });
  console.log(str.join(""));
};

// snakeCase("hello world");

const isLowerCase = (str) => {
  let res = str.toLowerCase();
  if (res !== str) {
    return false;
  }
  return true;
};

// console.log(isLowerCase("b"));

// 19

const substring = (str, str2) => {
  str2 = str2.toLowerCase();
  str = str.toLowerCase().split(" ");
  for (let i = 0; i < str.length; i++) {
    if (str[0] === str2) {
      return true;
    }
    return false;
  }
};

// console.log(substring("Hello world", "hello"));

// 20

const reverserString = (str) => {
  return (str = str.split("").reverse().join(""));
};
// console.log(reverserString("hello"));

// 21

const calculateMean = (arr) => {
  let res = arr.reduce((acc, cur) => acc + cur, 0);
  console.log(res / arr.length);
};

// calculateMean([0]);

// 22

const calcMedium = (arr) => {
  let res = arr.sort((a, b) => a + b);
  if (res.length % 2 === 0) {
    console.log((res[res.length / 2] + res[res.length / 2 - 1]) / 2, res);
  } else {
    console.log(res[(res.length / 2).toFixed() - 1], res);
  }
};
// calcMedium([1, 3, 5, 7, 9, 11]);

// 23

const repitationCheck = (arr) => {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    obj[arr[i]] = count;
  }
  console.log(obj);
};

// repitationCheck([1, 2, 2, 3, 1, 4, 2]);

// 24

const findMode = (arr) => {
  let obj = {};
  let max = 0;
  let mode;

  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        count++;
      }
    }
    obj[arr[i]] = count;

    if (obj[arr[i]] > max) {
      max = obj[arr[i]];
      mode = arr[i];
    }
  }
  // console.log(mode);
};
// findMode([1, 2, 2, 3, 1, 4, 2]);

// 25

const factorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};
// console.log(factorial(5));

// 26

const finbonachiSeries = (num) => {
  if (num <= 1) {
    return num;
  } else {
    return finbonachiSeries(num - 1) + finbonachiSeries(num - 2);
  }
};
// console.log(finbonachiSeries(5));

// 27

const repetstring = (str, num) => {
  let res = "";
  for (let i = 0; i < num; i++) {
    res += str;
  }
  console.log(res);
};

// repetstring("abc", 5);

// 28

const trancate = (str, num) => {
  // str = str.split("");
  let res = [];
  for (let i = 0; i < str.length; i++) {
    if (i < 8) {
      res.push(str[i]);
    }
  }
  return res.join("") + "...";
};

const trancate2 = (str, num) => {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  }
};

// console.log(trancate2("a-tisket a tick tac toa", 8));

// 29

const numberRange = (num1, num2) => {
  let res = [];
  for (let i = num1; i <= num2; i++) {
    res.push(num1++);
  }
  console.log(res);
};
// numberRange(-2, 2);

const numberRangeRecurtion = (num1, num2, arr = []) => {
  if (num1 <= num2) {
    arr.push(num1);
    return numberRangeRecurtion(num1 + 1, num2, arr);
  }
  console.log(arr);
};

// console.log(numberRangeRecurtion(3, 7));

// 31

const paswordValidation = (str) => {
  if (str.length < 8) {
    return false;
  }
  let uppercCse = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let lowercase = uppercCse.toLowerCase();

  let upper = false;
  let lower = false;
  let num = false;
  for (let i = 0; i < str.length; i++) {
    if (uppercCse.includes(str[i])) {
      upper = true;
    } else if (lowercase.includes(str[i])) {
      lower = true;
    } else if (!isNaN(Number(str[i]))) {
      num = true;
    }
  }
  return upper && lower && num;
};

// console.log(paswordValidation("ABCDEfghi12"));

const hexaColor = () => {
  return Math.random().toString(16).slice(2, 8);
};

// console.log("#" + hexaColor());

// 34

const removeDuplicate = (arr) => {
  console.log(new Set(arr));
};

// removeDuplicate([1, 2, 3, 3, 4, 4, 5]);

const isEmpty = (obj) => {
  let objKey = Object.keys(obj);
  if (objKey.length === 0) {
    return "its empty";
  }

  for (let i = 0; i < objKey.length; i++) {
    if (!obj[objKey[i]]) {
      return "its empty";
    }
    return "its not empty";
  }
};
// console.log(isEmpty({}));

// 36

const obj = {
  name: "aloce",
  age: 19,
  palce: "mumbai",
};
let enteris = Object.entries(obj).flat();
// console.log(enteris);
// console.log(Object.fromEntries(enteris));

// 37

const simpleIntrest = (amt, yr, tm) => {
  return (amt * yr * tm) / 100;
};
// console.log(simpleIntrest(1000, 5, 3));

// 38

const daysBetween = (dat1, dat2) => {
  let date1 = new Date(dat1);
  let date2 = new Date(dat2);
  // console.log(date1, date2);

  let diff = (date2 - date1) / (24 * 60 * 60 * 1000);
  console.log(diff);
};

// daysBetween("2000-02-01", "2040-02-01");

const ageFinder = (dob) => {
  let dobDate = new Date(dob);
  let crrDate = new Date();

  let yearDiff = crrDate.getFullYear() - dobDate.getFullYear();

  let monthDiff = crrDate.getMonth() - dobDate.getMonth();

  if (monthDiff < 0 || crrDate.getDate() < dobDate.getDate()) {
    yearDiff--;
  }
  console.log(yearDiff);
};

// ageFinder("2002-02-13");

const graphGenerater = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let str = "";
    for (let j = 1; j <= arr[i]; j++) {
      str += "*";
    }
    console.log(`${i + 1}: ${str}`);
  }
};

const graphGenerater2 = (arr) => {
  return arr
    .map((ele, index) => {
      return `${index + 1}:  ${"*".repeat(ele)}`;
    })
    .join("\n");
};
// console.log(graphGenerater2([5, 3, 9, 2]));

// graphGenerater([5, 3, 9, 2]);

// 41

let rate = {
  usd: 1,
  eur: 0.9,
  inr: 80,
};

const currencyConveter = (base, currCnt, convt) => {
  let amoutUsd = 0;
  if (currCnt !== "usd") {
    amoutUsd = base / rate[currCnt];
  } else {
    amoutUsd = base;
  }

  let convetedAmt = 0;
  if (convt !== "usd") {
    convetedAmt = amoutUsd * rate[convt];
  } else {
    convetedAmt = amoutUsd;
  }
  console.log(convetedAmt);
};
// currencyConveter(100, "inr", "eur");

// 43

const fizzBuzz = (num1, num2) => {
  let res = [];
  for (let i = num1; i <= num2; i++) {
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

// fizzBuzz(10, 20);

// 42

const validCardCheck = (num) => {
  num = num.split("").filter((ele) => ele !== " ");
  // console.log(num);

  let revnum = [];

  for (let i = num.length - 1; i >= 0; i--) {
    if (i % 2 === 0) {
      if (Number(num[i]) * 2 > 9) {
        revnum.push(Number(num[i] * 2) - 9);
      } else {
        revnum.push(Number(num[i]) * 2);
      }
    } else {
      revnum.push(Number(num[i]));
    }
  }

  let total = revnum.reduce((acc, curr) => acc + curr, 0);
  console.log(revnum, total);
  return total % 10 === 0;
};

// console.log(validCardCheck("6522 9407 9354 6121"));

// 43

const emailValidation = (str) => {
  return /^[A-Za-z0-9]+(?:[.%_+][A-Za-z0-9]+)*@[A-Za-z0-9]+\.[A-Za-z]{2,}$/.test(
    str
  );
};

// console.log(emailValidation("tom@tom.com"));

const passwordValidation2 = (str) => {
  return /^(?=.*[A-Z])(?=.*[a-z])(?=.*[\d])(?=.*[\W_]).{8,}$/.test(str);
};

// console.log(passwordValidation2("Pass123"));

const phoneNumber = (num) => {
  return /^[6-9][0-9]{9}$/.test(num);
};

// console.log(phoneNumber(1345672890));

const extractNumber = (str) => {
  let reg = /\d+/g;
  console.log(str.match(reg));
};
extractNumber("abc123cd45");
