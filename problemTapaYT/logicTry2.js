// // JavaScript Coding Challenges try2 🔥

// 2

const hashTagGen = (str) => {
  str = str.split(" ");
  str = str.map((curr) => curr.replace(curr[0], curr[0].toUpperCase()));
  console.log("#" + str.join(""));
};

// hashTagGen("hello world");

// 5

const sortArray = (arr) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let ref = arr[i];
        arr[i] = arr[j];
        arr[j] = ref;
      }
      console.log(arr[i]);
    }
  }
  return arr;
};

// console.log(sortArray([5, 3, 10, 8]));

const checkTriagle = (s1, s2, s3) => {
  if (s1 === s2 && s2 === s3) {
    return "equilateral";
  } else if (s1 !== s2 && s2 !== s3 && s1 !== s3) {
    return "scalene";
  } else {
    return "issolateal";
  }
};
// console.log(checkTriagle(5, 4, 3));

// 12

const duplicateCheck = (arr) => {
  console.log(...new Set(arr));
};

const duplicateCheck2 = (arr) =>
  arr.filter((value, index, self) => self.indexOf(value) === index);

// console.log(duplicateCheck2([1, 2, 3, 2, 1, 4]));

// 17

const camelCaseConveter = (str) => {
  str = str.split(" ");
  console.log(str);

  let val = str.map((curr, index) => {
    if (index === 0) {
      return curr.toLowerCase();
    } else {
      return curr.charAt(0).toUpperCase() + curr.slice(1).toLowerCase();
    }
  });
  console.log(val.join(""));
};

// camelCaseConveter("hello world");

// 23

// const arr = [1, 2, 2, 3, 1, 4, 2];
// let count = {};

// for (let ele of arr) {
//   count[ele] = (count[ele] || 0) + 1;
// }

// console.log(count);

// 24

const modeFinder = (arr) => {
  let count = {};
  for (let ele of arr) {
    count[ele] = (count[ele] || 0) + 1;
  }

  let big = 0;
  let key = "";

  for (let ele of arr) {
    if (count[ele] > big) {
      big = count[ele];
      key = ele;
    }
    console.log(key, big);
  }
  console.log(key);
};

// modeFinder([1, 2, 2, 3, 1, 4, 3, 3, 3, 2]);

// 25

const factorial = (num) => {
  let res = 1;
  for (let i = 1; i <= num; i++) {
    res = res * i;
  }
  // console.log(res);
};

// factorial(5);

const factorial2 = (num) => {
  if (num === 1) {
    return 1;
  } else {
    console.log(num);

    return num * factorial2(num - 1);
  }
};

// console.log(factorial2(5));

// 26

const fibonachiSeries = (num) => {
  if (num <= 1) {
    return num;
  } else {
    console.log(num);

    return fibonachiSeries(num - 1) + fibonachiSeries(num - 2);
  }
};

// console.log(fibonachiSeries(4));

// 29

const numberRange = (num1, num2, arr = []) => {
  if (num1 <= num2) {
    arr.push(num1);
    return numberRange(num1 + 1, num2, arr);
  }
  return arr;
};
// console.log(numberRange(0, 5));

// 33

const randomHexGen = () => {
  let gen = Math.random().toString(16).slice(2, 8);
  console.log("#" + gen);
};

// randomHexGen();

// 34

const removeDuplicet = (arr) => {
  console.log(...new Set(arr));
};
// removeDuplicet([1, 2, 2, 3, 4, 4, 5]);

// 35

const emptyObj = (obj) => {
  return Object.keys(obj).length === 0 ? "empty" : "not empty";
};

// console.log(emptyObj({ name: "nua" }));

const objToArr = (obj) => {
  let arr = Object.entries(obj);
  console.log(arr);
  let objCon = Object.fromEntries(arr);
  console.log(objCon);
};

// objToArr({
//   name: "tom",
//   age: 21,
//   place: "kochi",
// });

const daysCounter = (d1, d2) => {
  let day1 = new Date(d1);
  let day2 = new Date(d2);
  let diff = day2 - day1;
  console.log(diff / (24 * 60 * 60 * 1000));
};

// daysCounter("2024-01-01", "2024-01-31");

const ageFinder = (brtday) => {
  brtday = new Date(brtday);
  let today = new Date();
  let age = today.getFullYear() - brtday.getFullYear();
  let month = today.getMonth() - brtday.getMonth();
  if (month < 0 || (month === 0 && today.getDay() < brtday.getDay())) {
    age--;
  }
  console.log(age);
};

// ageFinder("2002-02-13");

const rate = {
  USD: 1,
  EUR: 0.9,
  GBR: 0.8,
  INR: 80,
};

const currencyConvet = (amout, fc, tc) => {
  let usdMoney = 0;
  if (fc !== "USD") {
    usdMoney = amout / rate[fc];
  } else {
    usdMoney = amout;
  }

  let convetedAmt = 0;
  if (tc !== "USD") {
    convetedAmt = amout * rate[tc];
  } else {
    convetedAmt = usdMoney;
  }

  console.log(convetedAmt);
};
// currencyConvet(100, "USD", "INR");
