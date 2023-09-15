function zipList(array1, array2) {
  const zippedArray = [];
  let i = 0;
  while (i < array1.length && i < array2.length) {
    zippedArray.push(array1[i]);
    zippedArray.push(array2[i]);
    i++;
  }
  return zippedArray;
}

function zipListTheSimpleWay(array1, array2) {
  return _.flatten(_.zip(array1, array2));
}

const abc = ['a', 'b', 'c'];
const ott = [1, 2, 3];

console.log(zipList(abc, ott));
console.log(zipListTheSimpleWay(abc, ott));
