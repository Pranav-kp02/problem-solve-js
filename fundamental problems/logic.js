// 1

const sum = (num1, num2) => {
  console.log(num1 + num2);
};
sum(9, 8);

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

console.log(smallestNumber(9, 4, 1));
