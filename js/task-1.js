console.log(
  "Task 1 ------------------------------------------------------------"
);

const getItemsString = function (array) {
  for (let i = 0; i < array.length; i += 1) {
    array[i] = `${i + 1} - ${array[i]}`;
  }
  let result = array.join("\n");
  return result;
};

console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

console.log(getItemsString([5, 10, 15]));

console.log(typeof getItemsString([5, 10, 15]));
