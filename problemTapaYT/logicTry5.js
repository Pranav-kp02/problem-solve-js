// 2

const hashTagGen = (str) => {
  str = str.split(" ");
  return (
    "#" + str.map((ele) => ele.replace(ele[0], ele[0].toUpperCase())).join("")
  );
};

console.log(hashTagGen("hello world fff"));
