// 1

const pattern1 = (num) => {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 0; j < num; j++) {
      str += "*";
    }
    console.log(str);
  }
};
// pattern1(4);

const twoPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
      str += "*";
    }
    console.log(str);
  }
};
twoPattern(4);
