const capitalize = (str) => {
  const [first, ...rest] = str;
  return `${first.toUpperCase()}${rest.join('').toLowerCase()}`;
};

console.log(capitalize('fooBar'));   // Output: "Foobar"
console.log(capitalize('node.Js'));  // Output: "Nodejs"
