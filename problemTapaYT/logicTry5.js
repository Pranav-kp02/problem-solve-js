// 2

const hashTagGen = (str) => {
  str = str.split(" ");
  return (
    "#" + str.map((ele) => ele.replace(ele[0], ele[0].toUpperCase())).join("")
  );
};

// console.log(hashTagGen("hello world fff"));

// 25

const factorial = (num) => {
  if (num === 1) {
    return num;
  } else {
    return num * factorial(num - 1);
  }
};

// console.log(factorial(5));

const passwordValidation = (str) => {
  str = str.split("");

  if (str.length < 8) {
    return "weak password";
  }
  const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lower = "abcdeghijklmnopqrstuwxyz";
  const digit = "1234567890";

  let uCase = false;
  let lCase = false;
  let dCase = false;

  str.map((ele) => {
    if (upper.includes(ele)) {
      return (uCase = true);
    } else if (lower.includes(ele)) {
      return (lCase = true);
    } else if (digit.includes(ele)) {
      return (dCase = true);
    }
  });

  if (uCase && lCase && dCase) {
    return "strong  password";
  }
  return "weak password";
};
// console.log(passwordValidation("a1AAw1aa"));
