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
// twoPattern(4);

const thirdPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let space = 1; space <= num - i; space++) {
      str += " ";
    }
    for (let j = 0; j < i; j++) {
      str += "*";
    }

    console.log(str);
  }
};

// thirdPattern(4);

const fouthPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= num - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "*";
    }
    for (let k = 1; k <= i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
};
// fouthPattern(5);

const fifthPattern = (num) => {
  for (let i = 0; i < num; i++) {
    let str = "";
    for (let j = 1; j <= num - i; j++) {
      str += "*";
    }
    console.log(str);
  }
};

// fifthPattern(5);

const sixthPattern = (num) => {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= num - i; j++) {
      str += " ";
    }
    for (let k = 1; k <= i; k++) {
      str += "*";
    }
    for (let k = 1; k <= i - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let j = 1; j <= i; j++) {
      str += " ";
    }
    let star = num - i;
    for (let k = 1; k <= star; k++) {
      str += "*";
    }
    for (let k = 1; k <= star - 1; k++) {
      str += "*";
    }
    console.log(str);
  }
};
// sixthPattern(5);

// 7

const sevnthPattern = (num) => {
  for (let i = 1; i <= num / 2; i++) {
    let str = "";
    for (let star = 1; star <= i; star++) {
      str += "*";
    }
    for (let space = 1; space <= num - i * 2; space++) {
      str += " ";
    }
    for (let star = 1; star <= i; star++) {
      str += "*";
    }
    console.log(str);
  }

  for (let i = 1; i <= 1; i++) {
    let str = "";
    for (let star = 1; star <= num; star++) {
      str += "*";
    }
    console.log(str);
  }

  for (let i = num / 2; i >= 1; i--) {
    let str = "";
    for (let star = 1; star <= i; star++) {
      str += "*";
    }
    for (let space = 0; space <= num - i * 2; space++) {
      str += " ";
    }
    for (let star = 1; star <= i; star++) {
      str += "*";
    }
    console.log(str);
  }
};
sevnthPattern(7);
