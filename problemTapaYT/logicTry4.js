// 2

const hashTag = (str) => {
  str = str.split(" ");
  let hash = str.map((ele) => ele.replace(ele[0], ele[0].toUpperCase()));
  console.log("#" + hash.join(""));
};

// hashTag("hello world");

// 5

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      //   console.log(arr[i], arr[j]);
      if (arr[i] > arr[j]) {
        let rep = arr[i];
        arr[i] = arr[j];
        arr[j] = rep;
      }
    }
  }
  console.log(arr);
};
// bubbleSort([1, 3, 3, 4, 2, 5]);

// 25

const recFactorial = (num) => {
  if (num === 1) {
    return 1;
  } else {
    return num * recFactorial(num - 1);
  }
};

// console.log(recFactorial(5));

const simplePasswordcheck = (pass) => {
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdefghijklmnopqrstuvwxyz";
  const dig = "1234567890";

  let upCase = false;
  let lowCase = false;
  let digCase = false;

  for (let i = 0; i < pass.length; i++) {
    if (upper.includes(pass[i])) {
      upCase = true;
    } else if (lower.includes(pass[i])) {
      lowCase = true;
    } else if (dig.includes(pass[i])) {
      digCase = true;
    }
  }

  if (upCase && lowCase && digCase) {
    return true;
  }
  return false;
};

// console.log(simplePasswordcheck("Sdvr1a"));

const randomHexgen = () => {
  return "#" + Math.floor(Math.random() * 1000000).toString(16);
};

// console.log(randomHexgen());
//

// 34

const removeDuplicate = (arr) => {
  let ogArr = [];
  arr.map((ele) => {
    if (!ogArr.includes(ele)) {
      ogArr.push(ele);
    }
  });
  console.log(ogArr);
};

// removeDuplicate([3, 3, 4, 4, 2, 2, 1]);
// 35

const isEmptyObj = (obj) => {
  if (Object.keys(obj).length === 0) return "is empty";
  for (let key in obj) {
    if (!obj[key]) return "is empty bt has key";
  }
  return "is not empty";
};

// console.log(isEmptyObj({ name: "false" }));
