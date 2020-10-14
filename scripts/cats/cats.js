//aws.random.cat/view/1677

console.log("[");

[...new Array(1677)].forEach((el, i) =>
  console.log(`"https://aws.random.cat/view/${i + 1}",`)
);

console.log("]");
